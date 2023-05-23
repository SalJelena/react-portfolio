import {createBrowserRouter} from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import App from "../App.jsx";
import {appChildren} from "./appChildren.jsx";
import Error from "../pages/Error/Error.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<RootLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path: "/",
                element:<App/>,
                children: appChildren
            }
        ]

    }
])
