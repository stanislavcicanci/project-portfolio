import React from 'react'
import { section2ab } from '../index';
import { MdArrowOutward } from "react-icons/md";

const Section2Ab = () => {
return (
    <div className='bg-white '>
    <div className="grid w-[100vw] bg-white sm:w-[100%] sm:pt-[3rem] grid-cols-4 mt-[10vw] gap-x-[1.5rem] sm:mt-0 md:grid-cols-12  sm:gap-x-[1.5rem]  mx-[1rem]  px-[1rem] lg:px-[9.5rem] sm:mb-[9rem] mb-[4rem]">

        <h2 className='w-auto sm:col-start-1 sm:col-span-5 col-start-1 col-span-2'>
        <span className="mobile-only">WHO</span>
        <span className="desktop-only">WHO AM</span>
        </h2>

        <h2 className='w-auto sm:col-start-11 flex items-end justify-end col-start-3 desktop-only text-right'>I</h2>
        <h2 className='w-auto sm:col-start-11 flex items-end justify-end col-start-3 col-span-2 mobile-only text-right'>AM I</h2>
        
        <h3 className='sm:row-start-2 sm:col-span-5 sm:col-start-1 sm:mt-[6rem] mt-[3rem] row-start-3 col-span-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis nunc, ac volutpat lorem scelerisque a. Cras ac nulla non justo ultrices gravida.
        <br /> <br />
        Aenean dignissim felis nunc, ac volutpat lorem scelerisque a. Cras ac nulla non justo ultrices gravida.
        </h3>

        <div
        className="image_animation w-[12.69rem] h-[16.88rem] sm:w-auto sm:h-auto bg-cover bg-center flex justify-center items-center sm:relative sm:col-start-6 sm:col-span-5 sm:row-start-1 sm:row-span-3 col-start-1 col-span-4 ml-auto mr-auto sm:ml-0 sm:mr-0 mt-[1.5rem] sm:mt-0  z-[0]"
        style={{
            backgroundImage: `url(${ section2ab })`,
        }}
        ></div>

        <div className="row-start-4  sm:row-start-3 sm:col-start-1 sm:col-span-2 col-start-1 col-span-2  sm:mt-[13.375rem] flex mt-[3rem]">
        <h3>PROJECTS</h3>
        <MdArrowOutward size="2.0833vw" className="size-6 sm:size-[2.0833vw]" />
        </div>
    </div>
    </div>
)
}

export default Section2Ab
