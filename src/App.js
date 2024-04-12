import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const textRef = useRef(null);

  useEffect(() => {
    const MAX_DISTANCE = 300;
    const MAX_FONT_WEIGHT = 800;
    const MIN_FONT_WEIGHT = 400;
  
    const onMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      if (textRef.current) {
        const fontWeightItems = textRef.current.querySelectorAll('.char');
        fontWeightItems.forEach((char) => {
          const itemRect = char.getBoundingClientRect();
          const itemCenterX = itemRect.left + itemRect.width / 2 + window.scrollX;
          const itemCenterY = itemRect.top + itemRect.height / 2 + window.scrollY;
  
          const distance = Math.sqrt(
            Math.pow(mouseX - itemCenterX, 2) + Math.pow(mouseY - itemCenterY, 2)
          );
  
          const fontWeight = distance < MAX_DISTANCE
            ? gsap.utils.mapRange(
              0,
              MAX_DISTANCE,
              MIN_FONT_WEIGHT,
              MAX_FONT_WEIGHT,
              Math.max(0, MAX_DISTANCE - distance))
            : MIN_FONT_WEIGHT;
  
          gsap.to(char, { fontWeight, duration: 0.5, easing: 'ease-in-out' });
        });
      }
    };
  
    document.addEventListener("mousemove", onMouseMove);
  
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
    <Navbar />
    <Hero />
    </>
  );
}

export default App;



/* <motion.div
      ref={textRef}
      className='textanim text-center text-black font-bold text-3xl text-bold mt-[50vh] text-[10vw]'
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {Array.from('DIGITAL CREATOR').map((char, index) => (
        <span key={index} className="char w-[1648px]">{char}</span>
      ))}
      <br></br>
      {Array.from('RANDOM TEXT THAT WILL HASAVER MEANING LATER').map((char, index) => (
        <span key={index} className="char text-stone-950 text-[42.5px] font-normal tracking-widest ">{char}</span>
      ))}
    </motion.div> */