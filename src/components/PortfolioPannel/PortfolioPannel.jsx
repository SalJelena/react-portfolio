import React, { useRef } from 'react'
import {projects} from "../../utils/Projects.jsx";
import Card from "../Card/Card.jsx";
import {Trans, useTranslation} from "react-i18next";

const PortfolioPannel = ({ portfolioSection }) => {
    const {t, i18n} = useTranslation()


    const renderedCards = () => {
        return projects.map((el, index) => {
            return <Card el={el} key={index} />
        })
    }


    return (
        <div className="portfolio" id='portfolio'>
            <div className="wrap">
                <div className="portfolio__inner">
                    <h2 className="portfolio__title"><Trans i18nKey="projectsTitle"></Trans></h2>
                    <div className="portfolio__wrapper">
                        {renderedCards()}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PortfolioPannel
