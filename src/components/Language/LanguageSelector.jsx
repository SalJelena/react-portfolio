import React from 'react'
import {useTranslation} from "react-i18next";
// import DE from "../../assets/images/de-flag.png"
// import UK from "../../assets/images/uk-flag.png"

const LanguageSelector = () => {
    const {t, i18n} = useTranslation()

    const lngs = {
        en: {
            nativeName: "English",
            name: "EN"
        },
        de: {
            nativeName: "Deutsch",
            name: "DE"
        }
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
                    >
                        <span className="language__img">
                            {lngs[lng].name}
                        </span>
                    </button>
                ))
            }
        </div>
    )
}
export default LanguageSelector
