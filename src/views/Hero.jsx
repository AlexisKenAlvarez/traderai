import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import About from './About'

const Hero = () => {

    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x0D031E,

            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className='overflow-x-hidden'>

            <section className='w-full h-screen bg-hero relative text-white overflow-x-hidden z-10 overflow-hidden' ref={myRef}>
                <motion.img initial={{ y: 200, opacity: 0 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 1 }} alt="HeroRobot" src="/hero.webp" className='absolute bottom-0 lg:right-0 h-full z-10 right-[-15rem] min-w-[45rem] sm:block hidden'></motion.img>

                <div className='w-full max-w-[1700px] mx-auto flex items-center h-full lg:px-20 z-10 relative text-center lg:text-left justify-center lg:justify-start'>
                    <div className=''>
                        <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1 }} className='font-saira lg:text-8xl font-black text-4xl 2xl:text-9xl flex items-center gap-x-2 mx-auto w-fit lg:mx-0'>
                            <p className="flex gap-x-[2px]">
                                TRADER A<span className='lg:hidden block'>I</span>
                            </p>
                            <motion.div initial={{}} animate={{ scaleY: [1, 1.5, 1.2, 1.8, 0.8, 1] }} transition={{ duration: 13, repeat: Infinity, transformOrigin: "bottom" }} className="h-[4.3rem] w-7 bg-[#8cdb61] rounded-lg relative items-center origin-bottom lg:flex hidden 2xl:mt-5">
                                <div className="bg-[#8cdb61] h-1/2 w-[5px] rounded-lg mx-auto -translate-y-full"></div>
                            </motion.div>
                        </motion.div>

                        <motion.p initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.1 }} className='mt-2 2xl:max-w-[50rem] xl:max-w-[40rem] lg:max-w-[30rem] max-w-[40rem] font-poppins lg:text-md sm:text-sm text-xs px-10 lg:px-0 2xl:text-lg'>Trader AI project is designed to provide an easy-to-use tool for stock traders. By using artificial intelligence technology, it automates trading decisions using data analysis and predictive analytics. The AI technology continually assesses the available data and makes recommendations on when to enter or exit a trade, in order to maximize profits. It takes into account a number of factors such as risk levels, market trends and news reports, in order to make the best trading decisions. This allows cryptocurrency traders to make faster and more accurate decisions with less effort. As a result, it helps them achieve better returns on their investments.</motion.p>

                        <div className='flex gap-x-3 flex-col lg:flex-row items-center justify-center lg:justify-start gap-y-5 mt-5'>

                            <motion.button initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='bg-white px-12 py-3 w-fit h-fit rounded-lg mt-10 cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium text-black font-poppins'>
                                <a href="" target="_blank">Buy Token</a>
                            </motion.button>

                            <motion.button initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='border-[1px] border-white px-12 py-3 w-fit h-fit rounded-lg lg:mt-10 hover:bg-white hover:text-black cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium'>
                                <p>Chart</p>
                            </motion.button>
                        </div>

                    </div>
                </div>


            </section>

            <About />
        </div>



    )
}

export default Hero