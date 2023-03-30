import React from "react";

const Benefits = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto sm:px-6 px-2 sm:py-8">
        <div className="py-2">
          <h5 className="text-xl text-primary font-bold text-center">
            Benefits Of Training
          </h5>
          <h2 className="text-5xl font-bold text-center text-primary ">
            With US
          </h2>
        </div>
        <div className="py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            <div className="p-5 text-center">
              <div className="w-full flex justify-center">
                <img
                  src="https://icon-library.com/images/driving-icon/driving-icon-1.jpg"
                  alt="driving school icon"
                  className="rounded-full w-16 h-16 object-contain border-primary border-4"
                />
              </div>
              <h3 className="text-light font-bold text-xl">Safe Driving</h3>
              <p className="text-light font-semibold">
                You don't Just Learn to drive, but to drive safe with <br className="block md:hidden" /> our
                expert Trainer
              </p>
            </div>
            <div className="p-5 text-center">
              <div className="w-full flex justify-center">
                <img
                  src="https://icon-library.com/images/driving-icon/driving-icon-1.jpg"
                  alt="driving school icon"
                  className="rounded-full w-16 h-16 object-contain border-primary border-4"
                />
              </div>
              <h3 className="text-light font-bold text-xl">Driving Simulator</h3>
              <p className="text-light font-semibold">
              Learn an on-road driving Experience with <br className="block md:hidden" /> our experienced Trainer
              </p>
            </div>
            <div className="p-5 text-center">
              <div className="w-full flex justify-center">
                <img
                  src="https://icon-library.com/images/driving-icon/driving-icon-1.jpg"
                  alt="driving school icon"
                  className="rounded-full w-16 h-16 object-contain border-primary border-4"
                />
              </div>
              <h3 className="text-light font-bold text-xl">Personalised Courses</h3>
              <p className="text-light font-semibold">
              Design a well Organized Courses for <br className="block md:hidden" /> our valuable clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
