import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPersonRunning } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>



            {/* Extra section-02 */}

            <div>
                <section className=" my-32  border-gray-200  text-gray-800">
                    <div className="container flex bg-red-100 flex-col justify-center md:p-16 my-16 mx-auto sm:py-12  lg:flex-row gap-16 lg:justify-between">
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img src="https://i.ibb.co.com/CsRzBcV/donation-image.jpg" alt="" className="" />
                        </div>
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Critical Need for  <span className='text-red-600'> Blood Donors </span>
                            </h1>

                            
                            <p className="mt-6 mb-8 text-gray-500 text-lg sm:mb-12">Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need.Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location. 
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <Link to={'/funding'} rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-red-600 text-white">Donate Here</Link>
                                <Link to={'/blog'} rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg border rounded border-red-600 font-bold text-red-600">View Blog</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;