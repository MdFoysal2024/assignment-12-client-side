import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDonationRequest from "../../hooks/useDonationRequest";


const MyDonationRequests = () => {

    // custom hooks-->
    const [donationRequest, refetch] = useDonationRequest();
    const axiosSecure = useAxiosSecure()

    //-------->'/createDonationRequest'

    //({donationRequest.length})
    return (
        <div className='p-24'>
            My All Donation Requests ({donationRequest.length})
        </div>
    );
};

export default MyDonationRequests;