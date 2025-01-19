import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            {/* Navbar Section */}
            <Navbar></Navbar>

            {/* Main Outlet Section */}
           
            <div className='min-h-[calc(100vh-593px)] '>
            <Outlet></Outlet>
            </div>

            {/* Footer Section */}
            <Footer></Footer>
        </div>
    );
};

export default Main;