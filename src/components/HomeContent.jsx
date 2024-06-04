import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { work001, work002, work003 } from '../index';
import { AiOutlinePlus } from "react-icons/ai";

const Easing = (x) => {
  let clampX = Math.max(0, Math.min(x, 1));
  return Math.sin((clampX * Math.PI) / 2);
};

const HomeContent = () => {
  const [allowHover, setAllowHover] = useState(false);
  const [showOverflow, setShowOverflow] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const refWork001 = useRef(null);
  const refWork002 = useRef(null);
  const refWork003 = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    setAllowHover(!isTouchDevice);
  }, []);
  const handleScroll = useCallback(() => {
    if (!allowHover) return;
    const imageRefs = [imageRef1, imageRef2, imageRef3];

    imageRefs.forEach((imageRef) => {
      if (imageRef.current) {
        const element = imageRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollTop = window.scrollY;
          const elementTop = element.offsetTop;
          const elementHeight = element.clientHeight;
          const scrollAmount = (scrollTop - elementTop + windowHeight) / elementHeight;

          const slowScrollAmount = scrollAmount * 0.5;

          if (slowScrollAmount >= 0 && slowScrollAmount <= 1) {
            element.style.backgroundPositionY = `${slowScrollAmount * 100}%`;
          }
        }
      }
    });
  }, [allowHover]);

  useEffect(() => {
    if (!allowHover) return;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allowHover, handleScroll]);

  useEffect(() => {
    const handleScroll = () => {
      if (allowHover) {
        const position = window.scrollY;
        setScrollY(position);
      }
    };

    const handleMouseMove = (event) => {
      if (allowHover) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setMousePosition({ x: mouseX, y: mouseY });
      }
    };

    if (allowHover) {
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [allowHover]);

  useEffect(() => {
    if (!allowHover) return;

    const headings = document.querySelectorAll('h2');
    headings.forEach((heading) => {
      heading.innerHTML = heading.textContent
        .split('')
        .map((letter) => {
          return `<span>${letter}</span>`;
        })
        .join('');

      const spans = heading.querySelectorAll('span');
      spans.forEach((span) => {
        const bounds = span.getBoundingClientRect();
        const spanX = bounds.left + bounds.width / 2;
        const spanY = bounds.top + bounds.height / 2;

        const diffX = Math.abs(mousePosition.x - spanX);
        const diffY = Math.abs(mousePosition.y - spanY);
        const distance = Math.sqrt(diffX * diffX + diffY * diffY);
        const normalizedDistance = distance / 200;

        let weight = 800 - 400 * Easing(normalizedDistance);
        weight = Math.max(400, Math.min(weight, 600));

        span.style.fontVariationSettings = `'wght' ${weight}`;
      });
    });
  }, [scrollY, mousePosition, allowHover]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (allowHover) {
        setAllowHover(true);
        setTimeout(() => {
          setShowOverflow(true);
        }, 0);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [allowHover]);


  //animatia la plus
  useEffect(() => {
    const verifyScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ rotate: scrollY * 0.5 });
    };

    window.addEventListener("scroll", verifyScroll);
    return () => window.removeEventListener("scroll", verifyScroll);
  }, [controls]);
  return (
    <div className='bg-white'>
      <div className='grid grid-cols-4 gap-x-[0.75rem] pt-[3rem] mx-[1rem] sm:grid-cols-12 grid-rows-auto-fill sm:gap-6 sm:mx-[7vw] sm:pt-12 sm:pb-36'>
        <div className={`over ${showOverflow ? '' : 'overflow-hidden'} col-start-1 col-span-3 sm:col-start-1 sm:row-start-1 sm:col-span-4 pb-[1rem] sm:pb-0`}>
          <motion.h2
            className='text-[3rem] sm:text-[5.66vw] flex uppercase'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.7,
            }}
          >
            Recent
          </motion.h2>
        </div>
        <div className={`over ${showOverflow ? '' : 'overflow-hidden'} row-start-2 col-start-1 col-span-3 sm:col-start-1 sm:row-start-2 sm:col-span-8 pb-[1.5rem] sm:pb-0`}>
          <motion.h2
            className='text-[3rem] sm:text-[5.66vw] flex uppercase'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.8,
            }}
          >
            Work
          </motion.h2>
        </div>
        <div className="row-start-3 col-start-1 col-span-4 sm:row-start-1  sm:row-span-3 sm:col-start-5 sm:col-span-8 mb-[1rem] sm:mb-[6rem]" ref={refWork001}>
          <div
            className="image_animation h-[16.125rem] sm:w-[55.78vw] sm:h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${work001})`,
              backgroundSize: '110%',
              backgroundPositionX: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            ref={imageRef1}
          ></div>
          <h4 className='w-auto text-left mb-[.5rem] font-medium'>ViZBL | Get to know your friends</h4>
          <div className="tag w-[15.75rem] sm:w-[55.78vw] flex justify-start font-medium flex-wrap">
            <p className='ml-0'>#web design</p> <p className='ml-1 sm:ml-2'>#ui/ux</p> <p className='ml-1 sm:ml-2'>#3d motion</p> <p className='ml-1 sm:ml-2'>#branding</p> <p className='sm:ml-2'>#creative direction</p>
          </div>
        </div>
        <div className="row-start-4 col-start-1 col-span-4 sm:col-start-1 sm:col-span-4 sm:row-start-4 sm:row-span-1 flex justify-center sm:justify-start" ref={refWork002}>
          <div className="text-left">
          <div className="image_animation w-[91.7vw] flex-col sm:flex-row sm:w-[27.24vw] h-[16.125rem] sm:h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center bg-size-100 sm:bg-size-145"
            style={{
              backgroundImage: `url(${work002})`,
              backgroundPositionX: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            ref={imageRef2}
          ></div>

            <h4 className='text-left mb-2'>SOLIX Moldova</h4>
            <div className="flex mb-6 sm:mb-0">
              <p className='ml-0'>#web design</p> <p className='ml-1 sm:ml-2'>#branding</p>
            </div>
          </div>
        </div>
        <div className="row-start-5 col-start-1 col-span-4 sm:col-start-5 sm:col-span-4 sm:row-start-4 sm:row-span-1 flex justify-center sm:justify-start">
          <div className="text-left" ref={refWork003}>
            <div className="image_animation w-[91.7vw] flex-col sm:flex-row sm:w-[27.24vw] h-[16.125rem] sm:h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center bg-size-100 sm:bg-size-145"
              style={{
                backgroundImage: `url(${work003})`,
                backgroundPositionX: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              ref={imageRef3}
            ></div>
            <h4 className='text-left mb-2'>ALUTRADE</h4>
            <div className="flex">
              <p className='ml-0'>#web design</p> <p className='ml-1 sm:ml-2'>#ui/ux</p> <p className='ml-1 sm:ml-2'>#branding</p>
            </div>
          </div>
        </div>
        <div className="row-start-6 col-start-1 col-span-4 mt-[3rem] sm:mt-0 mb-16 sm:mb-0 sm:row-start-4 sm:col-start-10 sm:col-span-3 flex items-end justify-end">
          <div className="flex justify-center align-center items-center">
            <motion.div
              animate={controls}
            >
              <AiOutlinePlus className='size-[27px] sm:size-[37px] font-bold' />
            </motion.div>
            <h3 className='ml-3'>MORE WORK</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;


