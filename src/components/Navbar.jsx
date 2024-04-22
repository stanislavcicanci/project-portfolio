import React from 'react'

const Navbar = () => {
return (
    <div>
        <nav className='h-[90px] border-b-[1px] border-zinc-100 order-opacity-50 bg-[#121212] text-white z-50'>
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
