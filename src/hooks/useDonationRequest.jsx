import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useDonationRequest = () => {

    //custom hooks-->
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: donationRequest = [] } = useQuery({


        queryKey: ['donationRequest', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donationRequest?email=${user.email}`)
            return res.data;
        }

    })

    return [donationRequest, refetch];

};

export default useDonationRequest;