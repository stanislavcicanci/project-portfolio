import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Section3home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3
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
        if (isVisible) {
            timer = setTimeout(() => {
                setIsOverflowing(true);
            }, 2000);
        } else {
            setIsOverflowing(false);
        }

        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <div
            ref={sectionRef}
            className={`py-[9.50rem] grid grid-cols-12 grid-rows-auto-fill gap-6 px-[7vw] text-white bg-[#121212] gap-y-[6rem]`}
        >
            <div className="col-start-2 col-span-3 row-start-1 flex justify-space-between items-start gap-[1rem]">
                <h3 className="w-auto text-white">ABOUT</h3>
                <MdArrowOutward size={40} />
            </div>
            <h3 className="text-white col-start-4 col-span-6 row-start-1">
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
                    >
                        adipiscing elit. Aenean dignissim felis nunc,
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5,delay: 0.2  }}
                    >
                        ac volutpat lorem scelerisque a. Cras ac nulla 
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5,delay: 0.3  }}
                    >
                        non justo ultrices gravida. Cras a eros fringilla
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5,delay: 0.4  }}
                    >
                        tellus commodo semper a sed nisl.
                    </motion.div>
                </div>
            </h3>
            <div className="col-start-2 col-span-2 row-start-2 flex justify-space-between items-start gap-[1rem]">
                <h3 className="w-auto text-white">SKILLS & SERVICES</h3>
            </div>
            <div className="text-white col-start-4 col-span-6 row-start-2">
            <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5,delay: 0.5  }}
                    >
                    <h3 className="text-white">Web Design</h3> 
                    </motion.div>
                </div>
                <br />
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5,delay: 0.6  }}
                    >
                    <h3 className="text-white">UI / UX</h3>
                    </motion.div>
                </div>
                <br />
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5,delay: 0.7  }}
                    >
                    <h3 className="text-white">3D Motion / Animation</h3>
                    </motion.div>
                </div>
                <br />
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5,delay: 0.8  }}
                    >
                    <h3 className="text-white">Printed Media</h3>
                    </motion.div>
                </div>
                <br />
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'}`}> 
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }} 
                        transition={{ ease: 'easeInOut', duration: 0.5,delay: 0.9  }}
                    >
                    <h3 className="text-white">Creative Direction</h3>
                    </motion.div>
                </div>
                <br />
            </div>
            <h4 className="text-zinc-100 text-opacity-50 row-start-2 col-start-10 col-span-2 flex  justify-end w-[11.25rem]">
                *and even more to come
            </h4>
        </div>
    );
};

export default Section3home;
