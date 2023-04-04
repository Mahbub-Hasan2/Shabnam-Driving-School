import React, { useState } from 'react';

const ServiceItem = ({ item, id }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-0`}>
            <div className={`group relative ${id % 2 === 0 ? 'order-none' : 'md:order-1'} flex justify-center items-center p-2`}>
                <img src={item.img} className="h-64 w-full object-cover border-2 border-gray-300 rounded-lg" alt="Driver's Education Course" />
                <div className="absolute  group-hover:bg-[#07071f7c] flex items-center justify-center w-full h-full p-2 m-2">
                    <h2 className="text-xl font-bold text-primary">{id + 1} - {item.title}</h2>
                </div>
            </div>
            <div className="flex items-center p-2">
                <div className="">
                    <h2 className="text-xl font-bold text-secondary">{id + 1} - {item.title}</h2>
                    <p className="hidden md:block">
                        {item.description}
                    </p>
                    <p className="block md:hidden">
                        {showMore ? item.description : `${item.description.substring(0, 100)}`}
                        <button className="text-blue-500 ml-2" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;