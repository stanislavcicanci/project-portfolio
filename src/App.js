import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Section3home from './components/Section3home';
import Footer from './components/Footer';

function App() {
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

  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    
    if (!isTouchDevice) {
      const cursor = document.querySelector('.cursor');
      const images = document.querySelectorAll('.image_animation');
      
      const handleMouseEnter = (e) => {
        const { target } = e;
        const { left, top, width, height } = target.getBoundingClientRect();
    
        const imageCenterX = left + width / 2 - cursorSize / 2;
        const imageCenterY = top + height / 2 - cursorSize / 2;
    
        const newX = lerp(mouse.x.get(), imageCenterX, 0.2); 
        const newY = lerp(mouse.y.get(), imageCenterY, 0.2);
    
        mouse.x.set(newX);
        mouse.y.set(newY);
    
        cursor.style.pointerEvents = 'none';
        cursor.classList.add('cursor_a');
    
        setTimeout(() => {
          cursor.textContent = 'EXPLORE PROJECT';
        }, 202);
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
    }
  }, [mouse.x, mouse.y]);

  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  return (
    <>
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
