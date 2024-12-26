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
import DetailsPage from "../pages/detailsPage/DetailsPage";
import DetailsBlog from "../pages/DetailsBlog";
import UpdateBlog from "../pages/blogPage/UpdateBlog";

import FeaturedBlogPage from "../featuredPage/FetauredBlogPage";
import TrendingTechnology from "../pages/technology/TrendingTechnology";



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
          element:<PrivateRoute><WishList></WishList></PrivateRoute>

        },
        
        {
          path:'recentBlogs/:id',
          element:<DetailsPage></DetailsPage>
        },
        {
          path:'addBlogs/:id',
          element:<DetailsBlog></DetailsBlog>
        },
        {
          path: '/updateBlog/:id',
          element:<PrivateRoute> <UpdateBlog></UpdateBlog></PrivateRoute>,
          loader: ({ params }) => fetch(`https://blog-website-server-blush.vercel.app/addBlogs/${params.id}`)
        },
        {
          path:'/featuredBlogs',
          element:<FeaturedBlogPage></FeaturedBlogPage>
        },
        {
          path:'/trendingTechnology',
          element:<TrendingTechnology></TrendingTechnology>
        }

      ]
    },
  ]);

  export default router;