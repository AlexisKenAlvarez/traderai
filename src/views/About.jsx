import React, { useEffect, useRef } from 'react'
import { motion, useSpring, useTransform, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const imgList = ['1', '2', '3', '4']
    const [ref, view] = useInView({ threshold: 0.5 })
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

    return (

        <section className='min-h-screen h-auto w-full bg-hero relative z-[12]' ref={containerRef}>
            <motion.div initial={{opacity: 0, rotate: 6}} animate={ view ? {opacity: 100} : {}} className=" gap-x-5 md:flex hidden" ref={ref} style={{x, y}}>
                {imgList.map((items, i) => {
                    return (
                        <img src={`${items}.webp`} alt={items} className="min-w-[30rem] shadow-about border-4 border-black" key={i} />
                    )
                })}
            </motion.div>
        </section>


    )
}

export default About