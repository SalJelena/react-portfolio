import React from 'react'
import {Trans, useTranslation} from "react-i18next";

const Banner = () => {
    const {t, i18n} = useTranslation()



    return (
        <div className="banner">
            <div className="wrap">
                <div className="banner__inner">
                    <p>
                        <Trans i18nKey="description1"></Trans>
                    </p>
                    <p>
                        <Trans i18nKey="description2"></Trans>
                    </p>
                    <p>
                        <Trans i18nKey="description3"></Trans>
                    </p>
                </div>
            </div>


        </div>
    )
}
export default Banner
