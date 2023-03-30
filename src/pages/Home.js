import React from 'react';
import About from '../components/Home/About';
import Benefits from '../components/Home/Benefits';
import FAQ from '../components/Home/FAQ';
import Header from '../components/Home/Header';
import Service from '../components/Home/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Benefits/>
            <About/>
            <Service/>
            <FAQ/>
        </div>
    );
};

export default Home;