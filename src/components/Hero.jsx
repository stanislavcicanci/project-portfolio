import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
    const textRef = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null); 
    const textRef4 = useRef(null); 
    const textRef5 = useRef(null); 
    const textRef6 = useRef(null);
    const textRef7 = useRef(null);
    const textRef8 = useRef(null);
    useEffect(() => {
        const MAX_DISTANCE = 300;
        const MAX_FONT_WEIGHT = 800;
        const MIN_FONT_WEIGHT = 400;

        const onMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            if (textRef.current && textRef2.current && textRef3.current && textRef4.current && textRef5.current && textRef6.current && textRef7.current && textRef8.current) {
                const textItems = [
                    ...textRef.current.querySelectorAll('.char'),
                    ...textRef2.current.querySelectorAll('.char'),
                    ...textRef3.current.querySelectorAll('.char'),
                    ...textRef4.current.querySelectorAll('.char'),
                    ...textRef5.current.querySelectorAll('.char'), 
                    ...textRef6.current.querySelectorAll('.char'),
                    ...textRef7.current.querySelectorAll('.char'),
                    ...textRef8.current.querySelectorAll('.char'),
                ];

                textItems.forEach((textItem) => {
                    const itemRect = textItem.getBoundingClientRect();
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

                    gsap.to(textItem, { fontWeight, duration: 0.5, ease: "power3.out" });
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
            <div className="content h-[886px] bg-[#121212] text-white">
                <div className='grid grid-cols-12 grid-rows-2 gap-6 mx-[7vw] pt-[15.375rem] '>
                    <div className="col-start-2">
                        <motion.h1
                            ref={textRef}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                            className='text-[10vw] flex'>
                            {Array.from('DIGITAL').map((char, index) => (
                            <motion.div key={index} className="">
                                <span className="char">
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        {char}
                                    </motion.div>
                                </span>
                            </motion.div>
))}

                        </motion.h1>
                    </div>
                    <div className="col-start-9 text-right w-[24.6875rem] text-2xl h-[6.3rem]">

                    <motion.h4
                        ref={textRef2} 
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        className=''>
                        {Array.from('MOLDOVIAN DESIGNER creating').map((char, index) => (
                            <span key={index} className="char w-[1648px]">{char}</span>
                        ))}
                    </motion.h4>
                    <motion.h4
                        ref={textRef3} 
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        className=''>
                        {Array.from('visual products and').map((char, index) => (
                            <span key={index} className="char w-[1648px]">{char}</span>
                        ))}
                    </motion.h4>
                    <motion.h4
                        ref={textRef4} 
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        className=''>
                        {Array.from('experiences.').map((char, index) => (
                            <span key={index} className="char w-[1648px]">{char}</span>
                        ))}
                    </motion.h4>
                    </div>

                <div className="col-start-2 h-24 justify-self-start self-end">
                <motion.h4
                        ref={textRef5} 
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        className='col-start-2 text-left w-[24.6875rem] text-2xl'>
                        {Array.from('©2024').map((char, index) => (
                            <span key={index} className="char w-[1648px]">{char}</span>
                        ))}
                    </motion.h4>
                    <motion.h4
                        ref={textRef6} 
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        className=' text-left w-[24.6875rem] text-2xl'>
                        {Array.from('ROFFESIONAL CAREER -').map((char, index) => (
                            <span key={index} className="char w-[1648px]">{char}</span>
                        ))}
                    </motion.h4>
                    <motion.h4
                        ref={textRef7} 
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        className='col-start-2 text-left w-[24.6875rem] text-2xl'>
                        {Array.from('AGING LIKE FINE WINE').map((char, index) => (
                            <span key={index} className="char w-[1648px]">{char}</span>
                        ))}
                    </motion.h4>
                </div>
                    <div className="col-start-5 col-end-5 mx-auto mt-0" >
                        <motion.h1
                            ref={textRef8}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                                delay: 1
                            }}
                            className='text-[10vw] flex'>
                            {Array.from('CREATOR').map((char, index) => (
                                <div className="">
                                <span key={index} className="char w-[1648px]">
                                    <motion.div className=""
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        ease: 'easeInOut',
                                        duration: 0.5,
                                         delay: index * 0.1,
                                    }}
                                    >
                                    {char}
                                    </motion.div>
                                    </span>     
                                    
                                </div>
                            ))}
                        </motion.h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero;
