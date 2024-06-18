import React, { useEffect, useState, useRef, useCallback } from 'react';
import {  useAnimation } from 'framer-motion';
import { work001, work002, work003, work004, work005 } from '../index';



const HeroPr = () => {
  const [allowHover, setAllowHover] = useState(false);
  const [, setShowOverflow] = useState(false);
  const [, setScrollY] = useState(0);
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);
  const refWork001 = useRef(null);
  const refWork002 = useRef(null);
  const refWork003 = useRef(null);
  const refWork004 = useRef(null);
  const refWork005 = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    setAllowHover(!isTouchDevice);
  }, []);
  const handleScroll = useCallback(() => {
    if (!allowHover) return;
    const imageRefs = [imageRef1, imageRef2, imageRef3, imageRef4, imageRef5];

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
      <div className='grid grid-cols-4 gap-x-[0.75rem] pt-[3.25rem] mx-[1rem] sm:grid-cols-12 grid-rows-auto-fill sm:gap-6 sm:mx-[7vw] sm:pt-[154px] sm:pb-36'>
      <h2 className="col-start-1 col-span-4 text-black mt-7 text-[3rem] sm:text-[5.6vw] mb-4 sm:mb-0">
      HIGHLIGHTED
      </h2>
      <h2 className="col-start-1 text-black text-[3rem] sm:text-[5.6vw]">
      PROJECTS
      </h2>
      
      </div>
      <div className='grid grid-cols-4 gap-x-[0.75rem] pt-[3.25rem] mx-[1rem] sm:grid-cols-12 grid-rows-auto-fill sm:gap-6 sm:mx-[7vw] sm:pt-12 sm:pb-36'>
        <div className="row-start-3 col-start-1 col-span-4 sm:row-start-1  sm:row-span-3 sm:col-start-5 sm:col-span-8 mb-[1rem] sm:mb-[6rem]" ref={refWork001}>
            <a href="https://myvizbl.com/">  
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

          </a>
          <h4 className='w-auto text-left mb-[.5rem] font-medium'>ViZBL | Get to know your friends</h4>
          <div className="tag w-[15.75rem] sm:w-[55.78vw] flex justify-start font-medium flex-wrap">
            <p className='ml-0'>#web design</p> <p className='ml-1 sm:ml-2'>#ui/ux</p> <p className='ml-1 sm:ml-2'>#3d motion</p> <p className='ml-1 sm:ml-2'>#branding</p> <p className='sm:ml-2'>#creative direction</p>
          </div>
        </div>
        <div className="row-start-4 col-start-1 col-span-4 sm:col-start-1 sm:col-span-4 sm:row-start-4 sm:row-span-1 flex justify-center sm:justify-start" ref={refWork002}>
          <div className="text-left">
          <a className="image_animation w-[91.7vw] flex-col sm:flex-row sm:w-[27.24vw] h-[16.125rem] sm:h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center bg-size-100 sm:bg-size-145"
            style={{
              backgroundImage: `url(${work002})`,
              backgroundPositionX: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            ref={imageRef2}
            href='https://solix.md/'
          ></a>

            <h4 className='text-left mb-2'>SOLIX Moldova</h4>
            <div className="flex mb-6 sm:mb-0">
              <p className='ml-0'>#web design</p> <p className='ml-1 sm:ml-2'>#branding</p>
            </div>
          </div>
        </div>
        <a className="row-start-5 col-start-1 col-span-4 sm:col-start-5 sm:col-span-4 sm:row-start-4 sm:row-span-1 flex justify-center sm:justify-start mb-6 sm:mb-0">
          <div className="text-left" ref={refWork003}>
            <a className="image_animation w-[91.7vw] flex-col sm:flex-row sm:w-[27.24vw] h-[16.125rem] sm:h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center bg-size-100 sm:bg-size-145"
              style={{
                backgroundImage: `url(${work003})`,
                backgroundPositionX: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              ref={imageRef3}
              href='https://alutrade.md/'
            ></a>
            <h4 className='text-left mb-2'>ALUTRADE</h4>
            <div className="flex">
              <p className='ml-0'>#web design</p> <p className='ml-1 sm:ml-2'>#ui/ux</p> <p className='ml-1 sm:ml-2'>#branding</p>
            </div>
          </div>
        </a>

        <div className="row-start-6 col-start-1 col-span-4 sm:col-start-9 sm:col-span-4 sm:row-start-5 sm:row-span-1 flex justify-center sm:justify-start sm:mt-[4.5rem] mb-6 sm:mb-0">
          <div className="text-left" ref={refWork004}>
            <a className="image_animation w-[91.7vw] flex-col sm:flex-row sm:w-[27.24vw] h-[16.125rem] sm:h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center bg-size-100 sm:bg-size-145"
              href='https://dictionar-urban.vercel.app/'
              style={{
                backgroundImage: `url(${work004})`,
                backgroundPositionX: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
              }}
              ref={imageRef4}
            ></a>
            <h4 className='text-left mb-2'>PLAYGROUND - DICȚIONAR URBAN</h4>
            <div className="flex">
              <p className='ml-0'>#web design</p> <p className='ml-1 sm:ml-2'>#ui/ux</p> <p className='ml-1 sm:ml-2'>#branding</p>
            </div>
          </div>
        </div>



        <div className="row-start-7 col-start-1 col-span-4 sm:row-start-6  sm:row-span-3 sm:col-start-1 sm:col-span-8 mb-[1rem] sm:mb-[6rem] sm:mt-[3.5rem] mt-0" ref={refWork005}>
          <a
          href='https://portfolio-omega-eight-26.vercel.app/'
            className="image_animation h-[16.125rem] sm:w-[55.78vw] sm:h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${work005})`,
              backgroundSize: '130%',
              backgroundPositionX: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            ref={imageRef5}
          ></a>
          <h4 className='w-auto text-left mb-[.5rem] font-medium'>Playground - 3D models</h4>
          <div className="tag w-[15.75rem] sm:w-[55.78vw] flex justify-start font-medium flex-wrap">
            <p className='ml-0'>#web design</p> <p className='ml-1 sm:ml-2'>#ui/ux</p> <p className='ml-1 sm:ml-2'>#3d motion</p> <p className='ml-1 sm:ml-2'>#branding</p> <p className='sm:ml-2'>#creative direction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPr;


