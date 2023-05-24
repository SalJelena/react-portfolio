import React from 'react'
import {useTranslation} from "react-i18next";
import {routes} from "../../router/routes.js";
import {Link} from "react-router-dom";

const NavBar = () => {
    const {t, i18n} = useTranslation()

    const tabs = t('tabs', { returnObjects: true });

    const renderedNav = () => {
        return tabs?.map((el, index) => {
            return <li key={index}>
                <Link to={routes.HOME.path}>
                    {el}
                </Link>
            </li>
        })
    }

    return (
        <div className="nav">
            <div className="wrap">
                <div className="nav__inner">
                    <ul className="nav__list">
                        {renderedNav()}
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default NavBar
