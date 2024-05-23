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
        <div className="flex justify-between leading-[18px] pr-[0.5rem] text-lg font-medium pl-[1rem] pt-[1.5rem] flex-wrap md:pl-[8rem] md:pt-[2.5rem] md:pr-[8rem]">
        <div className="logo">
                CĂTĂLIN ȚURKANU.
            </div>
            <ul className="menu hidden list-none gap-[6rem] md:flex">
                <li>PROJECTS</li>
                <li>ABOUT</li>
            </ul>
            <div className="contact hidden md:block">
            CONTACTS
            </div>
            <div className="block md:hidden">
                        <div className="burgers">
                            <label className="burger burger4" htmlFor="burger4">
                                <input className="hiddenn cursor-pointer" id="burger4" type="checkbox"/>
                                <span></span>
                            </label>
                        </div>
            </div>
        </div>
        </nav>
        <hr
        className="absolute w-[100%] h-[1px] text-zinc-100 top-[4rem] opacity-50 z-[999] md:top-[90px]"
        style={{ opacity: hrOpacity }}
        transition={{ duration: 0.01 }}
        />

    </div>
)
}

export default Navbar
