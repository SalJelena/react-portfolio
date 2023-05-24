import React from 'react'
import {useTranslation} from "react-i18next";

const NavBar = () => {
    const {t, i18n} = useTranslation()

    const tabs = t('tabs', { returnObjects: true });

    return (
        <div>
            {
                tabs?.map((el, index) => {
                    return <p key={index}>{el}</p>
                })
            }
        </div>
    )
}
export default NavBar
