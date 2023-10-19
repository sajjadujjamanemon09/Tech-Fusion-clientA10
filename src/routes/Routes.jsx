import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProducts from "../pages/AddProducts/AddProducts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyCart from "../pages/MyCart/MyCart";
import Products from "../pages/Products/Products";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivetRoutes from "./PrivetRoutes";
import SingleProduct from "../pages/SingleProduct/SingleProduct";



const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home> ,
            loader: () => fetch('http://localhost:5000/brands')
        },
        {
            path: '/login',
            element: <Login></Login> ,
        },
        {
            path: '/register',
            element: <Register></Register> ,
        },
        {
            path: '/addProducts',
            element: <AddProducts></AddProducts>
        },
        {
            path: '/myCart',
            element: <PrivetRoutes><MyCart></MyCart></PrivetRoutes>,
        },
        {
            path: '/products/:brandName',
            element: <PrivetRoutes><Products></Products></PrivetRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/product/${params.brandName}`)
        },
        {
            path: '/singleProduct/:_id',
            element: <PrivetRoutes><SingleProduct></SingleProduct></PrivetRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/singleProduct/${params._id}`)
        },
      ]
    },
  ]);

  export default routes;