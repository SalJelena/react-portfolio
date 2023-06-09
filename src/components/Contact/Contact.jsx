import React from 'react'
import {contactInfo} from "../../utils/constants.jsx";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

const Contact = () => {
    const renderedInfo = () => {
        return contactInfo.map((el, index) => {
            return <div key={index} className="contact__item">

                <Link to={el.link} className="contact__link" target="_blank" rel="noopener noreferrer">
                    <div className="contact__icon">{el.icon}</div>
                    <div className="contact__content">
                        <span className="contact__link-name">{el.linkName}</span>
                        <span className="contact__link-arrow">
                            <BsArrowRight/>
                        </span>
                    </div>
                </Link>
            </div>
        })
    }
    return (
        <div className="contact">
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
