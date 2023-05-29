import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx"

import "./config/i18next.js"
import Loader from "./components/Loader/Loader.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <React.Suspense fallback={<Loader/>}>
        <RouterProvider router={router} />
      </React.Suspense>
  </React.StrictMode>,
)
