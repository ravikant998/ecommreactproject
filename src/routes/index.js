import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about/About";
import AddProduct from "../pages/addproduct/AddProduct";
import Carrier from "../pages/carrier/Carrier";
import Contact from "../pages/contactus/Contact";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/loginpage/Login";
import CategoryByList from "../pages/products/CategoryByList";
import ProductDetails from "../pages/products/ProductsDetails";
import Searchlist from "../pages/products/Searchlist";
import ProtectedRoutes from "../pages/protectedroute/ProtectedRoutes";
import SignUp from "../pages/signup/SignUp";
import MainLayout from "../shared/layouts/MainLayout";
import ProtecteuserLogged from "../pages/protectedroute/ProtecteuserLogged";
import ForgetPassword from "../pages/forgetpassword/ForgetPassword";
import ProfieUpdate from "../pages/profileupdate/ProfieUpdate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        // element: <Login />,
        element: <ProtecteuserLogged Component={Login} />,
      },
      {
        path: "/products/productdetail/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products/searchlist",
        element: <Searchlist />,
      },
      {
        path: "/products/categorybylist/:name",
        element: <CategoryByList />,
      },
      {
        path: "/products/searchlist/:name",
        element: <Searchlist />,
      },
      {
        path: "/about",

        element: <ProtectedRoutes Component={About} />,
      },
      {
        path: "/contact",
        element: <ProtectedRoutes Component={Contact} />,
      },
      {
        path: "/carrier",
        element: <ProtectedRoutes Component={Carrier} />,
      },
      {
        path: "/addproduct",
        element: <ProtectedRoutes Component={AddProduct} />,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "/profileupdate/:id",
        element: <ProfieUpdate />,
      },
    ],
  },
]);
export default router;
