import React from 'react'
import {Trans, useTranslation} from "react-i18next";
import {Link} from "react-scroll";
import PageDivider from "../PageDivider/PageDivider.jsx";
import {AiFillHome, AiOutlineMail} from "react-icons/ai";
import {RiComputerFill} from "react-icons/ri";

const NavBar = () => {
    const {t, i18n} = useTranslation()

    //const tabs = t('tabs', { returnObjects: true });

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
                                        <span className='nav__link-mobile'>
                                            <AiFillHome/>
                                        </span>
                                        <span className='nav__link-desk'>
                                            <Trans i18nKey="homeNav"></Trans>
                                        </span>
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
                                        <span className='nav__link-mobile'>
                                            <RiComputerFill/>
                                        </span>
                                        <span className='nav__link-desk'>
                                            <Trans i18nKey="portfolioNav"></Trans>
                                        </span>
                                    
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
                                        <span className='nav__link-mobile'>
                                            <AiOutlineMail/>
                                        </span>
                                        <span className='nav__link-desk'>
                                            <Trans i18nKey="contactNav"></Trans>
                                        </span>
                                    
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
