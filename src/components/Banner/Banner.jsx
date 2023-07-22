import React, { useRef } from 'react'
import {Trans, useTranslation} from "react-i18next";
import profileImg from "../../assets/images/profile.png"
import bgImage from "../../assets/svg/shape-2.svg"
import {HiOutlineDownload} from "react-icons/hi";
import CV from "../../assets/Jelena Salopek CV.pdf"

const Banner = () => {
    const {t, i18n} = useTranslation()

    return (
        <div className="banner" id='home'>
            <div className="wrap">
                <div className="banner__inner">
                    <div className="banner__left">
                        <div className="banner__img-holder">
                            <img src={profileImg} alt="profile image" className="banner__img" />
                        </div>
                        <div className="banner__layer-img" style={{backgroundImage: "url(" + bgImage + ")"}}></div>
                    </div>

                    <div className="banner__right">
                        <h1 className="banner__title">
                            <Trans i18nKey="greeting"></Trans> <div className="banner__subtitle" data-text="Jelena">Jelena</div>
                        </h1>
                        <span className="banner__subtext"><Trans i18nKey="information"></Trans></span>
                        <p className="banner__text"><Trans i18nKey="description1"></Trans></p>
                        <p className="banner__text"><Trans i18nKey="description2"></Trans></p>
                        <div className="banner__btns">
                            <a href={CV} download className="button button--primary button--link">
                                <span className="button__icon"><HiOutlineDownload/></span>
                                <Trans i18nKey="downloadCV"></Trans>
                            </a>
                            <a href='mailto:salopekjelena24@gmail.com' className="button button--secondary">
                                <Trans i18nKey="contactTitle"></Trans>
                            </a>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}
export default Banner
