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
                element: <FundingPage></FundingPage>
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


            //only Volunteer routes---->



            //only Admin routes---->

        ]
    }
]);