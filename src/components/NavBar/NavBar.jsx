import React from 'react'
import {useTranslation} from "react-i18next";
import {routes} from "../../router/routes.js";
import {Link} from "react-router-dom";
import PageDivider from "../PageDivider/PageDivider.jsx";

const NavBar = () => {
    const {t, i18n} = useTranslation()

    const tabs = t('tabs', { returnObjects: true });

    const renderedNav = () => {
        return tabs?.map((el, index) => {
            return <li key={index} className="nav__item">
                <Link to={routes.HOME.path} className="nav__link">
                    {el}
                </Link>
            </li>
        })
    }

    return (
        <>
            <div className="nav">
                <div className="wrap">
                    <div className="nav__inner">
                        <ul className="nav__list">
                            {renderedNav()}
                        </ul>
                    </div>
                </div>
            </div>
            <PageDivider/>
        </>
    )
}
export default NavBar
