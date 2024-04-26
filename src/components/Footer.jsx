import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [allowHoverFooter, setAllowHoverFooter] = useState(false);

    const EasingFooter = (x) => {
        let clampX = Math.max(0, Math.min(x, 1))
        return Math.sin((clampX * Math.PI) / 2)
    }

    useEffect(() => {
        const headings = document.querySelectorAll('h1');

        headings.forEach((heading) => {
            heading.innerHTML = heading.textContent
                .split('')
                .map((letter) => {
                    return `<span>${letter}</span>`
                })
                .join('')

            const spans = heading.querySelectorAll('span')

            const handleMouseMove = (event) => {
                if (allowHoverFooter) {
                    const mouseX = event.clientX
                    const mouseY = event.clientY

                    spans.forEach((span) => {
                        const bounds = span.getBoundingClientRect()
                        const spanX = bounds.left + bounds.width / 2
                        const spanY = bounds.top + bounds.height / 2

                        const diffX = mouseX - spanX
                        const diffY = mouseY - spanY

                        const distance = Math.sqrt(diffX * diffX + diffY * diffY)

                        const normalizedDistance = distance / 500

                        let weight = 800 - 400 * EasingFooter(normalizedDistance)
                        weight = Math.max(400, Math.min(weight, 600))

                        span.style.fontVariationSettings = `'wght' ${weight}`
                    })
                }
            };
            
            document.addEventListener('mousemove', handleMouseMove);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        });
    }, [allowHoverFooter]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAllowHoverFooter(true);
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

    return (
        <div ref={sectionRef1}>
            <div className="grid grid-cols-12 grid-rows-2 gap-6 mx-[7vw]">
                <div className={`over ${isVisible && isOverflowing ? '' : 'overflow-hidden'} col-start-2 col-span-7 mt-[6rem]`}>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} 
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.5,
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
                            delay: 0.5
                        }}
                    >
                        <h1 className='text-[10.42vw] text-neutral-900 flex uppercase'>ȚURCANU</h1>
                    </motion.div>
                </div>
            </div>
            <div className="flex justify-around mb-[2.5rem]">
                <p className='text-neutral-900 '> LINKEDIN</p>
                <p className='text-neutral-900 '> BEHANCE</p>
                <p className='text-neutral-900 '> INSTAGRA</p>
                <p className='text-neutral-900 '> FACEBOOK</p>
                <p className='text-neutral-900 '> TELEGRAM</p>
            </div>
        </div>
    )
}

export default Footer;