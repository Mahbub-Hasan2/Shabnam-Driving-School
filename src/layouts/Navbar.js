import React from "react";
import Button from "../components/UI/Button";
import logo from "../Assets/images/logo2.png";
import { Link as LinkScroll } from 'react-scroll';

const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <div className="font-poppins relative ">
      <nav className="bg-light  px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full  top-0 left-0 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Flowbite</span> */}
          </a>
          <div className="flex md:order-2">
            <LinkScroll to="CONTACT" spy={true} smooth={true}>
              <Button title="contact" />
            </LinkScroll>

            <button onClick={() => (setNavOpen(!navOpen))} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`items-center justify-between ${navOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <LinkScroll to="HOME" spy={true} smooth={true} className="cursor-pointer block py-2 pl-3 pr-4 text-secondary rounded hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</LinkScroll>
              </li>
              <li>
                <LinkScroll to="ABOUT" spy={true} smooth={true} className="cursor-pointer block py-2 pl-3 pr-4 text-secondary rounded hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</LinkScroll>
              </li>
              <li>
                <LinkScroll to="SERVICES" spy={true} smooth={true} className="cursor-pointer block py-2 pl-3 pr-4 text-secondary rounded hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</LinkScroll>
              </li>
              <li>
                <LinkScroll to="CONTACT" spy={true} smooth={true} className="cursor-pointer block py-2 pl-3 pr-4 text-secondary rounded hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</LinkScroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
