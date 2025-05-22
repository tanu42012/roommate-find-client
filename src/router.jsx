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


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/add-room"),

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
        loader: () => fetch("http://localhost:3000/add-room"),
    },
    {
        path: "/my-listing",
        element: <PrivateRoute>
            <MyListing></MyListing>
        </PrivateRoute>,
        loader: () => fetch("http://localhost:3000/add-room"),

    },
    {
        path: '/details',
        element: <PrivateRoute2>
            <Details></Details>
        </PrivateRoute2>,
        loader: () => fetch("http://localhost:3000/add-room"),
    },
    {
        path: "/about",
        element: <Error></Error>
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
        loader: ({ params }) => fetch(`http://localhost:3000/add-room/${params.id}`)
    },
    // {
    //     path:"/single",
    //     element: <h2>hello</h2>,
    //     // loader: () => fetch("http://localhost:3000/add-room"),
    //     loader: ({ params }) => fetch(`http://localhost:3000/add-room/${params.id}`)
       

    // },
    {
        path:"/detailsRoom/:id",
        element:<PrivateRoute>
            <DetailsRoom></DetailsRoom>
        </PrivateRoute>,
        loader: () => fetch("http://localhost:3000/add-room"),
    }
]);
export default router;