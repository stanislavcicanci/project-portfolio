import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroAb from '../components/HeroAb';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import SmoothScroll from '../components/SmoothScroll';
import Footer from '../components/Footer';
import Section2Ab from '../components/Section2Ab';
import Section3Ab from '../components/Section3Ab';

function About() {
const cursorSize = 5;
const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
}
const smoothOption = {
    damping: 20,
    stiffness: 150,
    mass: 0.6
}

const smoothMouse = {
    x: useSpring(mouse.x, smoothOption),
    y: useSpring(mouse.y, smoothOption),
}


useEffect(() => {

    const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
    }

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    
    if (!isTouchDevice) {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
        window.removeEventListener('mousemove', manageMouseMove);
    }
    }
}, [mouse.x, mouse.y])




const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

return (
    <div className=''>
    <SmoothScroll className='bg-white'>
        <div>
        {!isTouchDevice && (
            <>
            <motion.div
                className='cursor fixed w-3 h-3 bg-[#F74264] rounded-full z-[999] pointer-events-none'
                style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                translateX: '-50%',
                translateY: '-50%'
                }}
            ></motion.div>

            <motion.div
                style={{
                position: 'fixed',
                width: 1,
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                left: smoothMouse.x + cursorSize / 2,
                top: 0,
                zIndex: -1
                }}
            ></motion.div>
            </>
        )}
        <Navbar />
        <HeroAb />
        <Section2Ab />
        <Section3Ab />
        <Footer />
        </div>
    </SmoothScroll>
    </div>
);
}

export default About;
