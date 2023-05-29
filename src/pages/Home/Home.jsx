import React from 'react'
import Banner from "../../components/Banner/Banner.jsx";
import PortfolioPannel from "../../components/PortfolioPannel/PortfolioPannel.jsx";
import PageDivider from "../../components/PageDivider/PageDivider.jsx";
import SkillsPanel from "../../components/SkillsPanel/SkillsPanel.jsx";

const Home = () => {
    return (
        <div className="home">
            <Banner/>
            <SkillsPanel/>
            <PageDivider separated={true}/>
            <PortfolioPannel/>
        </div>
    )
}
export default Home
