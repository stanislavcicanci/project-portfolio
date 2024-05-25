import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Section3home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
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

    useEffect(() => {
        let timer;
        if (isVisible && !animationCompleted) {
            timer = setTimeout(() => {
                setIsOverflowing(true);
                setAnimationCompleted(true); // Marcați animația ca fiind completă
            }, 2000);
        } else {
            setIsOverflowing(false);
        }

        return () => clearTimeout(timer);
    }, [isVisible, animationCompleted]);
    return (
        <div
            ref={sectionRef}
            className={`py-[4rem] sm:py-[9.50rem] grid grid-cols-4 sm:grid-cols-12 grid-rows-auto-fill gap-4 sm:gap-6 px-[1rem] sm:px-[7vw] text-white bg-[#121212] sm:gap-y-[6rem]`}
        >
            <div className="col-start-1 col-span-2 row-start-1 sm:col-start-2 sm:col-span-3 sm:row-start-1 flex justify-space-between items-start gap-[1rem]">
                <h3 className="w-auto text-white">ABOUT</h3>
                <MdArrowOutward size={40} />
            </div>
            <h3 className="text-white col-start-1 col-span-4 row-start-2 sm:col-start-4 sm:col-span-6 sm:row-start-1">
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0}} 
                        transition={{ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5, delay: isVisible ?.1 : 0.01 }}
                    >
                        adipiscing elit. Aenean dignissim felis nunc,
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5,delay: isVisible ?.2 : 0.01 }}
                    >
                        ac volutpat lorem scelerisque a. Cras ac nulla 
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5,delay: isVisible ?.3 : 0.01  }}
                    >
                        non justo ultrices gravida. Cras a eros fringilla
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5,delay: isVisible ?.4 : 0.01 }}
                    >
                        tellus commodo semper a sed nisl.
                    </motion.div>
                </div>
            </h3>
            <div className="col-start-1 col-span-2 row-start-3 mt-[2rem] sm:mt-0 sm:col-start-2 sm:col-span-2 sm:row-start-2 flex justify-space-between items-start gap-[1rem]">
                <h3 className="w-auto text-white">SKILLS & SERVICES</h3>
            </div>
            <div className="text-white cols-start-1 col-span-4 row-start-4 sm:col-start-4 sm:col-span-6 sm:row-start-2">
            <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5,delay: isVisible ?.5 : 0.01  }}
                    >
                    <h3 className="text-white">Web Design</h3> 
                    </motion.div>
                </div>
                <br />
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5,delay: isVisible ?.6 : 0.01  }}
                    >
                    <h3 className="text-white">UI / UX</h3>
                    </motion.div>
                </div>
                <br />
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5,delay: isVisible ?.7 : 0.01  }}
                    >
                    <h3 className="text-white">3D Motion / Animation</h3>
                    </motion.div>
                </div>
                <br />
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5,delay: isVisible ?.8 : 0.01 }}
                    >
                    <h3 className="text-white">Printed Media</h3>
                    </motion.div>
                </div>
                <br />
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: isVisible ? 0.5 : 0.5, delay: isVisible ?.9 : 0.01  }}
                    >
                    <h3 className="text-white">Creative Direction</h3>
                    </motion.div>
                </div>
                <br />
            </div>
            <h4 className="text-zinc-100 text-opacity-50 row-start-3 sm:row-start-2 sm:col-start-10 sm:col-span-2 flex ml-auto w-[11.25rem]">
                *and even more to come
            </h4>
        </div>
    );
};

export default Section3home;
