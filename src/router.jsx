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
  
const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      children:[
        {
            path:"/home",
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:3000/add-room"),

        },
        {
            path:'/hero',
            element:<Hero></Hero>

        }
      ]
    },
    {
        path:"/add-find-roommate",
        element:<AddFindRoom></AddFindRoom>
    },
    {
        path:"/browse-listing",
        element:<BrowseListing></BrowseListing>,
        loader:()=>fetch("http://localhost:3000/add-room"),
    },
    {
        path:"/my-listing",
        element:<MyListing></MyListing>,
        loader:()=>fetch("http://localhost:3000/add-room"),

    },
    {
        path:'/details',
        element:<Details></Details>,
        loader:()=>fetch("http://localhost:3000/add-room"),
    },
    {
        path:"/about",
        element:<Error></Error>
    },
    {
        path:'/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>,
            },
            {
                path:"/auth/register",
                element:<Register></Register>,
            }
        ]
    },
  ]);
  export default router;