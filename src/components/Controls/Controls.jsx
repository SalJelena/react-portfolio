import React from 'react'
import ThemeSetter from "../ThemeSetter/ThemeSetter.jsx";
import LanguageSelector from "../Language/LanguageSelector.jsx";

const Controls = () => {
    return (
        <div className="controls">
            <div className="wrap">
                <div className="controls__inner">
                    <ThemeSetter/>
                    <LanguageSelector/>
                </div>
            </div>
        </div>
    )
}
export default Controls
