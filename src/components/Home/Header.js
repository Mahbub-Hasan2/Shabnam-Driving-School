import React, { useState } from "react";
import Button from "../UI/Button";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  const [showMore, setShowMore] = useState(false);

  let description = "Welcome to our driving school, where safe and skilled driving is our top priority. Our team of expert instructors is dedicated to helping you learn the necessary skills and knowledge to become a confident driver. With our proven curriculum, personalized instruction, and engaging classes, you can feel confident that you're getting the best possible training on the road. Whether you're a beginner or an experienced driver looking to brush up on your skills, we have lessons and packages that are tailored to your individual needs and schedule. So why wait? Sign up today and start your journey towards becoming a safe and skilled driver with us!"
  return (
    <div className="bg-[url('../../Assets/images/bg-car-1.jpeg')] w-full bg-cover bg-center md:h-screen h-[70vh]">
      <header className="" style={{ backgroundImage: 'linear-gradient(290deg, #ffffff00 0 50%, #ffffff00 50% 100%)' }}>
        <div className="container mx-auto sm:px-6 px-2 sm:text-left text-center">
          <div className="md:h-screen h-[70vh] flex items-center bg-[]">
            <div className="">
              {/* <h2 className="md:text-6xl sm:text-4xl text-xl text-light font-bold shadow-2xl">
                Lorem ipsum dolor
              </h2> */}
              <div className="md:max-w-screen-sm">
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    'Learn to Drive Safely and Confidently with Our Experienced Instructors',
                    1000,
                    'Get Your License and Hit the Road with Our Comprehensive Driving Lessons',
                    500,
                    'Discover the Joy of Driving with Our Fun and Engaging Classes',
                    500,
                    'Unlock Your Potential as a Driver with Our Personalized Instruction',
                    500,
                    'Master the Rules of the Road and Pass Your Driving Test with Ease',
                    500,
                    'Become a Skilled and Responsible Driver with Our Proven Curriculum',
                    500,
                    'Start Your Driving Journey Today with Our Affordable Lesson Packages',
                    500,
                    'Join the Ranks of Safe and Skilled Drivers Trained by Our Experts',
                    500,
                    'Achieve Your Driving Goals with Our Flexible Scheduling and Convenient Locations',
                    500,
                    'Experience the Freedom of Driving with Confidence Thanks to Our Top-Quality Instruction',
                    500,
                  ]}
                  wrapper="h2"
                  repeat={Infinity}
                  className="md:text-4xl sm:text-3xl text-xl text-primary font-bold shadow-2xl"
                />
              </div>

              <p className="md:text-base text-sm  text-light md:py-5 py-2 lg:w-1/2 w-full">
                {showMore ? description : `${description.substring(0, 250)}`}
                <button className="text-blue-500 ml-2" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
              </p>

              <Button title="contact" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
