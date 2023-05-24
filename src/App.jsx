import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import React from "react";
import ThemeProvider from "./context/ThemeProvider.jsx";
import Controls from "./components/Controls/Controls.jsx";

function App() {

    return (
        <>
            <ThemeProvider>
                <Controls/>
                <div className="myClass">
                    <NavBar/>
                    <Outlet/>
                    <Footer/>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
