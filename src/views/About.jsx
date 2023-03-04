import React, { useEffect, useRef } from 'react'
import { motion, useSpring, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect';

const About = () => {

    const imgList = ['1', '2', '3', '4', '5']
    const [ref, view] = useInView({
        threshold: 0.5,
        rootMargin: "300px 0px 0px 0px",
    })
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    const transformSpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const x = useTransform(transformSpring, [0, 1], [0, -300])
    const y = useTransform(transformSpring, [0, 1], [0, -50])
    const scale = useTransform(transformSpring, [0, 1], [1.25, 1])

    const options = {
        triggerOnce: true,
        threshold: 0.6
    }

    const [titleRef, titleView] = useInView(options)



    return (

        <section className='min-h-screen h-auto w-full bg-hero relative z-[12] flex items-center justify-center pb-[10rem]' ref={containerRef}>

            <div className="w-[1px] bg-black h-[1px] absolute bottom-[20rem] left-20 shadow-radial"></div>
            <div className="w-[1px] bg-black h-[1px] absolute bottom-[29rem] right-20 shadow-radial"></div>

            <motion.div initial={{ opacity: 0, rotate: 6 }} animate={view ? { opacity: 100 } : {}} className=" gap-x-5 md:flex hidden absolute top-0 left-0" ref={ref} style={{ x, y }}>
                {imgList.map((items, i) => {
                    return (

                        <div className="overflow-hidden min-w-[30rem] border-4 border-black" key={i}>
                            <motion.img style={{ scale }} src={`${items}.webp`} alt={items} className="w-full h-full object-cover shadow-about origin-center" />
                        </div>
                    )
                })}
            </motion.div>

            <div className="w-fit mx-auto z-20 relative text-white lg:mt-[33rem] mt-[5rem] px-10 flex gap-x-10 lg:flex-row flex-col">

                <div className="w-full flex items-center justify-center">
                    <motion.div initial={{opacity: 0}} animate={titleView ? {y: [200, 0], opacity: 100} : {}} transition={{ duration: 1.2 }} className="w-[40vh] overflow-hidden">
                        <motion.img initial={{ scale: 1.3 }} animate={titleView ? { scale: 1 } : {}} transition={{ duration: 1.2 }} src="/about.webp" alt="about" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                <div className="w-full lg:text-right text-center mt-12 lg:mt-0" ref={titleRef}>
                    <div className="font-saira font-bold">
                        <h3 className='md:text-3xl text-2xl font-semibold'>
                            <Typewriter
                                options={{
                                    strings: ['ABOUT'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                        <div className="overflow-hidden">
                            <motion.h1 initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7 }} className='md:text-6xl text-4xl'>TRADER AI</motion.h1>
                        </div>
                    </div>


                    <div className="font-poppins mt-5 max-w-[45rem] flex flex-col gap-y-4">
                        <div className="overflow-hidden">
                            <motion.p initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="">Trader AI is a cognitive platform powered by artificial intelligence that allows traders to leverage the most advanced predictive models available. The platform provides access to automated trading strategies, as well as comprehensive risk management tools designed to help traders make smarter decisions and be more profitable.</motion.p>
                        </div>

                        <div className="overflow-hidden">
                            <motion.p initial={{ y: 50, opacity: 0 }} animate={titleView ? { y: 0, opacity: 100 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="">Trader AI introduces AI which trades for you as accurately as possible various cryptocurrencies.</motion.p>
                        </div>
                    </div>
                </div>

            </div>


        </section>


    )
}

export default About