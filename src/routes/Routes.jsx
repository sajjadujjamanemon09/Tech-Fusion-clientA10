import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProducts from "../pages/AddProducts/AddProducts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyCart from "../pages/MyCart/MyCart";
import Products from "../pages/Products/Products";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home> ,
            loader: () => fetch('http://localhost:5000/product')
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
            element: <MyCart></MyCart>
        },
        {
            path: '/products',
            element: <Products></Products>
        },
      ]
    },
  ]);

  export default routes;