import axios from "axios";


export const axiosPublic = axios.create({
    baseURL: 'https://blood-donation-server-wine.vercel.app',
   
})


const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;
