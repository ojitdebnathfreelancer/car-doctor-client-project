import React from 'react';
import About from './About/About';
import Carousel from './Banner/Carousel';
import Services from './Services/Services';

const Header = {
    height:"400px"
   }


const Home = () => {
    return (
        <div>
            <div>
                <Carousel></Carousel>
            </div>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;