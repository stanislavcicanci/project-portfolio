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

useEffect(() => {

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

// useEffect(() => {
//     const headings = document.querySelectorAll('h1');

//     headings.forEach((heading) => {
//         heading.innerHTML = heading.textContent
//         .split('')
//         .map((letter) => {
//         return `<span>${letter}</span>`;
//         })
//         .join('');

//         const spans = heading.querySelectorAll('span');

//         spans.forEach((span) => {
//         const bounds = span.getBoundingClientRect();
//         const spanX = bounds.left + bounds.width / 2;
//         const spanY = bounds.top + bounds.height / 2;

//         const diffX = Math.abs(mousePosition.x - spanX);
//         const diffY = Math.abs(mousePosition.y - spanY);
//         const distance = Math.sqrt(diffX * diffX + diffY * diffY);
//         const normalizedDistance = distance / 500;

//         let weight = 800 - 400 * Easing(normalizedDistance);
//         weight = Math.max(400, Math.min(weight, 600));

//         span.style.fontVariationSettings = `'wght' ${weight}`;
//     });
//     });
// }, [scrollPosition, mousePosition]);

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
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
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

        const currentRef1 = sectionRef1.current;

        if (currentRef1) {
            observer.observe(currentRef1);
        }

        return () => {
            if (currentRef1) {
                observer.unobserve(currentRef1);
            }
        };
    }, [sectionRef1]);

    useEffect(() => {
        if (isVisible && isOverflowing) {
            const timer = setTimeout(() => {
                setIsOverflowing(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, isOverflowing]);

    //Ceas
    const [time, setTime] = useState(new Date());

    useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
    }, []);

    const formattedTime = (date) => {
    return date.toLocaleTimeString('en-US', { timeZone: 'Europe/Amsterdam', hour12: false });
      // Здесь 'Europe/Amsterdam' - это временная зона для Гронингена, Нидерланды.
      // Вы можете заменить 'Europe/Amsterdam' на нужный вам часовой пояс.
    };
    return (
        <div ref={sectionRef1} className='bg-white'>
            <div className="grid grid-cols-12 grid-rows-2 gap-6 mx-[7vw]">
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'} col-start-2 col-span-7 mt-[6rem]`}>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} 
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{
                            ease: 'easeInOut',
                            duration: isVisible ? 0.5 : 0.01,
                        }}
                    >
                        <h1 className='text-[10.42vw] text-neutral-900 leading-[110%] flex uppercase'>CĂTĂLIN</h1>
                    </motion.div>
                </div>
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'} col-start-2 col-span-8 row-start-2 mb-[6rem]`}>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} 
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.5,
                            delay: isVisible ? 0.1  : 0.01
                        }}
                    >
                        <h1 className='text-[10.42vw] text-neutral-900 flex uppercase'>ȚURCANU.</h1>
                    </motion.div>
                </div>
                <div className="col-start-9 col-span-3 row-start-1 text-neutral-900 mt-[6rem] flex flex-col gap-y-[1.5rem]">
                    <div className="">
                        <h4>
                        Got a project in mind?
                        </h4>
                        <h4>
                        Let’s make it reality
                        </h4>
                    </div>
                    <h4>turkanu@studiomodvis.com</h4>
                    <h4>Groningen, NL - {formattedTime(time)}</h4>
                </div>
            </div>
            <div className="flex justify-around mb-[2.5rem] leading-[18px] text-lg font-medium">
                <p className='text-neutral-900 '> LINKEDIN</p>
                <p className='text-neutral-900 '> BEHANCE</p>
                <p className='text-neutral-900 '> INSTAGRAM</p>
                <p className='text-neutral-900 '> FACEBOOK</p>
                <p className='text-neutral-900 '> TELEGRAM</p>
            </div>
        </div>
    )
}

export default Footer;