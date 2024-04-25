import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Easing = (x) => {
  let clampX = Math.max(0, Math.min(x, 1))
  return Math.sin((clampX * Math.PI) / 2)
}

const Hero = () => {
  const [allowHover, setAllowHover] = useState(false);
  const [showOverflow, setShowOverflow] = useState(false);

  useEffect(() => {
    const headings = document.querySelectorAll('h1');

    const handleMouseMove = (event) => {
      if (allowHover) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        headings.forEach((heading) => {
          const spans = heading.querySelectorAll('span');

          spans.forEach((span) => {
            const bounds = span.getBoundingClientRect();
            const spanX = bounds.left + bounds.width / 2;
            const spanY = bounds.top + bounds.height / 2;

            const diffX = mouseX - spanX;
            const diffY = mouseY - spanY;

            const distance = Math.sqrt(diffX * diffX + diffY * diffY);

            const normalizedDistance = distance / 500;

            let weight = 800 - 400 * Easing(normalizedDistance);
            weight = Math.max(400, Math.min(weight, 600));

            span.style.fontVariationSettings = `'wght' ${weight}`;
          });
        });
      }
    };

    const handleScroll = (event) => {
      if (allowHover) {
        handleMouseMove({ clientX: event.clientX, clientY: event.clientY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
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
    <>
      <div className="content h-[80vh] bg-[#121212] text-white flex justify-center items-center">
        <div className='grid grid-cols-12 grid-rows-2 gap-6 mx-[7vw]'>
          <div className="col-start-2 col-span-6">
          <div className={`over ${showOverflow ? '' : 'overflow-hidden'}`}>
            <motion.h1
              className='text-[10.42vw] flex uppercase'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
              }}
            >
              Digital
            </motion.h1>
            </div>
          </div>

          <div className="text_homeh4 col-start-8 text-right h-[6.3rem] col-span-4 flex items-end flex-col md:text-[1.5vw] lg:text-[1.25vw] text-white !important uppercase">
            <h4 className=''>
              MOLDOVIAN DESIGNER creating</h4>
            <h4 className=''>
            visual products and
            </h4>
            <h4 className=''>
              experiences.
            </h4>
          </div>

          <div className="text_homeh4 col-start-2 col-span-3 flex justify-end flex-col md:text-[1.5vw] lg:text-[1.25vw]">
            <h4 className='col-start-2 text-left'>
              ©2024
            </h4>
            <h4 className=' text-left'>
              ROFFESIONAL CAREER
            </h4>
            <h4 className='col-start-2 text-left'>
              AGING LIKE FINE WINE
            </h4>
          </div>
          <div className="col-start-5 col-span-7 flex items-end justify-end mt-0">
          <div className={`over ${showOverflow ? '' : 'overflow-hidden'} w-[100vw] flex items-end justify-end`}>
            <motion.h1
              className='text-[10.42vw] flex uppercase'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.3,
              }}
            >
              Creator
            </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
