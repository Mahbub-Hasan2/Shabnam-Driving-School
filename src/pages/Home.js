import React from 'react';
import About from '../components/Home/About';
import Benefits from '../components/Home/Benefits';
import FAQ from '../components/Home/FAQ';
import Header from '../components/Home/Header';
import Service from '../components/Home/Services';
import ContactUs from '../components/Home/ContactUs';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Benefits/>
            <About/>
            <Service/>
            <Testimonials/>
            <FAQ/>
            <ContactUs/>
        </div>
    );
};

export default Home;