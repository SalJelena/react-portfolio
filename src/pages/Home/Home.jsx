import React from 'react'
import Banner from "../../components/Banner/Banner.jsx";
import PortfolioPannel from "../../components/PortfolioPannel/PortfolioPannel.jsx";
import PageDivider from "../../components/PageDivider/PageDivider.jsx";

const Home = () => {
    return (
        <div className="home">
            <Banner/>
            <PageDivider separated={true}/>
            <PortfolioPannel/>
        </div>
    )
}
export default Home
