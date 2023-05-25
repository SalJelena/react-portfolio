import React from 'react'
import {useTranslation} from "react-i18next";
import DE from "../../assets/images/de-flag.png"
import UK from "../../assets/images/uk-flag.png"

const LanguageSelector = () => {
    const {t, i18n} = useTranslation()

    const lngs = {
        en: {
            nativeName: "English",
            img: UK
        },
        de: {
            nativeName: "Deutsch",
            img: DE
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
                        <img src={lngs[lng].img} alt="image flag" className="language__img" />
                        {/*<span className="language__text">{lngs[lng].nativeName}</span>*/}
                    </button>
                ))
            }
        </div>
    )
}
export default LanguageSelector
