import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SearchPage from "../pages/SearchPage/SearchPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import FundingPage from "../pages/FundingPage/FundingPage";
import DonationRequests from "../pages/DonationRequests/DonationRequests";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import DonorHome from "../pages/DonarPage/DonorHome";
import CreateDonationRequest from "../pages/DonarPage/CreateDonationRequest";
import MyDonationRequests from "../pages/DonarPage/MyDonationRequests";
import AdminHome from "../pages/AdminPage/AdminHome";
import AllUsers from "../pages/AdminPage/AllUsers";
import ContentManagement from "../pages/AdminPage/ContentManagement";
import AllBloodDonationRequest from "../pages/AdminPage/AllBloodDonationRequest";
import EditDonationRequest from "../pages/DonarPage/EditDonationRequest";
import DonationRequestDetails from "../pages/DonarPage/DonationRequestDetails";
import AddBlog from "../pages/AdminPage/AddBlog";
import UserProfile from "../pages/UserProfile/UserProfile";
import UpdateProfile from "../pages/UserProfile/UpdateProfile";


export const router = createBrowserRouter([
    //Main routes section--------->
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>

            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'search',
                element: <SearchPage></SearchPage>
            },
            {
                path: 'funding',
                element: <PrivateRoute><FundingPage></FundingPage></PrivateRoute>
               
            },
            {
                path: 'blog',
                element: <BlogPage></BlogPage>

            },
            {
                path: 'donationRequests',
                element: <DonationRequests></DonationRequests>
            }
        ]
    },

    //Dashboard routes section--------->
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        )
        ,
        children: [

            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },


            //normal user routes---->
            {
                path: 'donorHome',
                element: <DonorHome></DonorHome>
            },
            {
                path: 'createDonationRequest',
                element: <CreateDonationRequest></CreateDonationRequest>
            },
            {
                path: 'myDonationRequest',
                element: <MyDonationRequests></MyDonationRequests>
            },
            {
                
                path: 'editDonationRequest/:id',
                element: <EditDonationRequest></EditDonationRequest>,
                loader: ({ params }) => fetch(`http://localhost:5000/donationRequest/${params.id}`)
            },
            {
                
                path: 'donationRequestDetails/:id',
                element: <DonationRequestDetails></DonationRequestDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/donationRequest/${params.id}`)
            },


            //only Volunteer routes---->



            //only Admin routes---->
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'content-management',
                element: <ContentManagement></ContentManagement>
            },
            {
                path: 'all-blood-donation-request',
                element: <AllBloodDonationRequest></AllBloodDonationRequest>
            },
            {
                path: 'addBlog',
                element: <AddBlog></AddBlog>
            },
        ]
    }
]);