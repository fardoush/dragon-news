import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouts from "../layouts/AuthLayouts";


const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayouts,
            children: [
                {
                   index: true, Component: Home
                },
            
                {
                    path: "/category/:id",
                    Component: CategoryNews,
                    loader: () => fetch("/public/demo-data/news.json")
                }
            ]
        },
        {
            path: '/auth',
            Component: AuthLayouts,
            children: [
                {
                    path:"/auth/login",
                    Component: Login
                },
                {
                    path:"/auth/register",
                    Component: Register
                }
            ]
        },
        {
            path: '/news',
            element: <h2>News Layout</h2>
        },
        {
            path: '/*',
            element: <h2>Error 404</h2>
        },
    ]
);

export default router;