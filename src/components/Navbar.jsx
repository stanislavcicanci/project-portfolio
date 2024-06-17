import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [hrOpacity, setHrOpacity] = useState(0.5);
  const [isOpen, setIsOpen] = useState(false);
  const menuContainerRef = useRef(null);

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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (menuContainerRef.current) {
      menuContainerRef.current.style.overflow = isOpen ? 'auto' : 'hidden';
    }
  };

  const handleMenuItemClick = (e, to) => {
    e.stopPropagation();
    if (location.pathname !== to) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = (e, to) => {
    if (location.pathname === to) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div ref={menuContainerRef} style={{ overflow: isOpen ? 'hidden' : 'auto' }}>
      <nav className='fixed mix-blend-difference top-0 left-0 right-0 h-[90px] text-white z-50'>
        <div className="flex justify-between leading-[18px] pr-[0.5rem] text-lg font-medium pl-[1rem] pt-[1.5rem] flex-wrap md:pl-[8rem] md:pt-[2.5rem] md:pr-[8rem]">
          <div className="logo">
            <Link to="/" onClick={(e) => handleLinkClick(e, '/')}>
              CĂTĂLIN ȚURKANU.
            </Link>
          </div>
          <ul className="menu hidden list-none gap-[6rem] md:flex">
            <li>
              <Link
                to="/projects"
                onClick={(e) => {
                  handleMenuItemClick(e, '/projects');
                  handleLinkClick(e, '/projects');
                }}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={(e) => {
                  handleMenuItemClick(e, '/about');
                  handleLinkClick(e, '/about');
                }}
              >
                ABOUT
              </Link>
            </li>
          </ul>
          <div className="contact hidden md:block">CONTACTS</div>
          <div className="block md:hidden"
         
          >
            <div className="burgers"
           
            >
              <label className="burger burger4" htmlFor="burger4"
               >
                <input className="hiddenn cursor-pointer" id="burger4" type="checkbox" 
                 onClick={toggleMenu}
                />
                <span 
                
                ></span>
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
            key={location.pathname}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-[65px] left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
          >
            <div className="bg-white p-6 rounded-lg">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/projects"
                    onClick={(e) => {
                      handleMenuItemClick(e, '/projects');
                      handleLinkClick(e, '/projects');
                    }}
                    style={{
                      pointerEvents: location.pathname === '/projects' ? 'none' : 'auto',
                      opacity: location.pathname === '/projects' ? 0.5 : 1,
                    }}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={(e) => {
                      handleMenuItemClick(e, '/about');
                      handleLinkClick(e, '/about');
                    }}
                    style={{
                      pointerEvents: location.pathname === '/about' ? 'none' : 'auto',
                      opacity: location.pathname === '/about' ? 0.5 : 1,
                    }}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={(e) => handleMenuItemClick(e, '')}
                    style={{
                      pointerEvents: location.pathname === '' ? 'none' : 'auto',
                      opacity: location.pathname === '' ? 0.5 : 1,
                    }}
                  >
                    CONTACTS
                  </Link>
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