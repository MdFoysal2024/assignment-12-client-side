import { format } from 'date-fns';
import React, { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({ donorName, donationDate, donationAmount }) => {
    const axiosSecure = useAxiosSecure()

    const [error, setError] = useState();
    const { user } = useAuth();
    const stripe = useStripe();
    const navigate = useNavigate();
    const elements = useElements();
    const [transactionId, setTransactionId] = useState();
    const [clientSecret, setClientSecret] = useState('')






    const donorInfo = {
        donorName,
        donationDate,
        donationAmount
    }
    console.log(donorInfo);



    useEffect(() => {
        if (donationAmount > 0) {
            axiosSecure.post('/create-payment-intent', { price: donationAmount }) 
            //price কে  সার্ভার এর app.post('/create-payment-intent' থেকে আনা হলো ,
                .then(res => {
                    console.log(res.data.clientSecret);

                    //taken from server---> সার্ভার থেকে clientSecret কে এনে  console.log(res.data.clientSecret); এবং setClientSecret() এর ভিতরে সেট করা হয়ছে।  এবং ঐ সার্ভারের clientSecret এর মান  const [clientSecret, setClientSecret] = useState('') এর clientSecret এর ভিতরে মান হিসাবে সেট হবে। যদিও useState('')  এর clientSecret এর নাম এবং সার্ভারের clientSecret এর নাম একই , কিন্তু সার্ভার থেকে clientSecret এনে  setClientSecret() এর ভিতরে সেট করলে useState('')  এর clientSecret ভিতরে মান সেট হবে।

                    setClientSecret(res.data.clientSecret)

                })
        }
    }, [donationAmount])







    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return ;
            // যদি stripe/elements না পায় তাহলে return  করে দিবে।
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
        }


        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
            // if (!card) or if (card === null)-->যদি card না পায় তাহলেও return  করে দিবে।
        }

        
        // const donorInfo = {
        //     donorName,
        //     donationDate,
        //     donationAmount
        // }
        console.log(donorInfo);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message);
        } if (paymentMethod) {
            console.log('payment method', paymentMethod)
            setError(' ');
        }


        //taken from ---->Custom payment flow-->
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card, billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                //inspect > console > paymentIntent > id and status : succeeded  -->
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);




            }
        }

        // save the payment info in to the database ---->
        const donationData = {
            name: donorName,
            amount: donationAmount,
            date: donationDate, 
            transactionId: paymentIntent.id,
           
        }

        const res = await axiosSecure.post('/donations', donationData)
        console.log('Donation Saved', res.data);
        // refetch();
        if (res.data?.paymentResult?.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Thanks For Donation Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/funding');
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="bg-red-600 text-lg my-4 text-white font-semibold px-12 py-1 " type="submit" disabled={!stripe || !clientSecret} >
                Donate
            </button>

            
            <p className="text-red-500 font-bold">{error}</p>
            {
                transactionId && <p>Your Transaction ID: {transactionId}  </p>
            }

        </form>
    );
};

export default CheckoutForm;