import React from 'react'
import {skills} from "../../utils/constants.jsx";
import {Autoplay, Navigation, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

const SkillsPanel = () => {

    const renderedIcons = () => {
        return skills.map((el, index) => {
            return (
                <div className="skills__item" key={index}>
                <span className="skills__name">{el.name}</span>
                <span className="skills__icon">{el.icon}</span>
            </div>)
        })
    }

    return (
        <div className="skills">
            <div className="wrap">
                <div className="skills__inner">
                    {renderedIcons()}

                </div>
            </div>
        </div>
    )
}
export default SkillsPanel
