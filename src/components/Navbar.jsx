import React, { useState, useEffect } from 'react';


const Navbar = () => {
    // scroll opacity
    const [hrOpacity, setHrOpacity] = useState(0.5);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const newOpacity = Math.max(0, Math.min(1, 0.5 - scrollTop / 100));
        setHrOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

return (
    <div>
        <nav className='fixed mix-blend-difference top-0 left-0 right-0 h-[90px] text-white z-50'>
        <div className="flex justify-between leading-[18px] text-lg font-medium pt-[2.5rem] pr-[8rem] pl-[8rem] flex-wrap">
        <div className="logo">
                CĂTĂLIN ȚURKANU.
            </div>
            <ul className="menu flex list-none gap-[6rem]">
                <li>PROJECTS</li>
                <li>ABOUT</li>
            </ul>
            <div className="contact">
            CONTACTS
            </div>
        </div>
        </nav>
        <hr
        className="absolute w-[98.5vw] h-[1px] text-zinc-100 top-[90px] opacity-50 z-[999]"
        style={{ opacity: hrOpacity }}
        transition={{ duration: 0.01 }}
        />

    </div>
)
}

export default Navbar
