import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllMovies from "../pages/AllMovies";
import PrivateRoute from "../PrivateRoute";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import MyMovies from "../pages/dashboard/MyMovies";
import AddMovie from "../pages/dashboard/AddMovie";
import Profile from "../pages/dashboard/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },{
                path: "/login",
                element: <Login />,
            },{
                path: "/register",
                element: <Register />,
            },{ 
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                           <Dashboard />
                        </PrivateRoute>
                ),
                children: [
                    {
                        path:"",
                        element: <DashboardHome />
                    },
                    {
                        path: "my-movies",
                        element: <MyMovies />
                    },
                    {
                        path: "add-movie",
                        element:<AddMovie />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ]
                        

            },
            {
                path: "/movies",
                element: <AllMovies />,
            },
        ]
    }
]);

export default router;