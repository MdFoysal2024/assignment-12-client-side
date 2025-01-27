
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex justify-center max-w-lg md:max-w-2xl mx-auto bg-red-600 items-center mt-48'>

            
            <div className="hero-content text-neutral-content text-center">
                <div className=" py-8">
                    <h1 className="mb-5 text-6xl md:text-9xl font-bold">404</h1>
                    <p className="mb-5 font-bold">
                        WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND.
                    </p>
                    <Link to='/'>
                    <button className="btn bg-white px-8 text-red-600 hover:text-black text-xl font-bold">Go Home</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;