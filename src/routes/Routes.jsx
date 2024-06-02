import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contactus from "../pages/Contactus/Contactus";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import WorkSheet from "../pages/Dashboard/WorkSheet/WorkSheet";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import EmployeeList from "../pages/Dashboard/EmployeeList/EmployeeList";
import PrivateRoute from "./PrivateRoute";

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
                path: '/contactus',
                element: <Contactus></Contactus>
            }
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "work-sheet",
                element: <PrivateRoute><WorkSheet></WorkSheet></PrivateRoute>
            },
            {
                path: "payment-history",
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },
            {
                path: "employee-list",
                element: <PrivateRoute><EmployeeList></EmployeeList></PrivateRoute>
            }
        ]
    }
]);
