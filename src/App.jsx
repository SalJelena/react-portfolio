import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import React, { useRef } from "react";
import ThemeProvider from "./context/ThemeProvider.jsx";
import Controls from "./components/Controls/Controls.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
    const portfolioSection = useRef(null)
    const bannerSection = useRef(null)
    const contactSection = useRef(null)
    

    return (
        <>
            <ThemeProvider>
                <Controls/>
                <NavBar portfolioSection={portfolioSection} bannerSection={bannerSection} contactSection={contactSection} />
                <Home portfolioSection={portfolioSection} bannerSection={bannerSection} contactSection={contactSection} />
                <Footer/>
            </ThemeProvider>
        </>
    )
}

export default App
