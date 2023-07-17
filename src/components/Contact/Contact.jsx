import React from 'react'
import {contactInfo} from "../../utils/constants.jsx";

import {BsArrowRight} from "react-icons/bs";

const Contact = ({ contactSection }) => {
    const renderedInfo = () => {
        return contactInfo.map((el, index) => {
            return <div key={index} className="contact__item">

                <a href={el.link} className="contact__link" target="_blank" rel="noopener noreferrer">
                    <div className="contact__icon">{el.icon}</div>
                    <div className="contact__content">
                        <span className="contact__link-name">{el.linkName}</span>
                        <span className="contact__link-arrow">
                            <BsArrowRight/>
                        </span>
                    </div>
                </a>
            </div>
        })
    }
    return (
        <div className="contact" id='contact'>
            <div className="wrap">
                <div className="contact__inner">
                    <h2 className="contact__title">Contact</h2>
                    <div className="contact__wrapper">
                        {renderedInfo()}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
