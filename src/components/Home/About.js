import React from 'react';
import aboutimg from '../../Assets/images/about.jpg';

const About = () => {
    return (
        <div className='font-poppins container mx-auto sm:px-6 px-2 sm:py-8'>
            <div className="md:py-2">
                <h2 className="text-2xl font-bold text-center text-primary md:py-10 py-8" >About Us</h2>
            </div>
            <div className="py-2">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                    <div className="flex items-center">
                        <div className="">
                        <h2 className="md:text-3xl text-xl font-bold text-secondary">Welcome to Shabnam driving school: </h2>
                            <h2 className="text-xl font-bold text-primary">Your Partner in Safe and Confident Driving</h2>
                        
                            <p className="text-gray-500 py-2 font-semibold font-roboto">
                                Shabnam-driving-school is a new driving school committed to providing top-quality driver education services. Our experienced and certified driving instructors are dedicated to helping our students become safe and responsible drivers. We offer a range of programs, including classroom instruction and behind-the-wheel training, to help our students achieve their driving goals. Our goal is to create a positive and supportive learning environment, and to help our students develop the confidence and competence they need to become safe drivers for life. Contact us today to learn more about our programs and services, and let us help you get on the road to success.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img className='rounded-xl border-2 border-primary' src={aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;