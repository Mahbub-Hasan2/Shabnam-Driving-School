import React from 'react';
import FAQItems from './FAQItems';

const faqData = [
    {
        Q: 'How do I enroll in a driving course?',
        A: 'Enrolling in a driving course is easy! You can visit our website and select the program that best suits your needs. You can also contact us by phone or email to schedule your training.'
    },
    {
        Q: 'How long does it take to complete a driving course?',
        A: 'The duration of our driving courses varies depending on the program you choose. Typically, classroom instruction lasts several weeks, and behind-the-wheel training can take several days or weeks, depending on your availability.'
    },
    {
        Q: 'What is the cost of your driving courses?',
        A: 'Our driving courses are competitively priced, and the cost varies depending on the program you choose. Please visit our website or contact us to learn more about our pricing and payment options.'
    },
    {
        Q: 'Do you offer behind-the-wheel training for teens?',
        A: 'Yes, we offer behind-the-wheel training for teens as part of our driver education program. Our instructors are experienced in working with new drivers and helping them develop safe and responsible driving habits.'
    },
    {
        Q: 'Do you provide a vehicle for behind-the-wheel training?',
        A: 'Yes, we provide a vehicle for behind-the-wheel training as part of our driver education program. Our vehicles are safe and well-maintained, and are equipped with the necessary safety features.'
    },
    {
        Q: 'Is your driving school licensed?',
        A: 'Yes, we are a licensed driving school and adhere to all state regulations and standards for driver education. Our instructors are certified and experienced, and our programs are designed to meet the needs of new drivers of all ages and experience levels.'
    }
]

const FAQ = () => {
    return (
        <div className='container mx-auto md:py-20 py-5'>

            <div className="grid grid-cols-5 gap-5">
                <div className="md:col-span-3 col-span-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {faqData.map((item, index) => <FAQItems key={index} item={item} />)}
                    </ol>
                </div>
                <div className="md:col-span-2 col-span-5">
                    <p className="border rounded-lg p-5 shadow">
                        Our FAQ section provides quick and easy access to important information about our driving school. It is designed to answer common questions that our students may have, without the need to contact us directly. Our FAQ section is organized into categories or sections, making it easy to find the information you need. We provide clear and concise answers to each question, ensuring that our students have a positive and hassle-free experience. Our FAQ section is just one of the ways that we demonstrate our commitment to providing the best possible service to our students.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default FAQ;