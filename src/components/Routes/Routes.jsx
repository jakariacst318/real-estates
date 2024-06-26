import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Login from "../../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
// import Estate from "../Estate/Estate";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Details from "../../Details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('estates.json')
            },
            // {
            //     path: '/estates/:id',
            //     element: <PrivetRoute> <Estate></Estate></PrivetRoute>,
            //     loader: () => fetch('../estates.json')
            // },
            {
                path: '/estates/:id',
                element: <PrivetRoute> <Details></Details></PrivetRoute>,
                loader: () => fetch('../estates.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;