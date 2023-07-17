import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import "./config/i18next.js"
import Loader from "./components/Loader/Loader.jsx";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
      {/* <React.Suspense fallback={<Loader/>}>
        <App/>
      </React.Suspense> */}
  </React.StrictMode>,
)
