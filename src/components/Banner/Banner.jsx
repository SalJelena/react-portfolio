import React from 'react'
import {Trans, useTranslation} from "react-i18next";

const Banner = () => {
    const {t, i18n} = useTranslation()



    return (
        <div>
            {/*{t('learn')}*/}
            <p>
                <Trans i18nKey="description">
                    Translate this code right here.
                </Trans>
            </p>
        </div>
    )
}
export default Banner
