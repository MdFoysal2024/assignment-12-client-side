import { Helmet } from "react-helmet";
import { BiDollar } from "react-icons/bi";


const FundingPage = () => {
    return (
        <div className='container mx-auto py-24'>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Funding Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center w-full md:w-1/2 mx-auto py-12">

                <h2 className="text-5xl pb-6 font-bold text-red-600"> Fund For Organization</h2>
                <p className="text-gray-500">You are funding lifesaving resources and interventions sit amet consectetur adipisicing elit. Tempore perferendis provident necessitatibus hic eligendi autem.</p>
            </div>


            <div className="flex justify-center"><button className="flex gap-2  items-center  rounded-full bg-red-600 hover:bg-red-800 text-white text-3xl font-bold px-8 py-2"><BiDollar className="text-red-600  bg-white text-3xl rounded-full p-1"></BiDollar> Donate </button></div>
        </div>
    );
};

export default FundingPage;