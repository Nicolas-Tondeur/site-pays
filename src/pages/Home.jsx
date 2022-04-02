import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return(
        <div className="home">
            <header>
                <Navigation />
                <Logo />
            </header>
            
            <Countries />
        </div>
    )
}

export default Home;