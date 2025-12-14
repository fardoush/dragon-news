import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouts from "../layouts/AuthLayouts";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/Loading";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home
      },

      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/public/demo-data/news.json"),
        hydrateFallbackElement: <Loading></Loading>
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("../../public/demo-data/news.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

export default router;
