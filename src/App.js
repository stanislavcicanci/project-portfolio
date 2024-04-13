import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {

  console.log(navigator.userAgent);

  return (
    <>
    <Navbar />
    <Hero />
    </>
  );
}

export default App;



/* <motion.div
      ref={textRef}
      className='textanim text-center text-black font-bold text-3xl text-bold mt-[50vh] text-[10vw]'
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {Array.from('DIGITAL CREATOR').map((char, index) => (
        <span key={index} className="char w-[1648px]">{char}</span>
      ))}
      <br></br>
      {Array.from('RANDOM TEXT THAT WILL HASAVER MEANING LATER').map((char, index) => (
        <span key={index} className="char text-stone-950 text-[42.5px] font-normal tracking-widest ">{char}</span>
      ))}
    </motion.div> */