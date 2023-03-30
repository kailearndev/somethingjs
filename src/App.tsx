import axios from "axios";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
// import WeatherApi from "./api/weather";
import "./App.css";
import Private from "./auth/Private";
import AboutMe from "./pages/aboutme";
import CustomerInformation from "./pages/customer";
import Dashboard from "./pages/dashboard";
import Layout from "./pages/layout";
import Login from "./pages/login";
import Products from "./pages/products";
import ErrorPage from "./ultils/Error";

function App() {
  
  const router = createBrowserRouter([
    {
      element: (
        <Private>
          <Layout />
        </Private>
      ),
      
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "customer",
          element: <CustomerInformation />,
        },
        {
          path: "product",
          element: <Products />,
        },
        {
          element: <AboutMe />,
          path: "aboutme",
        },
      ],
    },
    {
      element: <Login />,
      path: "login",
    },
  ]);
  return <RouterProvider router= { router } />;
}

export default App;
