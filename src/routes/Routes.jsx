import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contactus from "../pages/Contactus/Contactus";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/contactus',
                element: <Contactus></Contactus>
            }
        ],
    },
]);
