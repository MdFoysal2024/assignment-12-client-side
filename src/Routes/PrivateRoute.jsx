
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <div className="w-16 mx-auto  h-16 border-4 border-dashed rounded-full animate-spin dark:border-red-800"></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;