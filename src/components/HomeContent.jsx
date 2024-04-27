import React, { useEffect, useState, useRef } from 'react';
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
  const [work002InView, setWork002InView] = useState(false);
  const [work003InView, setWork003InView] = useState(false);
  const work002Ref = useRef(null);
  const work003Ref = useRef(null);
  const imageRef = useRef(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

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

  useEffect(() => {
    const verifyScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      controls1.start({ rotate: newScrollY * 0.5 });
      if (imageRef.current) {
        const imageHeight = imageRef.current.clientHeight;
        const maxScroll = imageHeight * 0.2; // Limit to 20% of image height
        const adjustedScroll = Math.min(maxScroll, newScrollY * 0.125);
        const backgroundPosition = `calc(20% - ${adjustedScroll}px)`;
        imageRef.current.style.backgroundPositionY = backgroundPosition;

        if (newScrollY >= imageHeight) {
          controls1.start({
            rotate: 0,
            transition: {
              duration: 1,
            }
          });
        }
      }
    };

    window.addEventListener("scroll", verifyScroll);
    return () => window.removeEventListener("scroll", verifyScroll);
  }, [controls1]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.target === work002Ref.current) {
          setWork002InView(entry.isIntersecting);
          if (entry.isIntersecting) {
            controls2.start({
              // Define animations for image 2 here
            });
          }
        } else if (entry.target === work003Ref.current) {
          setWork003InView(entry.isIntersecting);
          if (entry.isIntersecting) {
            controls3.start({
              // Define animations for image 3 here
            });
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01,
      duration: 0.5,
    };

    const observerWork002 = new IntersectionObserver(handleIntersection, observerOptions);
    const observerWork003 = new IntersectionObserver(handleIntersection, observerOptions);

    if (work002Ref.current) {
      observerWork002.observe(work002Ref.current);
    }

    if (work003Ref.current) {
      observerWork003.observe(work003Ref.current);
    }

    return () => {
      observerWork002.disconnect();
      observerWork003.disconnect();
    };
  }, [controls2, controls3]);

  const calculateBackgroundPosition = (scrollPosition, inView) => {
    if (inView) {
      const maxScroll = imageRef.current.clientHeight * 0.2; // Limit to 20% of image height
      const adjustedScroll = Math.min(maxScroll, scrollPosition * 0.025);
      return `calc(100% - ${adjustedScroll}px)`;
    }
    return '100%';
  };

  return (
    <div className='bg-white'>
      <div className='grid grid-cols-12 grid-rows-auto-fill gap-6 mx-[7vw] pt-12 pb-36'>
        <div className={`over ${showOverflow ? '' : 'overflow-hidden'} col-start-1 row-start-1 col-span-4`}>
          <motion.h2
            className='text-[5.66vw] flex uppercase'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.5,
            }}
          >
            Creator
          </motion.h2>
        </div>
        <div className={`over ${showOverflow ? '' : 'overflow-hidden'} col-start-1 row-start-2 col-span-8`}>
          <motion.h2
            className='text-[5.66vw] flex uppercase'
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
        <div className="row-start-1 row-span-3 col-start-5 col-span-8 mb-[6rem]">
          <div
            className="image_animation w-[55.78vw] h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${work001})`,
              backgroundSize: '120%',
              backgroundPositionX: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            ref={imageRef}
          ></div>
          <h4 className='w-auto text-left mb-[.5rem] font-medium'>ViZBL | Get to know your friends</h4>
          <div className="tag flex justify-start w-[55.78vw] font-medium">
            <p className='ml-0'>#web design</p> <p>#ui/ux</p> <p>#3d motion</p> <p>#branding</p> <p>#creative direction</p>
          </div>
        </div>
        <div className="col-start-1 col-span-4 row-start-4 row-span-1 flex ">
          <div className="text-left">
            <div className="w-[27.24vw] h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${work002})`,
                backgroundPositionY: calculateBackgroundPosition(scrollY, work002InView),
                backgroundSize: 'auto 100%',
                backgroundPositionX: 'center',
              }}
              ref={work002Ref}
            ></div>
            <h4 className='text-left mb-2'>SOLIX Moldova</h4>
            <div className="flex">
              <p className='ml-0'>#web design</p> <p>#branding</p>
            </div>
          </div>
        </div>
        <div className="col-start-5 col-span-4 row-start-4 flex ">
          <div className="text-left">
            <div className="w-[27.24vw] h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${work003})`,
                backgroundPositionY: calculateBackgroundPosition(scrollY, work003InView),
                backgroundSize: 'auto 110%',
                backgroundPositionX: 'center',
              }}
              ref={work003Ref}
            ></div>
            <h4 className='text-left mb-2'>ALUTRADE</h4>
            <div className="flex">
              <p className='ml-0'>#web design</p> <p>#ui/ux</p> <p>#branding</p>
            </div>
          </div>
        </div>
        <div className="row-start-4 col-start-10 col-span-3 flex items-end justify-end">
          <div className="flex justify-center align-center items-center">
            <motion.div
              animate={controls1}
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
