import Home from "../pages/Home/Home.jsx";
import {routes} from "./routes.js";
import PortfolioPannel from "../components/PortfolioPannel/PortfolioPannel.jsx";

export const appChildren = [
    {
        path: routes.HOME.path,
        element: <Home/>
    }
]
