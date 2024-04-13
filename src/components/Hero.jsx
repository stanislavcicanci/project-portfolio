import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Easing = (x) => {
  let clampX = Math.max(0, Math.min(x, 1))
  return Math.sin((clampX * Math.PI) / 2)
}

const Hero = () => {

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

      document.addEventListener('mousemove', (event) => {

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

          let weight = 800 - 400 * Easing(normalizedDistance)
          weight = Math.max(400, Math.min(weight, 700))

          span.style.fontVariationSettings = `'wght' ${weight}`
        })
      })
    });
  }, []);

  return (
    <>
      <div className="content h-[886px] bg-[#121212] text-white flex justify-center items-center">
        <div className='grid grid-cols-12 grid-rows-2 gap-6 mx-[7vw]'>
          <div className="col-start-2">
            <motion.h1
              className='text-[10vw] flex uppercase'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
              }}
            >
              Digital
            </motion.h1>
          </div>

          <div className="col-start-9 text-right text-2xl h-[6.3rem] col-span-3 flex items-end flex-col">

            <h4 className=''>
              {Array.from('MOLDOVIAN DESIGNER creating').map((char, index) => (
                <span key={index} className="char w-[1648px]">{char}</span>
              ))}

            </h4>
            <h4 className=''>
              {Array.from('visual products and').map((char, index) => (
                <span key={index} className="char w-[1648px]">{char}</span>
              ))}
            </h4>
            <h4 className=''>
              {Array.from('experiences.').map((char, index) => (
                <span key={index} className="char w-[1648px]">{char}</span>
              ))}
            </h4>
          </div>

          <div className="col-start-2 h-24 justify-self-start self-end">
            <h4 className='col-start-2 text-left w-[24.6875rem] text-2xl'>
              {Array.from('©2024').map((char, index) => (
                <span key={index} className="char w-[1648px]">{char}</span>
              ))}
            </h4>
            <h4 className=' text-left w-[24.6875rem] text-2xl'>
              {Array.from('ROFFESIONAL CAREER -').map((char, index) => (
                <span key={index} className="char w-[1648px]">{char}</span>
              ))}
            </h4>
            <h4 className='col-start-2 text-left w-[24.6875rem] text-2xl'>
              {Array.from('AGING LIKE FINE WINE').map((char, index) => (
                <span key={index} className="char w-[1648px]">{char}</span>
              ))}
            </h4>
          </div>
          <div className="col-start-5 col-span-7 flex justify-end mt-0">
            <motion.h1
              className='text-[10vw] flex uppercase'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.5,
              }}
            >
              Creator
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
