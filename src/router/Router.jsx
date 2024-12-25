import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";

import SignIn from "../pages/signIn/SignIn";
import Register from "../pages/register/Register";
import Home from "../home/Home";
import AddBlogs from "../pages/blogPage/AddBlogs";
import PrivateRoute from "./PrivateRoute";
import AllBlogs from "../pages/allBlogs/AllBlogs";
import WishList from "../pages/wishList/WishList";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
     
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/addBlogs',
          element:<PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>
        },
        {
          path:'/allBlogs',
          element:<AllBlogs></AllBlogs>
        },
        {
          path:'/wishList',
          element:<WishList></WishList>

        }

      ]
    },
  ]);

  export default router;