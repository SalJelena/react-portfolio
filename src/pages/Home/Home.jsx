import React from 'react'
import Banner from "../../components/Banner/Banner.jsx";
import PortfolioPannel from "../../components/PortfolioPannel/PortfolioPannel.jsx";
import PageDivider from "../../components/PageDivider/PageDivider.jsx";
import SkillsPanel from "../../components/SkillsPanel/SkillsPanel.jsx";
import Contact from "../../components/Contact/Contact.jsx";

const Home = () => {   
    return (
        <div className="home">
            <Banner/>
            <SkillsPanel/>
            <PageDivider separated={true}/>
            <PortfolioPannel/>
            <PageDivider separated={false} rotated={true}/>
            <Contact/>
        </div>
    )
}
export default Home
