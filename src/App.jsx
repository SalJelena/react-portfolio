import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import {useTranslation} from "react-i18next";
import React from "react";

function App() {

    const {t, i18n} = useTranslation()

    const lngs = {
        en: {nativeName: "English"},
        de: {nativeName: "Deutsch"}
    }



  return (
    <>
        <div>
            {
                Object.keys(lngs).map((lng, index) => (
                    <button type="submit"
                            key={index}
                            onClick={() => i18n.changeLanguage(lng)}
                            disabled={i18n.resolvedLanguage === lng}
                    >{lngs[lng].nativeName}</button>
                ))
            }
        </div>
        <NavBar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App
