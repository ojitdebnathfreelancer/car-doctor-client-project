import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Checkout from "../Pages/Checkout/Checkout";
import OrderDetails from "../Pages/OrderDetails/OrderDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/checkout/:id',
                loader:({params})=>fetch(`https://car-doctor-server-neon.vercel.app/services/${params.id}`),
                element:<PrivetRoute><Checkout></Checkout></PrivetRoute>
            },
            {
                path:'orderdetails',
                element:<PrivetRoute><OrderDetails></OrderDetails></PrivetRoute>
            }
        ],
    }
]);

export default router;