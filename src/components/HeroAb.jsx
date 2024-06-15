import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { heroab } from '../index';


const HeroAb = () => {

    const [isTouch, setTouch] = useState(false);
    const [allowHover, setAllowHover] = useState(false);
    const [showOverflow, setShowOverflow] = useState(false);
    const [, setScrollPosition] = useState(0);
    const [, setMousePosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
        // Detect touch device
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if(isTouchDevice) {
        setAllowHover(false);
        setTouch(true);
        }
    
        const handleScroll = () => {
        if (allowHover) {
            const position = window.scrollY;
            setScrollPosition(position);
        }
        };
    
        const handleMouseMove = (event) => {
        if (allowHover) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            setMousePosition({ x: mouseX, y: mouseY });
        }
        };
    
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [allowHover]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setAllowHover(true);
            setTimeout(() => {
            setShowOverflow(true);
        }, 0);
        }, 900);
    
        return () => clearTimeout(timer);
    }, []);

    
return (
    <div className="content h-[91.5vh] relative bg-[#121212] text-white flex flex-col justify-center items-center">
    <div className="grid w-[100vw] sm:w-[100%] grid-cols-4 mt-[10vw] grid-rows-2 sm:gap-y-[5.8125rem] gap-x-[1.5rem] sm:mt-0 md:grid-cols-12 md:grid-rows-2 sm:gap-x-[1.5rem]  mx-[1rem] md:mx-[7vw] px-[1rem] lg:px-[9.5rem]">
        <div className='col-start-1 col-span-3 sm:col-start-2 sm:col-span-6 sm:row-start-1 z-10'>
            
            <div className={`over ${showOverflow ? '' : 'overflow-hidden'}  ${isTouch ? 'font-semibold' : ''}`}>
            <motion.h1
            className="flex uppercasen mt-1 sm:mt-0"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.8,
            }}
            >
        ABOUT
            </motion.h1>
        </div>
        </div>
    <div className="col-start-3 col-span-2 row-start-2 md:col-start-9 md:col-span-3 sm:mt-0 flex items-end justify-end mt-[5.8rem]">
        <div className={`over ${showOverflow ? '' : 'overflow-hidden'} w-[100vw] flex items-end justify-end ${isTouch ? 'font-semibold' : ''} z-10`}>
            <motion.h1
            className="md:text-[10.42vw] flex uppercase text-[4rem]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.4,
            }}
            >
            ME
            </motion.h1>
        </div>
        </div>

        <div className="text_homeh4 text-[1rem] mt-[1.5rem] col-start-1 col-span-4 row-start-3 md:row-start-2 md:col-start-2 md:col-span-5 flex justify-end flex-col md:text-[1.5vw] lg:text-[1.25vw]">
        <h4 className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean dignissim felis nunc, ac volutpat lorem scelerisque a. Cras ac nulla.
        </h4>
        </div>

        <div
            className="image_animation w-[12.6875rem] h-[17.19rem] sm:w-[11.77vw] sm:h-[100%]  bg-cover bg-center flex justify-center items-center col-start-1 sm:col-start-7 sm:col-span-3 sm:ml-auto sm:mr-auto col-span-4  row-start-1 absolute ml-[17vw] sm:relative  sm:row-start-1 row-span-2 z-[0]"
            style={{
                backgroundImage: `url(${ heroab })`,
            
            }}
        ></div>

        </div>

        <div className="scroll absolute bottom-[15vw] lg:bottom-[2.5vw]"></div>
    </div>
)
}

export default HeroAb
