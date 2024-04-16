import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function App() {

  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const smoothOption = {
    damping: 20,
    stiffness: 100,
    mass: 1
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
  }, [])

  return (
    <>
      <motion.div
        className='style.cursor left-[smoothMouse.x] top-[smoothMouse.y] fixed w-3 h-3 bg-red-500 rounded-full'
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
    </>
  );
}

export default App;
