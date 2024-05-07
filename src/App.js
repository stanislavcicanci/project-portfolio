import React, { useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Section3home from './components/Section3home';
import Footer from './components/Footer';
function App() {
  const cursorSize = 20;
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

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    }
  }, )

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
  
    const images = document.querySelectorAll('.image_animation');
  
    const handleMouseEnter = () => {
      cursor.textContent = 'EXPLORE PROJECT';
      cursor.classList.add('w-[123px]');
      cursor.classList.add('text-white');
      cursor.classList.add('text-center');
      cursor.classList.add('h-[22px]');
      cursor.classList.add('rounded-none');
      cursor.classList.add('text-[12px]');
      cursor.classList.add('justify-center');
      cursor.classList.add('font-normal');
      cursor.classList.add('leading-5');
    };

  
    images.forEach((image) => {
      image.addEventListener('mouseenter', handleMouseEnter);
    });
  
    return () => {
      images.forEach((image) => {
        image.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);
  


  return (
    <>
    <SmoothScroll>    

      <div >
      <motion.div
        className='cursor left-[smoothMouse.x] top-[smoothMouse.y] fixed w-3 h-3 bg-[#F74264] rounded-full z-[999]'
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
      >
      </motion.div>
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
      <Navbar />
      <Hero />
      <HomeContent />
      <Section3home />
      <Footer />
      </div>
      </SmoothScroll>
    </>
  );
}

export default App;

