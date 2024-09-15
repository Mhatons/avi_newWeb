import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Welcome from "../pages/welcome";

export const routes = () =>
    createBrowserRouter([
        {
            path: "",
            element: <Welcome />
        },
        {
            path: "/home",
            element: <Home />
        }
    ])
