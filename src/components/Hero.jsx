import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Easing = (x) => {
  let clampX = Math.max(0, Math.min(x, 1));
  return Math.sin((clampX * Math.PI) / 2);
};

const Hero = () => {
  const [allowHover, setAllowHover] = useState(false);
  const [showOverflow, setShowOverflow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if(isTouchDevice) {
      setAllowHover(false);
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
    if (!allowHover) return; // Prevent animation if hover is not allowed

    const headings = document.querySelectorAll('h1');

    headings.forEach((heading) => {
      heading.innerHTML = heading.textContent
        .split('')
        .map((letter) => `<span>${letter}</span>`)
        .join('');

      const spans = heading.querySelectorAll('span');

      spans.forEach((span) => {
        const bounds = span.getBoundingClientRect();
        const spanX = bounds.left + bounds.width / 2;
        const spanY = bounds.top + bounds.height / 2;

        const diffX = Math.abs(mousePosition.x - spanX);
        const diffY = Math.abs(mousePosition.y - spanY);
        const distance = Math.sqrt(diffX * diffX + diffY * diffY);
        const normalizedDistance = distance / 500;

        let weight = 800 - 400 * Easing(normalizedDistance);
        weight = Math.max(400, Math.min(weight, 600));

        span.style.fontVariationSettings = `'wght' ${weight}`;
      });
    });
  }, [scrollPosition, mousePosition, allowHover]);

  

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
      <div className="grid grid-cols-4 mt-[10vw] grid-rows-3 gap-x-[12px] sm:mt-0 md:grid-cols-12 md:grid-rows-2 md:gap-6 mx-[1rem] md:mx-[7vw]">
        <div className="col-start-1 col-span-3 row-start-2 sm:text-[4rem] md:col-start-2 md:col-span-6 md:row-start-1">
          <div className={`over ${showOverflow ? '' : 'overflow-hidden'}`}>
            <motion.h1
              className="flex uppercase"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.8,
              }}
            >
              Digital
            </motion.h1>
          </div>
        </div>

        <div className="text_homeh4 col-start-2 col-span-3 md:col-start-8 text-right h-[6.3rem] md:col-span-4 flex items-end flex-col md:text-[1.5vw] lg:text-[1.25vw] text-white !important uppercase">
          <h4 className="">
            MOLDOVIAN DESIGNER creating
          </h4>
          <h4 className="">
            visual products and
          </h4>
          <h4 className="">
            experiences.
          </h4>
        </div>

        <div className="text_homeh4 text-[1rem] col-start-1 col-span-3 md:col-start-2 md:col-span-3 flex justify-end flex-col md:text-[1.5vw] lg:text-[1.25vw]">
          <h4 className="col-start-2 text-left">©2024</h4>
          <h4 className="text-left">ROFFESIONAL CAREER</h4>
          <h4 className="col-start-2 text-left">AGING LIKE FINE WINE</h4>
        </div>
        <div className="col-start-1 col-span-4 row-start-2 md:col-start-5 md:col-span-7 flex items-end justify-end mt-0">
          <div className={`over ${showOverflow ? '' : 'overflow-hidden'} w-[100vw] flex items-end justify-end`}>
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
              Creator
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="scroll absolute bottom-[15vw] lg:bottom-[2.5vw]"></div>
    </div>
  );
};

export default Hero;
