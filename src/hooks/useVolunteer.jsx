import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useVolunteer = () => {
    

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: isVolunteer, isPending: isVolunteerLoading } = useQuery({
        queryKey: [user?.email, 'isVolunteer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`users/volunteer/${user.email}`);
            //console.log(res.data);
            return res.data?.volunteer
        }
    })

    return [isVolunteer, isVolunteerLoading];



};

export default useVolunteer;