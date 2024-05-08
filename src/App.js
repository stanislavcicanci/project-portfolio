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
    
    const handleMouseEnter = (e) => {
      const { target } = e;
      const { left, top, width, height } = target.getBoundingClientRect();
  
      // Calculează poziția de centru a divului
      const centerX = left + width / 2 - cursorSize / 2;
      const centerY = top + height / 2 - cursorSize / 2;
  
      // Setează poziția cursorului la mijlocul divului
      mouse.x.set(centerX);
      mouse.y.set(centerY);
  
      cursor.style.pointerEvents = 'none';
      cursor.classList.add('cursor_a');
      // Amână setarea textului cu 0.5 secunde
      setTimeout(() => {
          cursor.textContent = 'EXPLORE PROJECT';
      }, 202); // 500 milisecunde = 0.5 secunde
  };
  
  
    const handleMouseLeave = () => {
      cursor.textContent = '';
      cursor.classList.remove('cursor_a');
    };
    
    images.forEach((image) => {
      image.addEventListener('mouseenter', handleMouseEnter);
      image.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      images.forEach((image) => {
        image.removeEventListener('mouseenter', handleMouseEnter);
        image.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [mouse.x, mouse.y]);
  
  


  return (
    <>
    <SmoothScroll>    

      <div >
      <motion.div
  className='cursor fixed w-3 h-3 bg-[#F74264] rounded-full z-[999]'
  style={{
    left: smoothMouse.x,
    top: smoothMouse.y,
    translateX: '-50%', // Centrare pe axa X
    translateY: '-50%'  // Centrare pe axa Y
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

