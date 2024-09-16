import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Welcome from "../pages/welcome";
import About from "../pages/about";
import Services from "../pages/service";
import Contact from "../pages/contact";

export const routes = () =>
    createBrowserRouter([
        {
            path: "",
            element: <Welcome />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path: "/contact",
            element: <Contact />
        },
    ])
