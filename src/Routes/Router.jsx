
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secrate from "../components/Secrate";
import Deshboard from "../layout/Deshboard/Deshboard";
import Cart from "../PagesDashboard/Cart/Cart";
import AllUsers from "../PagesDashboard/AllUsers/AllUsers";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
       {
        path: '/' ,
        element: <Home></Home>,
       },
       {
        path: 'menu' ,
        element: <PrivateRoute><Menu></Menu></PrivateRoute>,
       },
       {
        path: 'order/:category' ,
        element: <PrivateRoute><Order/></PrivateRoute>,
       },
       {
        path: '/login' ,
        element: <Login/>,
       },
       {
        path: '/register' ,
        element: <Register/>,
       },
       {
        path: '/secrate' ,
        element: <PrivateRoute><Secrate></Secrate></PrivateRoute>,
       },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Deshboard/></PrivateRoute>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>
        },

        //admin dashboard
        {
          path: "users",
          element: <AllUsers/>
        },
      ]

    }
  ])