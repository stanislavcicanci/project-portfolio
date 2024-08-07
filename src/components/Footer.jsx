import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Easing = (x) => {
    let clampX = Math.max(0, Math.min(x, 1));
    return Math.sin((clampX * Math.PI) / 2);
};

const Footer = () => {
    const [allowHover, setAllowHover] = useState(false);
    const [, setShowOverflow] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        // Detect touch device
        const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setAllowHover(!touchDevice);
        setIsTouchDevice(touchDevice);

        const handleScroll = () => {
            if (allowHover) {
                const position = window.scrollY;
                setScrollPosition(position);
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
        if (!allowHover) return; // Prevent animation if hover is not allowed

        const headings = document.querySelectorAll('h1');

        headings.forEach((heading) => {
            heading.innerHTML = heading.textContent
                .split('')
                .map((letter) => `<span>${letter}</span>`)
                .join('');

            const spans = heading.querySelectorAll('span');

            spans.forEach((span) => {
                const bounds = span.getBoundingClientRect();
                const spanX = bounds.left + bounds.width / 2;
                const spanY = bounds.top + bounds.height / 2;

                const diffX = Math.abs(mousePosition.x - spanX);
                const diffY = Math.abs(mousePosition.y - spanY);
                const distance = Math.sqrt(diffX * diffX + diffY * diffY);
                const normalizedDistance = distance / 500;

                let weight = 800 - 400 * Easing(normalizedDistance);
                weight = Math.max(400, Math.min(weight, 600));

                // Set font weight to 400 if touch device
                if (isTouchDevice) {
                    weight = 400;
                }

                span.style.fontVariationSettings = `'wght' ${weight}`;
            });
        });
    }, [scrollPosition, mousePosition, allowHover, isTouchDevice]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAllowHover(true);
            setTimeout(() => {
                setShowOverflow(true);
            }, 0);
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    const [isVisible, setIsVisible] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const sectionRef1 = useRef(null);

    useEffect(() => {
        if (hasBeenVisible) return; 
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setHasBeenVisible(true);
                }
            });
        }, options);

        const currentRef1 = sectionRef1.current;

        if (currentRef1) {
            observer.observe(currentRef1);
        }

        return () => {
            if (currentRef1) {
                observer.unobserve(currentRef1);
            }
        };
    }, [sectionRef1, hasBeenVisible]);

    useEffect(() => {
        if (!isVisible || isOverflowing || hasBeenVisible) return;
        const timer = setTimeout(() => {
            setIsOverflowing(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [isVisible, isOverflowing, hasBeenVisible]);

    // Ceas
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = (date) => {
        return date.toLocaleTimeString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false });
    };

return (
    <div ref={sectionRef1} className='bg-white' id='footer'>
        <div className="grid grid-cols-4 mx-[1rem] sm:grid-cols-12 sm:grid-rows-2 sm:gap-6 sm:mx-[7vw]">
            <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'} col-start-1 col-span-4 mt-[4rem] h-[3.75rem] sm:min-h-0 sm:h-auto sm:col-start-2 sm:col-span-7 sm:mt-[6rem] mb-4 sm:mb-0`}>
                <motion.div
                    initial={{ y: 100, opacity: 0 }} 
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{
                        ease: 'easeInOut',
                        duration: isVisible ? 0.5 : 0.01,
                    }}
                >
                    <h1 className='text-[4rem] sm:text-[10.42vw] text-neutral-900 leading-[110%] flex uppercase'>CĂTĂLIN</h1>
                </motion.div>
            </div>
            <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'} col-start-1 col-span-4 h-[3.75rem] sm:min-h-0 sm:h-auto row-start-2 mb-[3rem] sm:col-start-2 sm:col-span-8 sm:row-start-2 sm:mb-[6rem]`}>
                <motion.div
                    initial={{ y: 100, opacity: 0 }} 
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.5,
                        delay: isVisible ? 0.1 : 0.01
                    }}
                >
                    <h1 className='text-[4rem] sm:text-[10.42vw] text-neutral-900 flex uppercase'>ȚURCANU.</h1>
                </motion.div>
            </div>
            <div className="cols-start-1 col-span-3 items-start sm:items-end row-start-3 sm:col-start-9 sm:col-span-3 sm:row-start-1 text-neutral-900 sm:mt-[6rem] flex flex-col gap-y-[1.5rem]">
                <div className="text-left">
                    <h4>Got a project in mind?</h4>
                    <h4 className='text-left sm:text-right'>Let’s make it reality</h4>
                </div>
                <h4>turkanu@studiomodvis.com</h4>
                <h4 className='mb-[3rem] sm:mb-0'>Groningen, NL - {formattedTime(time)}</h4>
            </div>
        </div>
        <div className="grid gap-y-[0.5rem] px-[1rem] grid-cols-4 sm:flex justify-around pb-[3rem] sm:pb-[2.5rem] leading-[18px] text-lg font-medium">
            <p className='text-neutral-900 col-start-1'><a href="https://www.linkedin.com/in/turkanu">LINKEDIN</a></p>
            <p className='text-neutral-900 row-start-2'><a href="https://www.behance.net/turkanu">BEHANCE</a></p>
            <p className='text-neutral-900 row-start-3'><a href="https://www.instagram.com/_turkanu">INSTAGRAM</a></p>
            <p className='text-neutral-900 col-start-4 text-right sm:text-left'><a href="https://www.facebook.com/turkanucatalin">FACEBOOK</a></p>
            <p className='text-neutral-900 col-start-4 text-right sm:text-left'><a href="https://t.me/turkanu_c">TELEGRAM</a></p>
        </div>
    </div>
);

}

export default Footer;
