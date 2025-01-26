import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {

    const location = useLocation();
    console.log(location);

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');


    return (
        <div>
            {/* Navbar Section */}
            {noHeaderFooter || <Navbar ></Navbar>}

            {/* Main Outlet Section */}

            <div className='min-h-[calc(100vh-500px)] '>
                <Outlet></Outlet>
            </div>

            {/* Footer Section */}
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;