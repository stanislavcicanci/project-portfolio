import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { work001, work002, work003 } from '../index';
import { GoPlus } from "react-icons/go";

const Easing = (x) => {
  let clampX = Math.max(0, Math.min(x, 1))
  return Math.sin((clampX * Math.PI) / 2)
}

const HomeContent = () => {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const headings = document.querySelectorAll('h2');
    headings.forEach((heading) => {
      heading.innerHTML = heading.textContent
        .split('')
        .map((letter) => {
          return `<span>${letter}</span>`
        })
        .join('')

      const spans = heading.querySelectorAll('span')

      document.addEventListener('mousemove', (event) => {

        const mouseX = event.clientX
        const mouseY = event.clientY

        spans.forEach((span) => {
          const bounds = span.getBoundingClientRect()
          const spanX = bounds.left + bounds.width / 2
          const spanY = bounds.top + bounds.height / 2

          const diffX = mouseX - spanX
          const diffY = mouseY - spanY

          const distance = Math.sqrt(diffX * diffX + diffY * diffY)

          const normalizedDistance = distance / 300

          let weight = 800 - 400 * Easing(normalizedDistance)
          weight = Math.max(400, Math.min(weight, 600))

          span.style.fontVariationSettings = `'wght' ${weight}`
        })
      })
    });
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        // setImageInView(entry.isIntersecting); // 
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(imageRef.current);

    window.addEventListener('scroll', handleScroll);


    const currentImageRef = imageRef.current;
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.unobserve(currentImageRef);
    };
  }, []);

  return (
    <div>
      <div className='grid grid-cols-12 grid-rows-auto-fill gap-6 mx-[7vw] mt-12 mb-36'>
        <motion.h2
          className='text-[5.66vw] flex uppercase col-start-1 row-start-1 col-span-4'
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
        <motion.h2
          className='text-[5.66vw] flex uppercase col-start-1 row-start-2 h-14 col-span-8'
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
        <div className="row-start-1 row-span-3 col-start-5 col-span-8 mb-[6rem]">
          <div
            className="iamgine_aniamtie w-[55.78vw] h-[40vw] mb-4 bg-cover bg-center flex justify-center items-center"
            style={{
              backgroundImage: `url(${work001})`,
              backgroundPositionY: `calc(35% - ${scrollY * 0.06}px)`,
              backgroundSize: '120%', 
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
              backgroundPositionY: `calc(50% - ${scrollY * 0.05}px)`, 
              backgroundSize: '100%',
            }}
            >

            </div>
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
                backgroundPositionY: `calc(50% - ${scrollY * 0.05}px)`, 
                backgroundSize: '100%',
              }}
            >

            </div>
            <h4 className='text-left mb-2'>ALUTRADE</h4>

            <div className="flex">
              <p className='ml-0'>#web design</p> <p>#ui/ux</p> <p>#branding</p>
            </div>
          </div>
        </div>
        <div className="row-start-4 col-start-10 col-span-3 flex items-end justify-end">
          <div className="flex justify-center align-center items-center">
            <GoPlus className=' size-[43px] font-bold mr-3 ' />
            <h3>MORE WORK</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeContent;
