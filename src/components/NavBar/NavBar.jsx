import React from 'react'
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll";
import PageDivider from "../PageDivider/PageDivider.jsx";

const NavBar = ({ bannerSection, portfolioSection, contactSection }) => {
    const {t, i18n} = useTranslation()

    const tabs = t('tabs', { returnObjects: true });

    return (
        <>
            <div className="nav">
                <div className="wrap">
                    <div className="nav__inner">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link 
                                    to="home" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-100} 
                                    duration={500} 
                                    className="nav__link" 
                                    >
                                    Home
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link 
                                    to="portfolio" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-50} 
                                    duration={500} 
                                    className="nav__link" 
                                    >
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link 
                                    to="contact" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-50} 
                                    duration={500} 
                                    className="nav__link" 
                                    >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <PageDivider separated={false}/>
        </>
    )
}
export default NavBar
