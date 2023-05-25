import React, {useContext, useEffect, useState} from "react";

import ThemeContext from "../../context/ThemeContext.jsx";
import {ImSun} from "react-icons/im";
import {BsFillMoonFill} from "react-icons/bs";

export default function ThemeSetter() {
    const [themeMode, setThemeMode] = useState("light")
    const { theme, setTheme } = useContext(ThemeContext);

    const changeThemeHandler = () => {
        themeMode === "light" ? setThemeMode("dark") : setThemeMode("light")
    }

    useEffect(() => {
        setTheme(themeMode)
    }, [themeMode]);

    return (
        <div className="theme__setter">
                {
                    themeMode !== "light" ?
                        <button onClick={changeThemeHandler} className="theme__setter-btn"><ImSun/></button>
                        :
                        <button onClick={changeThemeHandler} className="theme__setter-btn"><BsFillMoonFill/></button>
                }
        </div>
    );
}


