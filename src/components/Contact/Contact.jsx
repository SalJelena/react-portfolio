import React from 'react'
import {contactInfo} from "../../utils/constants.jsx";
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai";
import {Trans, useTranslation} from "react-i18next";
import {BsArrowRight} from "react-icons/bs";

const Contact = () => {
    const {t, i18n} = useTranslation()

    // const renderedInfo = () => {
    //     return contactInfo.map((el, index) => {
    //         return 
    //     })
    // }

    return (
        <div className="contact" id='contact'>
            <div className="wrap">
                <div className="contact__inner">
                    <h2 className="contact__title"><Trans i18nKey="contactSection"></Trans></h2>
                    <div className="contact__wrapper">
                        <div className="contact__item">
                            <a href="mailto:salopekjelena24@gmail.com" className="contact__link" target="_blank" rel="noopener noreferrer">
                                <div className="contact__icon"><AiOutlineMail/></div>
                                <div className="contact__content">
                                    <span className="contact__link-name">
                                        salopekjelena24@gmail.com
                                    </span>
                                    <span className="contact__link-arrow">
                                        <BsArrowRight/>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="contact__item">
                            <a href="https://www.linkedin.com/in/jelena-salopek/" className="contact__link" target="_blank" rel="noopener noreferrer">
                                <div className="contact__icon"><AiOutlineLinkedin/></div>
                                <div className="contact__content">
                                    <span className="contact__link-name">
                                        <Trans i18nKey="linkedInTitle"></Trans>
                                    </span>
                                    <span className="contact__link-arrow">
                                        <BsArrowRight/>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="contact__item">
                            <a href="https://github.com/SalJelena" className="contact__link" target="_blank" rel="noopener noreferrer">
                                <div className="contact__icon"><AiOutlineGithub/></div>
                                <div className="contact__content">
                                    <span className="contact__link-name">
                                        <Trans i18nKey="githubTitle"></Trans>
                                    </span>
                                    <span className="contact__link-arrow">
                                        <BsArrowRight/>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
