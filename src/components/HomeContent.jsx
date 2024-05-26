import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { work001, work002, work003 } from '../index';
import { AiOutlinePlus } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';

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
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls = useAnimation();

  const handleScroll = () => {
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
  
          // Adjusting the factor to slow down the scroll effect
          const slowScrollAmount = scrollAmount * 0.5;
  
          if (slowScrollAmount >= 0 && slowScrollAmount <= 1) {
            element.style.backgroundPositionY = `${slowScrollAmount * 100}%`;
          }
        }
      }
    });
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [allowHover]);

  useEffect(() => {
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
  }, [scrollY, mousePosition]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllowHover(true);
      setTimeout(() => {
        setShowOverflow(true);
      }, 0);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [refWork001, inViewWork001] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    if (inViewWork001) {
      const initialScrollY = imageRef1.current.offsetTop - window.innerHeight;
      const imageHeight = imageRef1.current.clientHeight;
      const maxScroll = imageHeight * 0.15;
  
      const verifyScroll = () => {
        const newScrollY = window.scrollY;
        const adjustedScroll = Math.min(maxScroll, (newScrollY - initialScrollY) * 0.07);
        const backgroundPosition = `calc(1% - ${adjustedScroll}px)`;
        imageRef1.current.style.backgroundPositionY = backgroundPosition;
  
        if (newScrollY >= initialScrollY + imageHeight) {
          controls1.start({
            rotate: 0,
            transition: {
              duration: 1,
            }
          });
        } else {
          controls1.start({ rotate: (newScrollY - initialScrollY) * 0.25 });
        }
      };
  
      window.onload = () => {
        verifyScroll();
      }

      window.addEventListener("scroll", verifyScroll);
      return () => window.removeEventListener("scroll", verifyScroll);
    }
  }, [controls1, inViewWork001]);

  const [refWork002, inViewWork002] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const [refWork003, inViewWork003] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    if (inViewWork002) {
      const initialScrollY = imageRef2.current.offsetTop - window.innerHeight;
      const imageHeight = imageRef2.current.clientHeight;
      const maxScroll = imageHeight * 0.2;
  
      const verifyScroll = () => {
        const newScrollY = window.scrollY;
        const adjustedScroll = Math.min(maxScroll, (newScrollY - initialScrollY) * 0.07);
        const backgroundPosition = `calc(20% - ${adjustedScroll}px)`;
        imageRef2.current.style.backgroundPositionY = backgroundPosition;
  
        if (newScrollY >= initialScrollY + imageHeight) {
          controls2.start({
            rotate: 0,
            transition: {
              duration: 1,
            }
          });
        } else {
          controls2.start({ rotate: (newScrollY - initialScrollY) * 0.5 });
        }
      };
  
      window.addEventListener("scroll", verifyScroll);
      return () => window.removeEventListener("scroll", verifyScroll);
    }
  }, [controls2, inViewWork002]);

  useEffect(() => {
    if (inViewWork003) {
      const initialScrollY = imageRef3.current.offsetTop - window.innerHeight;
      const imageHeight = imageRef3.current.clientHeight;
      const maxScroll = imageHeight * 0.2;
  
      const verifyScroll = () => {
        const newScrollY = window.scrollY;
        const adjustedScroll = Math.min(maxScroll, (newScrollY - initialScrollY) * 0.07);
        const backgroundPosition = `calc(20% - ${adjustedScroll}px)`;
        imageRef3.current.style.backgroundPositionY = backgroundPosition;
  
        if (newScrollY >= initialScrollY + imageHeight) {
          controls3.start({
            rotate: 0,
            transition: {
              duration: 1,
            }
          });
        } else {
          controls3.start({ rotate: (newScrollY - initialScrollY) * 0.5 });
        }
      };
  
      window.addEventListener("scroll", verifyScroll);
      return () => window.removeEventListener("scroll", verifyScroll);
    }
  }, [controls3, inViewWork003]);

  // Plus animatie
  React.useEffect(() => {
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
            className='text-[4rem] sm:text-[5.66vw] flex uppercase'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.5,
            }}
          >
            Recent
          </motion.h2>
        </div>
        <div className={`over ${showOverflow ? '' : 'overflow-hidden'} row-start-2 col-start-1 col-span-3 sm:col-start-1 sm:row-start-2 sm:col-span-8 pb-[1.5rem] sm:pb-0`}>
          <motion.h2
            className='text-[4rem] sm:text-[5.66vw] flex uppercase'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.6,
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
          <div className="tag flex justify-start w-[55.78vw] font-medium sm:flex-wrap">
            <p className='ml-0'>#web design</p> <p>#ui/ux</p> <p>#3d motion</p> <p>#branding</p> <p>#creative direction</p>
          </div>
        </div>
        <div className="row-start-4 col-start-1 col-span-4 sm:col-start-1 sm:col-span-4 sm:row-start-4 sm:row-span-1 flex justify-center sm:justify-start" ref={refWork002}>
          <div className="text-left">
            <div className="image_animation w-[22.375rem] flex-col sm:flex-row sm:w-[27.24vw] h-[16.125rem] sm:h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${work002})`,
                backgroundSize: 'auto 125%',
                backgroundPositionX: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              ref={imageRef2}
            ></div>
            <h4 className='text-left mb-2'>SOLIX Moldova</h4>
            <div className="flex">
              <p className='ml-0'>#web design</p> <p>#branding</p>
            </div>
          </div>
        </div>
        <div className="row-start-5 col-start-1 col-span-4 sm:col-start-5 sm:col-span-4 sm:row-start-4 sm:row-span-1 flex ">
          <div className="text-left" ref={refWork003}>
            <div className="image_animation w-[27.24vw] h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${work003})`,
                backgroundSize: 'auto 125%',
                backgroundPositionX: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              ref={imageRef3}
            ></div>
            <h4 className='text-left mb-2'>ALUTRADE</h4>
            <div className="flex">
              <p className='ml-0'>#web design</p> <p>#ui/ux</p> <p>#branding</p>
            </div>
          </div>
        </div>
        <div className="row-start-6 col-start-1 col-span-4 sm:row-start-4 sm:col-start-10 sm:col-span-3 flex items-end justify-end">
          <div className="flex justify-center align-center items-center">
            <motion.div
              animate={controls}
            >
              <AiOutlinePlus className=' size-[37px] font-bold' />
            </motion.div>
            <h3 className='ml-3'>MORE WORK</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;


