import React from 'react'
import Banner from "../../components/Banner/Banner.jsx";
import PortfolioPannel from "../../components/PortfolioPannel/PortfolioPannel.jsx";
import PageDivider from "../../components/PageDivider/PageDivider.jsx";
import SkillsPanel from "../../components/SkillsPanel/SkillsPanel.jsx";
import Contact from "../../components/Contact/Contact.jsx";

const Home = ({ bannerSection, portfolioSection, contactSection }) => {   
    return (
        <div className="home">
            <Banner bannerSection={bannerSection} />
            <SkillsPanel/>
            <PageDivider separated={true}/>
            <PortfolioPannel portfolioSection={portfolioSection} />
            <PageDivider separated={false} rotated={true}/>
            <Contact contactSection={contactSection} />
        </div>
    )
}
export default Home
