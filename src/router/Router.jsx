import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllMovies from "../pages/AllMovies";

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
                path: "/movies",
                element: <AllMovies />,
            }
        ]
    }
]);

export default router;