import useAuth from "../../hooks/useAuth";


const VolunteerHome = () => {

    const { user } = useAuth();

    return (
        <div className='bg-red-100 h-full' >

        <div className='p-24'>
        <div>
             <h2 className='text-3xl font-bold'>Hi Welcome,  <span className='text-red-600'>{user?.displayName}</span></h2>

         </div>


         Home page
        </div>
     </div>
    );
};

export default VolunteerHome;