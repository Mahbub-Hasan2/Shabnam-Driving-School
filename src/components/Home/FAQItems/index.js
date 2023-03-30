import React from 'react';

const FAQItems = ({item}) => {
    return (
        <li className="mb-5 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img className="rounded-full shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRLyHRK4ILhnU2XBSK_763SEA_el4b00DZw&usqp=CAU" alt="ThomasLeanimage" />
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="items-center justify-between mb-3 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">i</time>
                    <div className="md:text-base text-sm lex dark:text-gray-300 font-semibold text-gray-900">Q - {item.Q}</div>
                </div>
                <div className="flex">
                    <p className="w-16">A -</p>
                    <p className="md:text-base text-sm">{item.A}</p>
                </div>
            </div>
        </li>
    );
};

export default FAQItems;