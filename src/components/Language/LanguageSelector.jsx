import React from 'react'
import {useTranslation} from "react-i18next";

const LanguageSelector = () => {
    const {t, i18n} = useTranslation()

    const lngs = {
        en: {nativeName: "English"},
        de: {nativeName: "Deutsch"}
    }
    return (
        <div className="language">
            {
                Object.keys(lngs).map((lng, index) => (
                    <button type="submit"
                            key={index}
                            className="language__btn"
                            onClick={() => i18n.changeLanguage(lng)}
                            disabled={i18n.resolvedLanguage === lng}
                    >{lngs[lng].nativeName}</button>
                ))
            }
        </div>
    )
}
export default LanguageSelector
