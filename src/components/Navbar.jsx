import React from 'react'

const Navbar = () => {
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
        <hr className='absolute w-[100vw] h-[1px] text-zinc-100 top-[90px] opacity-50 z-[999]' /> 
    </div>
)
}

export default Navbar
