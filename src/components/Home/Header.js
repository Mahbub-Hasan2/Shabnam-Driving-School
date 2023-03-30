import React from "react";
import Button from "../UI/Button";

const Header = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] w-full bg-cover bg-center md:h-screen h-[70vh]">
      <header className="" style={{backgroundImage: 'linear-gradient(290deg, #ffffff00 0 50%, #ffffff00 50% 100%)'}}>
        <div className="container mx-auto sm:px-6 px-2 sm:text-left text-center">
          <div className="md:h-screen h-[70vh] flex items-center bg-[]">
            <div className="">
              <h2 className="md:text-6xl sm:text-4xl text-xl text-light font-bold shadow-2xl">
                Lorem ipsum dolor
              </h2>
              <h2 className="md:text-5xl sm:text-3xl text-xl text-primary font-bold shadow-2xl">
                Lorem ipsum dolor sit amet{" "}
              </h2>

              <p className="md:text-base text-sm  text-light md:py-5 py-2 lg:w-1/2 w-full">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quisquam itaque unde provident aut dignissimos, aperiam culpa
                reprehenderit animi aliquid quas dolorem quasi enim repudiandae
                amet accusantium, vitae quidem error similique molestiae nisi
                consectetur cumque, eligendi asperiores! Ipsum molestiae
                possimus perferendis impedit suscipit necessitatibus laborum
                doloremque, nisi ut! Reprehenderit, repudiandae.
              </p>

              <Button title="contact"  />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
