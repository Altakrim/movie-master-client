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
import MovieDetails from "../pages/MovieDetails";
import UpdateMovie from "../pages/dashboard/updateMovie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },{
                path: "/register",
                element: <Register />,
            },
            {
                path: "/movies",
                element: <AllMovies />,
            },
            {
                path: "/movies/:id",
                element: <MovieDetails />,
                loader: ({params}) => fetch(`https://movie-master-server-ebon.vercel.app/movies/${params.id}`)
            }, 
            {
                
             path: "/dashboard",
             element: (
              <PrivateRoute>
            <Dashboard />
                </PrivateRoute>
        ),
        children: [
          { path: "", element: <DashboardHome /> },
          { path: "/dashboard/my-movies", element: <MyMovies /> },
          { path: "/dashboard/add-movie", element: <AddMovie /> },
          {path: "update-movie/:id", element:<UpdateMovie />},
         
        ],
      },
            
        ]
    }
]);

export default router;