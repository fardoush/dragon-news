import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


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
            element: <h2>Authentication Layout</h2>
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