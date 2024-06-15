import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Section3home = () => {
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
        <div
            ref={sectionRef}
            className="py-[4rem] sm:py-[9.50rem] grid grid-cols-4 sm:grid-cols-12  gap-4 sm:gap-6 px-[1rem] sm:px-[7vw] text-white bg-[#121212] sm:gap-y-[6rem]"
        >
            <div className="col-start-1 col-span-2 row-start-1 sm:col-start-2 sm:col-span-3 sm:row-start-1 flex justify-space-between items-start gap-[0.5rem] sm:gap-[1rem]">
                <h3 className="w-auto text-white">ABOUT</h3>
                <MdArrowOutward size="2.0833vw" className="size-6 sm:size-[2.0833vw]" />
            </div>
            <motion.h3
                className="text-white col-start-1 col-span-4 row-start-2 sm:col-start-4 sm:col-span-6 sm:row-start-1 text-justify"
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis nunc, ac volutpat lorem scelerisque a. Cras ac nulla non justo ultrices gravida. Cras a eros fringilla tellus commodo semper a sed nisl.
            </motion.h3>
            <div className="col-start-1 col-span-2 row-start-3 mt-[2rem] sm:mt-0 sm:col-start-2 sm:col-span-2 sm:row-start-2 flex justify-space-between items-start gap-[1rem]">
                <h3 className="w-auto text-white">SKILLS & SERVICES</h3>
            </div>
            <div className="text-white cols-start-1 col-span-4 row-start-4 sm:col-start-4 sm:col-span-6 sm:row-start-2">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
                >
                    <h3 className="text-white">Web Design</h3>
                </motion.div>
                <br />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-white">UI / UX</h3>
                </motion.div>
                <br />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="text-white">3D Motion / Animation</h3>
                </motion.div>
                <br />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-white">Printed Media</h3>
                </motion.div>
                <br />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}
                >
                    <h3 className="text-white">Creative Direction</h3>
                </motion.div>
                <br />
            </div>
            <h4 className="text-zinc-100 text-opacity-50 row-start-3 col-span-2 sm:row-start-2 sm:col-start-10 sm:col-span-2 flex ml-auto w-[7.5rem] md:w-[11.25rem] sm:w-[7.5rem] justify-self-end items-end leading-[110%]">
                *and even more to come
            </h4>
        </div>
    );
};

export default Section3home;
