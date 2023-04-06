import React from 'react';
import TestimonialItem from './TestimonialItem';

const testimonialsData = [
    {
        id: 1,
        img: 'https://avatars.githubusercontent.com/u/67515174?v=4',
        name: 'Shabab',
        psition: 'Seles Manager, Slack',
        title: "It waas a great expirience!",
        description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        star: 5
    },
    {
        id: 2,
        img: 'https://avatars.githubusercontent.com/u/67123174?v=4',
        name: 'Mahbub Hasan',
        psition: 'Seles Manager, Slack',
        title: "It waas a great expirience!",
        description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        star: 5
    },
    {
        id: 3,
        img: 'https://avatars.githubusercontent.com/u/67535174?v=4',
        name: 'Rahul Kumar',
        psition: 'Seles Manager, Slack',
        title: "It waas a great expirience!",
        description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        star: 5
    },
    {
        id: 4,
        img: 'https://avatars.githubusercontent.com/u/67554174?v=4',
        name: 'Rahul Kumar',
        psition: 'Seles Manager, Slack',
        title: "It waas a great expirience!",
        description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        star: 5
    },
    {
        id: 5,
        img: 'https://avatars.githubusercontent.com/u/1234567?v=4',
        name: 'Rahul Kumar',
        psition: 'Seles Manager, Slack',
        title: "It waas a great expirience!",
        description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        star: 5
    },
    {
        id: 6,
        img: 'https://avatars.githubusercontent.com/u/67515174?v=4',
        name: 'Rahul Kumar',
        psition: 'Seles Manager, Slack',
        title: "It waas a great expirience!",
        description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        star: 5
    },
];

const Testimonials = () => {
    const [testimonialSin, setTestimonialSin] = React.useState(testimonialsData[0]);
    const [testimonialSinId, setTestimonialSinId] = React.useState(0);

    React.useEffect(() => {
        if (testimonialSinId <= 0) {
            setTestimonialSin(testimonialsData[0]);
        }
        else if (testimonialSinId >= testimonialsData.length) {
            setTestimonialSin(testimonialsData[testimonialsData.length - 1]);
        }
        else {
            setTestimonialSin(testimonialsData[testimonialSinId]);
        }
    }, [testimonialSinId]);

    return (
        <div className='font-poppins md:px-28 px-2 md:pb-20 pb-10'>
            <div className="container mx-auto">
                <div className="py-10">
                    <h2 className="md:text-4xl text-2xl md:text-start text-center font-bold">Testimonials</h2>
                </div>
                <div className="grid grid-cols-5 md:gap-5 text-[#92909081]">
                    <div className="hidden md:block rounded-xl md:col-span-2 col-span-5 h-[370px] overflow-x-hidden container-snap">
                        {testimonialsData.map((testimonial, i) => (
                            <div key={i} onClick={() => setTestimonialSin(testimonial)} className={`p-5 ${testimonialSin.id === testimonial.id ? 'shadow cursor-default' : "cursor-pointer"} mx-1 flex gap-5 rounded-xl`}>
                                <div className="">
                                    <img className='h-12 w-12 rounded-full' src={testimonial.img} alt="" />
                                </div>
                                <div className="">
                                    <h3 className="text-xl font-bold text-gray-600">{testimonial.name}</h3>
                                    <p className="text-gray-500">{testimonial.psition}</p>
                                </div>
                            </div>
                        ))}
                        <div className="sticky bottom-0 text-center bg-gradient-to-t from-[#dfdfdf69] to-[#ffffff00]">see</div>
                    </div>
                    <div className="md:col-span-3 col-span-5 flex items-center">
                        
                        <TestimonialItem testimonialSinId={testimonialSinId} setTestimonialSinId={setTestimonialSinId} testimonialsData={testimonialsData} testimonialSin={testimonialSin} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;