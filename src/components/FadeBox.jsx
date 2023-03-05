import React from 'react'

const FadeBox = ({ text, logo }) => {
    return (
        <div className="h-[5.3rem] w-[17rem] bg-boxPurple flex items-center justify-center relative">

            <div className="absolute left-0 top-0 h-[5rem] w-[5rem] shadow-fade">
                <div className="h-full w-[0.3rem] absolute left-0 top-0 bg-gradient-to-b from-fade to-hero"></div>
                <div className="h-[0.3rem] w-full absolute left-0 top-0 bg-gradient-to-r from-fade to-hero"></div>
            </div>

            <div className="absolute bottom-0 right-0 h-[5rem] w-[5rem] rotate-180 shadow-fade">
                <div className="h-full w-[0.3rem] absolute left-0 top-0 bg-gradient-to-b from-fade to-hero"></div>
                <div className="h-[0.3rem] w-full absolute left-0 top-0 bg-gradient-to-r from-fade to-hero"></div>
            </div>

            <div className="flex items-center gap-x-3">
                {logo}
                <p className="uppercase font-poppins font-semibold text-2xl">{text}</p>

            </div>
        </div>
    )
}

export default FadeBox