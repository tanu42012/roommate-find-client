import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./Components/Home";
import AddFindRoom from "./Components/AddFindRoom";
import BrowseListing from "./Components/BrowseListing";
import MyListing from "./Components/MyListing";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Hero from "./Components/Hero";
import Error from "./Components/Error";
import Details from "./Components/Details";
import UpdateData from "./Components/UpdateData";
import PrivateRoute from "./Provider/PrivateRoute";
import PrivateRoute2 from "./Provider/PrivateRoute2";
import Loading from "./Components/Loading";

import DetailsRoom from "./Components/DetailsRoom";
import DashboardLayout from "./Dashboard/DashboardLayout";
import AllItems from "./DashboardComponent/AllItems";
import MyItems from "./DashboardComponent/MyItems";
import AddItem from "./DashboardComponent/AddItem";
import Contact from "./Components/Contact";
import Job from "./Components/Job";
import Press from "./Components/Press";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";
import Branding from "./Components/Branding";
import Design from "./Components/Design";
import Marketing from "./Components/Marketing";
import Overview from "./Components/Overview";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                // path: "/home",
                index:true,
                element: <Home></Home>,
                loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),

            },
            {
                path: '/hero',
                element: <Hero></Hero>,



            }
        ]
    },
    {
        path: "/add-find-roommate",
        element: <PrivateRoute>
            <AddFindRoom></AddFindRoom>
        </PrivateRoute>,

    },
    {
        path: "/browse-listing",
        element: <BrowseListing></BrowseListing>,
        loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),
    },
    {
        path: "/my-listing",

        element: <PrivateRoute>
            <MyListing></MyListing>
        </PrivateRoute>,
        loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),

    },
    {
        path: '/details',
        element: <PrivateRoute2>
            <Details></Details>
        </PrivateRoute2>,
        loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),
    },
    {
        path: "/about",
        element: <Error></Error>
    },
    {
        path:'/contact',
        Component: Contact,

    },
    {
        path:'/job',
        Component:Job,
    },
    {
        path:'press',
        Component:Press,

    },
    {
        path:'/terms',
        Component:Terms,
    },
    {
        path:'/privacy',
        Component:Privacy,
        
    },
    {
        path:'/branding',
        Component:Branding,

    },
    {
        path:'/design',
        Component:Design,

    },
    {
        path:'/marketing',
        Component:Marketing,

    },
    
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),
        children: [

            {
                path: "all-items",
                element: <AllItems />,
                loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),
            },
            {
                path: "add-item",
                element: <AddItem />
            },
            {
                path: "my-items",
                element: <MyItems />,
                loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),

            },
            {
                path:'overview',
                element:<Overview></Overview>,
                loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),
        
            },

        ],

    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            }
        ]
    },
    {
        path: "/update/:id",
        element: <UpdateData></UpdateData>,
        loader: ({ params }) => fetch(`https://roommate-finder-website-server-xi.vercel.app/add-room/${params.id}`)
    },
    // {
    //     path:"/single",
    //     element: <h2>hello</h2>,
    //     // loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/ add-room"),
    //     loader: ({ params }) => fetch(`https://roommate-finder-website-server-xi.vercel.app/ add-room/${params.id}`)


    // },
    {
        path: "/detailsRoom/:id",
        element: <PrivateRoute>
            <DetailsRoom></DetailsRoom>
        </PrivateRoute>,
        loader: () => fetch("https://roommate-finder-website-server-xi.vercel.app/add-room"),
    }
]);
export default router;