import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  // scroll opacity
  const [hrOpacity, setHrOpacity] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newOpacity = Math.max(0, Math.min(1, 0.5 - scrollTop / 100));
      setHrOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleMenuItemClick = (e) => {
    e.stopPropagation(); // Împiedică propagarea evenimentului
    setIsOpen(false); // Închide meniul mobil
  };

  return (
    <div>
      <nav className='fixed mix-blend-difference top-0 left-0 right-0 h-[90px] text-white z-50'>
        <div className="flex justify-between leading-[18px] pr-[0.5rem] text-lg font-medium pl-[1rem] pt-[1.5rem] flex-wrap md:pl-[8rem] md:pt-[2.5rem] md:pr-[8rem]">
          <div className="logo">
            <Link to="/"> CĂTĂLIN ȚURKANU.</Link>
          </div>
          <ul className="menu hidden list-none gap-[6rem] md:flex">
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
          </ul>
          <div className="contact hidden md:block">
            CONTACTS
          </div>
          <div className="block md:hidden">
            <div className="burgers">
              <label className="burger burger4" htmlFor="burger4">
                <input className="hiddenn cursor-pointer" id="burger4" type="checkbox" />
                <span onClick={toggleMenu}></span>
              </label>
            </div>
          </div>
        </div>
      </nav>
      <hr
        className="absolute w-[100vw] sm:w-[100%] h-[1px] top-[4rem] opacity-50 z-[999] md:top-[90px]"
        style={{ opacity: hrOpacity }}
        transition={{ duration: 0.01 }}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
          >
            <div className="bg-white p-6 rounded-lg">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link to="/projects" onClick={handleMenuItemClick}>PROJECTS</Link>
                </li>
                <li>
                  <Link to="/about" onClick={handleMenuItemClick}>ABOUT</Link>
                </li>
                <li>
                  <Link to="" onClick={handleMenuItemClick}>CONTACTS</Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;