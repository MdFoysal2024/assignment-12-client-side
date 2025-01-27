import { Helmet } from "react-helmet";
import { BiDollar } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";


const FundingPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    //custom hooks-->
    const axiosSecure = useAxiosSecure();


    const { refetch, data: donationData = [] } = useQuery({

        queryKey: ['donationData'],
        queryFn: async () => {

            const res = await axiosSecure.get('/donations');

            return res.data;

        }

    })





    const handleFunding = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const start_Date = startDate;
        const amount = event.target.amount.value;
        console.log(name, start_Date, amount);



        navigate('/donation', { state: { name, amount, start_Date } })
        // Resetting the form
        event.target.reset();
    }


    return (
        <div className='container mx-auto py-24'>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Funding Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center w-full md:w-1/2 mx-auto py-12">
                
                <h2 className="text-5xl pb-6 font-bold text-red-600"> Fund For Organization</h2>
                <p className="text-gray-500">You are funding lifesaving resources and interventions sit amet consectetur adipisicing elit. Tempore perferendis provident necessitatibus hic eligendi autem.</p>
            </div>


            <div className="flex justify-center"><button
                onClick={() => document.getElementById('my_modal_4').showModal()}
                className="flex gap-2  items-center  rounded-full bg-red-600 hover:bg-red-800 text-white text-3xl font-bold px-8 py-2"><BiDollar className="text-red-600  bg-white text-3xl rounded-full p-1"></BiDollar> Donate </button></div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Donate</button> */}
            <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                        <form
                            onSubmit={handleFunding}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name:</span>
                                </label>
                                <input type="text" name='name' disabled={true} defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Funding Date:</span>
                                </label>
                                <DatePicker
                                    className='border p-3 w-full rounded-md'
                                    selected={startDate} //--->name = {startDate} is dynamic value
                                    onChange={date => setStartDate(date)}

                                />



                            </div>




                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Amount*</span>
                                </label>
                                <input type="number" name="amount" placeholder="Funding Amount" className="input input-bordered" required />

                            </div>



                            <div className="flex justify-center gap-4">

                                <div className="form-control mt-6">



                                    <button type="submit" className="btn  px-8  border-none md:text-xl text-white  hover:bg-red-800 bg-red-600">Donate</button>

                                </div>




                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn  md:text-xl text-red-600 border-red-600 border-2  hover:text-white hover:bg-red-800 bg-white px-8">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </form>
                    </div>





                </div>
            </dialog>





            <div>
                {
                    donationData.length ? <div className="overflow-x-auto my-8">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-red-600 text-lg text-white ">
                                <tr className="">
                                    <th className="pl-6">
                                        #
                                    </th>
                                    <th> Name</th>
                                    <th> Date</th>
                                    <th> Transaction ID</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>



                                {
                                    donationData.map((data, idx) => <tr key={data._id}>
                                        <th>
                                            {idx + 1}
                                        </th>

                                        <td className="text-lg font-bold">
                                            {data.name}
                                        </td>
                                        <td>
                                       
                                            {format(new Date(data.date), 'P')}

                                        </td>
                                        <td>
                                            {data.
                                                transactionId}
                                        </td>
                                        <td className="text-lg font-bold">
                                            ${data.
                                                amount
                                            }
                                        </td>






                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>

                        :
                        <div className="text-center text-2xl pt-12 font-bold">
                            No data  Available Here...
                        </div>
                }
            </div>




















        </div>
    );
};

export default FundingPage;