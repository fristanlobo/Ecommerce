import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../screens/Home";
import Login from "../screens/Login";
import ForgetPassword from "../screens/ForgetPassword";
import SignUp from "../screens/SignUp";
import AdminPanel from "../screens/AdminPanel";
import AllUsers from "../screens/AllUsers";
import Allproducts from "../screens/Allproducts";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgetPassword />
            },
            {
                path: "Sign-Up",
                element: <SignUp />
            },
            {
                path: "admin-panel",
                element: <AdminPanel />,
                children:[
                    {
                        path:'all-user',
                        element:<AllUsers/>
                    },
                    {
                        path:'all-Product',
                        element:<Allproducts/>
                    }
                ]
            }
        ],
    }
])

export default router;