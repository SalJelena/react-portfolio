import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import React, { useRef } from "react";
import ThemeProvider from "./context/ThemeProvider.jsx";
import Controls from "./components/Controls/Controls.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {  

    return (
        <>
            <ThemeProvider>
                <Controls/>
                <NavBar/>
                <Home/>
                <Footer/>
            </ThemeProvider>
        </>
    )
}

export default App
