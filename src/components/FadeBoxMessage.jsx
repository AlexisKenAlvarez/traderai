import React from 'react'

const FadeBoxMessage = ({ text }) => {
    return (
        <div className="h-auto max-w-[50rem] px-8 py-8 bg-boxPurple flex items-center justify-center relative">

            <div className="absolute left-0 top-0 h-[8rem] w-[8rem] shadow-fade">
                <div className="h-full w-[0.3rem] absolute left-0 top-0 bg-gradient-to-b from-fade to-hero"></div>
                <div className="h-[0.3rem] w-full absolute left-0 top-0 bg-gradient-to-r from-fade to-hero"></div>
            </div>

            <div className="absolute bottom-0 right-0 h-[8rem] w-[8rem] rotate-180 shadow-fade">
                <div className="h-full w-[0.3rem] absolute left-0 top-0 bg-gradient-to-b from-fade to-hero"></div>
                <div className="h-[0.3rem] w-full absolute left-0 top-0 bg-gradient-to-r from-fade to-hero"></div>
            </div>

            <p className="font-poppins font-medium text-center">{text}</p>
        </div>
    )
}

export default FadeBoxMessage