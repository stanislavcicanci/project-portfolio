import React from 'react'

const Navbar = () => {
return (
    <div>
        <nav className='fixed mix-blend-difference top-0 left-0 right-0 h-[90px] border-b-[1px] border-zinc-100 border-opacity-50 text-white z-50'>
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
    </div>
)
}

export default Navbar
