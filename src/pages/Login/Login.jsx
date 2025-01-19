import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottieData from "../../assets/Animation-Login.json"
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)

                Swal.fire({
                    title: 'Sign In',
                    text: 'Sign In Successfully',
                    icon: 'success',
                    confirmButtonText: 'Thank You'
                })


                //navigate(location?.state ? location.state : "/");-->  এই লাইনটা উপরের  ভেরিয়েবল const from = ...; এর ভিতরে রেখে এখানে শুধু  from কে আনা হইছে।

                navigate(from, { replace: true });
            })
            .catch((error) => {
                alert(error.code)
            });

    }











    return (
        <div className='container mx-auto items-center md:my-24 justify-center  w-full flex flex-col md:flex-row lg:flex-row '>

            <div className=' w-[520px] space-y-4 p-12  my-12 bg-red-100 shadow-lg '>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Login Page</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div>
                    <h2 className=' text-4xl md:text-4xl lg:text-6xl font-bold text-center pb-6'>
                        <span className="text-red-600"> Login Now </span>
                        
                    </h2>
                </div>


                <form onSubmit={handleLogin}
                    className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>




                    <div className="form-control mt-6">
                        <input type="submit" className="btn bg-red-600 text-white border-none text-lg hover:bg-red-800" value='Login' />
                    </div>
                </form>

                <p className="text-center">New Here <small className="text-red-600 font-medium">
                    <Link to='/signUp' >Create A New Account</Link>
                </small></p>


            </div>

            {/* Lottie Animation */}

            <div>
                <Lottie animationData={loginLottieData}></Lottie>
            </div>
        </div>
    );
};

export default Login;
