import React from "react";
import ServiceItem from "./ServiceItem";
import serviceItem1 from "../../../Assets/images/service/1.jpeg";
import serviceItem2 from "../../../Assets/images/service/2.jpeg";
import serviceItem3 from "../../../Assets/images/service/3.webp";
import serviceItem4 from "../../../Assets/images/service/4.jpeg";
import serviceItem5 from "../../../Assets/images/service/5.jpeg";

const servicesData = [
  {
    img: serviceItem1,
    title: "Driver's Education Course",
    description: "Our driver's education course is designed to provide students with the knowledge and skills necessary to become safe and responsible drivers. Our comprehensive curriculum includes both classroom instruction and hands-on driving practice, ensuring that our students are well-prepared to pass their driving test and navigate the roads with confidence.",
  },
  {
    img: serviceItem2,
    title: "Behind-the-Wheel Training",
    description: "Our behind-the-wheel training is an essential component of driver's education. Our experienced instructors will provide personalized coaching and instruction to help students develop their driving skills and gain confidence behind the wheel. We offer flexible scheduling to accommodate busy schedules, and our training vehicles are equipped with the latest safety features.",
  },
  {
    img: serviceItem3,
    title: "Defensive Driving Course",
    description: "Our defensive driving course is perfect for licensed drivers who want to improve their driving skills and reduce their risk of accidents. This course covers advanced driving techniques, hazard awareness, and strategies for avoiding collisions. Completion of this course may also qualify drivers for insurance discounts.",
  },
  {
    img: serviceItem4,
    title: "Road Test Preparation",
    description: "Preparing for your road test can be stressful, but we're here to help. Our road test preparation services include practice driving sessions, instruction on key driving maneuvers, and tips for performing your best on test day. Our goal is to help you feel confident and prepared when you take your road test.",
  },
  {
    img: serviceItem5,
    title: "Driver Improvement Courses",
    description: "If you've received a traffic ticket or want to improve your driving record, our driver improvement courses can help. These courses cover traffic laws, safe driving techniques, and strategies for avoiding traffic violations. Completion of a driver improvement course may also help you avoid license suspension or revocation.",
  },
];

const Services = () => {
  return (
    <div className="bg-light font-poppins">
      <div className="container mx-auto sm:px-6 px-2 sm:py-8">
        <div className="py-2">
          <h2 className="text-2xl font-bold text-center text-secondary py-10">
            Service
          </h2>
        </div>
        <div className="py-2">
          {servicesData.map((service, i) => <ServiceItem key={i} id={i} item={service} />)}
        </div>
      </div>
    </div>
  );
};

export default Services;
