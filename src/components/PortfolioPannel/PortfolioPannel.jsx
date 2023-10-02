import React, { useRef } from 'react'
//import {projects} from "../../utils/Projects.jsx";
// import medixImg from "../assets/images/medix.jpg"
// import socialImg from "../assets/images/social-net.jpg"
// import gameImg from "../assets/images/game-hub.jpg"
// import countriesImg from "../assets/images/countries-site.jpg"
import Card from "../Card/Card.jsx";
import {Trans, useTranslation} from "react-i18next";

const PortfolioPannel = () => {
    const {t, i18n} = useTranslation()

    const projects = [
        {
            "title": "E-commerce shop",
            "tags": [
                "react", "nodeJS", "redux toolkit", "express.js", "mongoDB",
                "jsonwebtoken", "Stripe"
            ],
            "github": "https://github.com/SalJelena/MERN-medxstore",
            "live": "https://medixstore-fe.vercel.app/",
            "img": "/static/images/medix.jpg"
        },
        {
            "title": "Social Network",
            "tags": [
                "React", "Tailwind",  "Redux toolkit", "Nodejs", "MongoDB", "express.js"
            ],
            "github": "https://github.com/SalJelena/social-net/tree/main",
            "live": "https://social-net-blog.vercel.app",
            "img": "/static/images/social-net.jpg"
        },
        {
            "title": "Game hub",
            "tags": [
                "react", "TypeScript", "ChakraUI", "React Query", "Zustand"
            ],
            "github": "https://github.com/SalJelena/ts-react-game-hub",
            "live": "https://game-hub-ts.vercel.app/",
            "img": "/static/images/game-hub.jpg"
        },
        {
            "title": "Countries website",
            "tags": [
                "HTML", "SCSS", "JavaScript", "API", "Axios"
            ],
            "github": "https://github.com/SalJelena/countries-preview-app",
            "live": "https://previewcountries.netlify.app/",
            "img": "/static/images/countries-site.jpg"
        }
    ]


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
