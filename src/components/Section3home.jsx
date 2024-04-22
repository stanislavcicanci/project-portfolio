import React from "react";
import { motion, useAnimation } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const Section3home = () => {

  // About animatia 
const controls = useAnimation();

React.useEffect(() => {
    const verifyScroll = () => {
    const scrollY = window.scrollY;
      controls.start({ rotate: scrollY * 0.1 });
    };

    window.addEventListener("scroll", verifyScroll);
    return () => window.removeEventListener("scroll", verifyScroll);
}, [controls]);

return (
    <div>
<div className="py-[9.50rem] grid grid-cols-12 grid-rows-auto-fill  gap-6 px-[7vw] text-white bg-[#121212] gap-y-[6rem]">
        <div className="col-start-2 col-span-3 row-start-1 flex justify-space-between items-start gap-[1rem]">
        <h3 className="w-auto text-white">ABOUT</h3>
        <motion.div className=""
            animate={controls}
        >
        <MdArrowOutward size={40} />
        </motion.div>
        </div>
        <h3 className="text-white col-start-4 col-span-6 row-start-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            dignissim felis nunc, ac volutpat lorem scelerisque a. Cras ac nulla
            non justo ultrices gravida. Cras a eros fringilla tellus commodo
            semper a sed nisl.  
        </h3>
        <div className="col-start-2 col-span-2 row-start-2 flex justify-space-between items-start gap-[1rem]">
        <h3 className="w-auto text-white">SKILLS &
SERVICES</h3>
        </div>
        <div className="text-white col-start-4 col-span-6 row-start-2">
            <h3 className="text-white">Web Design</h3> <br />
            <h3 className="text-white">UI / UX</h3> <br />
            <h3 className="text-white">3D Motion / Animation</h3> <br />
            <h3 className="text-white">Printed Media</h3> <br />
            <h3 className="text-white">Creative Direction</h3> <br />
        </div>
        <h4 className="text-zinc-100 text-opacity-50 row-start-2 col-start-10 col-span-2 flex  justify-end w-[11.25rem]">
        *and even more
            to come
        </h4>
    </div>
    </div>
);
};

export default Section3home;
