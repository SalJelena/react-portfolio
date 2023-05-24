import React, {useContext, useEffect, useState} from "react";

import ThemeContext from "../../context/ThemeContext.jsx";
import {ImSun} from "react-icons/im";
import {BsFillMoonFill} from "react-icons/bs";

const themeOptions = [{ value: "light" }, { value: "dark" }];

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
        <div>
                {
                    themeMode !== "light" ?
                        <button onClick={changeThemeHandler}><ImSun/></button>
                        :
                        <button onClick={changeThemeHandler}><BsFillMoonFill/></button>
                }
        </div>
    );
}


