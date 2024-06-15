import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const Section3Ab = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.70
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, options);

        const currentRef = sectionRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [sectionRef]);

return (
    <div className='bg-[#171717] text-white '>
    <div
    className="grid w-[100vw] bg-[#171717] text-white sm:w-[100%] grid-cols-4 mt-[10vw] gap-x-[1.5rem] sm:mt-0 md:grid-cols-12  sm:gap-x-[1.5rem]  sm:py-[9.5rem]  lg:px-[9.5rem]  ">
        <h3 className='sm:col-start-2 sm:col-span-2 row-start-1 text-white'>
        WORK
        EXPERIENCE
        </h3>

        <div className="sm:col-start-4 sm:col-span-6 sm:text-[5vw] leading-[70%]">
        STUDIO MODVIS
        </div>

        <h4 className='sm:row-start-3 sm:col-start-4 sm:col-span-2 text-white sm:text-left sm:mt-[1.5rem]'>
        JUNE ‘23 - TODAY
        </h4>
        <h4 className='sm:row-start-4 sm:col-start-4 sm:col-span-3 text-white text-left sm:mt-[1.5rem]'>
        WEB DESIGN | 3D MOTION | PM 
        </h4>
        <h4 className='sm:row-start-3 sm:col-start-7 sm:col-span-5 text-white text-left sm:mt-[1.5rem] sm:row-span-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis nunc, ac volutpat lorem scelerisque a. Cras ac nulla non justo ultrices gravida.
        </h4>


            <div className="sm:col-start-4 sm:col-span-6 sm:text-[5vw] leading-[70%] sm:row-start-5 mt-[6rem]">
            IERCONI GRUP
            </div>

            <h4 className='sm:row-start-6 sm:col-start-4 sm:col-span-2 text-white sm:text-left sm:mt-[1.5rem]'>
            JUNE - AUGUST ‘23
            </h4>
            <h4 className='sm:row-start-7 sm:col-start-4 sm:col-span-3 text-white text-left sm:mt-[1.5rem]'>
            JR. INTERIOR DESIGN
            </h4>
            <h4 className='sm:row-start-6 sm:col-start-7 sm:col-span-5 text-white text-left sm:mt-[1.5rem] sm:row-span-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis nunc, ac volutpat lorem scelerisque a. Cras ac nulla non justo ultrices gravida.
            </h4>
    </div>
    <hr  className='text-[#F1F1F1] w-[100vw] h-[1px] opacity-[50%]'/>
    <div className="grid w-[100vw] bg-[#171717] text-white sm:w-[100%] grid-cols-4 mt-[10vw] gap-x-[1.5rem] sm:mt-0 md:grid-cols-12  sm:gap-x-[1.5rem]  sm:py-[9.5rem]  lg:px-[9.5rem]  ">
        <h3 className='sm:col-start-2 sm:col-span-2 row-start-1 text-white'>
        EDUCATION
        & TRAINING
        </h3>

        <h3 className='sm:col-start-4 text-white sm:col-span-3'>
        Bachelor of Deisgn
        <h4 className='text-white text-left sm:mt-[1rem]'>
        2023 - NOW
        </h4>
        </h3>

        <h3 className='sm:col-start-4 text-white sm:col-span-5 sm:mt-[1.5rem]'>
        WEB Application Administration
        <h4 className='text-white text-left sm:mt-[1rem]'>
        2021 - 2023
        </h4>
        </h3>
        
        <h3 className='sm:col-start-4 text-white sm:col-span-4 sm:mt-[1.5rem]'>
        Certified Interior Designer
        <h4 className='text-white text-left sm:mt-[1rem]'>
        2020 - 2021
        </h4>
        </h3>

        <h3 className='sm:col-start-4 text-white sm:col-span-3 sm:mt-[1.5rem]'>
        Art School Graduate
        <h4 className='text-white text-left sm:mt-[1rem]'>
        2015 - 2019
        </h4>
        </h3>

        <h4 className='sm:col-start-9 sm:col-span-3 flex items-top justify-end sm:row-start-1 w-[266px] text-[#F1F1F1] opacity-[50%] sm:ml-auto'>
        *but still appreciate the
        practical work more
        </h4>


        <div className="col-start-1 col-span-2 row-start-3 sm:col-start-2 sm:col-span-2 sm:row-start-6 flex justify-space-between items-start gap-[1rem] sm:mt-[6rem]">
                <h3 className="w-auto text-white">
                TOOLS &
                SOFTWARE
                </h3>
            </div>
            <div 
                ref={sectionRef}
            className="text-white cols-start-1 col-span-4 row-start-4 sm:col-start-4 sm:col-span-6 sm:row-start-6 sm:mt-[6rem]">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
                >
                    <h3 className="text-white">Cinema4D</h3>
                </motion.div>
                <br />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-white">Figma</h3>
                </motion.div>
                <br />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="text-white">Adobe Photoshop</h3>
                </motion.div>
                <br />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-white">Autodesk 3Ds Max</h3>
                </motion.div>
                <br />
            </div>
            <h4 className="text-zinc-100 text-opacity-50 row-start-6 col-span-2 sm:row-start-6 sm:col-start-10 sm:col-span-2 flex ml-auto w-[251px] sm:w-[251px] justify-top items-end mb-auto leading-[110%] mt-[6rem]">
            *always open to study
            many others
            </h4>
    </div>
    </div>
)
}

export default Section3Ab
