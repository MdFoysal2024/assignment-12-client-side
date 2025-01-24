
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserInfo = () => {
    //custom hooks-->
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: userInfo = [] } = useQuery({

        queryKey: ['userInfo', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userInfo?email=${user.email}`)
            return res.data;
        }

    })

    return [userInfo, refetch];
};

export default useUserInfo;