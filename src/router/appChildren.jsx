import Home from "../pages/Home/Home.jsx";
import {routes} from "./routes.js";

export const appChildren = [
    {
        path: routes.HOME.path,
        element: <Home/>
    }
]
