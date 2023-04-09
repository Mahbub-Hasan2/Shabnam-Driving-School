import React, { useState } from 'react';
import { TbArrowTopCircle } from "react-icons/tb";

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className='relative'>
            {/* {visible && */}
                <div onClick={scrollToTop} className={` ${visible ? 'block': 'hidden'} opacity-80 fixed bottom-0 right-28 cursor-pointer rounded-t-3xl bg-primary w-10 h-10 pt-3 grid content-center justify-center first-line:`}>
                    <TbArrowTopCircle className='animate-bounce text-white font-extrabold text-3xl' />
                </div>
            {/* // } */}

        </div>
    );
};

export default ScrollToTop;