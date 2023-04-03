import React from 'react';
import About from '../components/Home/About';
import Benefits from '../components/Home/Benefits';
import FAQ from '../components/Home/FAQ';
import Header from '../components/Home/Header';
import Service from '../components/Home/Services';
import ContactUs from '../components/Home/ContactUs';

const Home = () => {
    return (
        <div>
            <Header/>
            <Benefits/>
            <About/>
            <Service/>
            <FAQ/>
            <ContactUs/>
        </div>
    );
};

export default Home;