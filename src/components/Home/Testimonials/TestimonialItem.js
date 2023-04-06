import React, { useEffect } from 'react';
import { BiDislike, BiLike } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const TestimonialItem = ({ testimonialSin, setTestimonialSinId, testimonialSinId, testimonialsData }) => {
    const [like, setLike] = React.useState(false);
    const [disLike, setDisLikeLike] = React.useState(false);

    useEffect(() => {
        setLike(false);
        setDisLikeLike(false)
    }, [testimonialSin]);

    return (
        <div>
            <div className="flex gap-5 md:justify-start  justify-center">
                <div className="">
                    <img className='h-14 w-14 rounded-full object-cover' src={testimonialSin.img} alt="" />
                </div>
                <div className="">
                    <h3 className="text-lg leading-5 font-bold text-gray-500">{testimonialSin.name}</h3>
                    <p className="text-gray-500 ">{testimonialSin.psition}</p>
                    <div className="flex items-center mb-4">
                        <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                </div>
            </div>


            <h2 className="text-lg font-bold text-gray-600 md:text-start text-center">{testimonialSin.title}</h2>

            <div className="md:text-start text-center">
                <p className="md:text-base text-sm text-gray-500 dark:text-gray-400 font-medium">{testimonialSin.description}</p>
            </div>
            <div className="md:flex mt-5 items-center justify-between">
                <div className="text-gray-600 font-semibold flex gap-5 md:justify-start justify-center">
                    <h5 className="">Helpful?</h5>
                    <span onClick={() => { setLike(!like); setDisLikeLike(false)}} className={`flex gap-2 items-center cursor-pointer ${like && 'text-primary'}`}><BiLike className="" /> Yes</span>
                    <span onClick={() => {setDisLikeLike(!disLike); setLike(false)}} className={`flex gap-2 items-center cursor-pointer ${disLike && 'text-red-500'}`}><BiDislike className="" /> No</span>
                    {like && <p className="text-gray-400 font-medium hidden md:block">You found this review helpful.</p>}
                </div>

                <div className="flex md:justify-start justify-center gap-5 text-gray-700">
                    <BsArrowLeftShort onClick={() => setTestimonialSinId(testimonialSinId > 1 && testimonialSinId - 1)} className='font-bold text-xl cursor-pointer hover:bg-gray-50' />
                    <BsArrowRightShort onClick={() => setTestimonialSinId(testimonialSinId < testimonialsData.length && testimonialSinId  + 1)} className='font-bold text-xl cursor-pointer hover:bg-gray-50' />
                </div>

            </div>
        </div>
    );
};

export default TestimonialItem;