import React from 'react';
import ContactFrom from './ContactFrom';
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const ContactUs = () => {
    return (
        <div id='CONTACT' className="font-poppins bg-[url('https://images.pexels.com/photos/7762717/pexels-photo-7762717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] w-full bg-cover bg-center md:h-screen h-full">
            <div className="bg-[#0000008a] w-full flex items-center h-full lg:px-28 px-2 md:py-10 py-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-5 gap-2">
                        <div className="md:col-span-3 col-span-5 flex items-center">
                            <div className="text-light">
                                <h2 className="text-4xl font-bold">Get In Touch With Us</h2>
                                <p className="font-roboto"> If you have any questions or comments about our driving courses, please fill out the form below and we will get back to you as soon as possible. Please make sure to provide accurate contact information so that we can reach you in a timely manner.</p>

                                <div className="py-5 font-roboto">
                                    <div className="flex gap-3 mb-2  hover:text-light text-primary cursor-pointer">
                                        <p className="grid content-center">
                                            <MdLocationOn className='text-xl' />
                                        </p>
                                        <p className='text-base font-inter '><a href="https://goo.gl/maps/qUbNydW2cuuxoodG9" target="_blank" rel="noopener noreferrer"> 2405 Finch avenue west. North york. M9M2x2</a></p>
                                    </div>
                                    <div className="flex gap-3 mb-2  hover:text-light text-primary cursor-pointer">
                                        <p className="grid content-center">
                                            <IoCall className='text-xl' />
                                        </p>
                                        <p className='text-base font-inter '>Cell - 647-222-4345</p>
                                    </div>
                                    <div className="flex gap-3  hover:text-light text-primary cursor-pointer">
                                        <p className="grid content-center">
                                            <IoMdMail className='text-xl' />
                                        </p>
                                        <p className='text-base font-inter '>
                                            <a href="mailto:mahbubdev1@gmail.com" target="_blank" rel="noopener noreferrer">shabnam.priyanka@live.ca</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="md:col-span-2 col-span-5">
                            <ContactFrom />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;