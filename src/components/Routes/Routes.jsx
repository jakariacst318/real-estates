import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Login from "../../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('estates.json')
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