import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProducts from "../pages/AddProducts/AddProducts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyCart from "../pages/MyCart/MyCart";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home> ,
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
      ]
    },
  ]);

  export default routes;