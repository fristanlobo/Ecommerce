import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../screens/Home";
import Login from "../screens/Login";
import ForgetPassword from "../screens/ForgetPassword";
import SignUp from "../screens/SignUp";
import AdminPanel from "../screens/AdminPanel";
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
                element: <AdminPanel />
            }
        ],
    }
])

export default router;