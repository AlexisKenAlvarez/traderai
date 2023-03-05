import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsFillMegaphoneFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='gap-y-14 w-full h-auto bg-boxPurple text-white px-20 py-[5rem] flex lg:justify-between lg:flex-row flex-col-reverse justify-center items-center'>
            <div className="w-full">
                <div className="flex items-center gap-x-3 justify-center lg:justify-start">
                    <img src="/logo.webp" alt="Logo" className="w-12" />
                    <h1 className='font-saira text-2xl font-bold'>TRADER AI</h1>
                </div>
                <p className='font-poppins text-sm opacity-60 mt-4 text-center lg:text-left'>© 2023 Trader AI. All Rights Reserved</p>
            </div>

            <div className="w-full flex flex-col items-center lg:mt-0">
                <h1 className="font-saira text-2xl">Stay connected:</h1>
                <div className="flex text-lg gap-x-5 mt-7">
                    <a href="https://twitter.com/TraderAItoken" target="_blank" rel="noopener noreferrer" className="">
                        <button className="h-12 w-12 border-[1px] rounded-full flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.1]">
                            <SiTwitter />
                        </button>
                    </a>
                    <a href="https://t.me/TraderAIofficial" target="_blank" rel="noopener noreferrer" className="">
                        <button className="h-12 w-12 border-[1px] rounded-full flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.1]">
                            <FaTelegramPlane className='mr-[3px]' />
                        </button>
                    </a>

                    <a href="https://t.me/traderaiannouncements" target="_blank" rel="noopener noreferrer" className="">
                        <button className="h-12 w-12 border-[1px] rounded-full flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.1]">
                            <BsFillMegaphoneFill className='mr-[2.5px]' />
                        </button>
                    </a>

                </div>
            </div>

            <div className="w-full lg:text-right font-poppins text-center">
                <h1 className='font-saira text-2xl'>Contact us on:</h1>

                <div className="mt-3">
                    <p className='font-semibold'>Telegram:</p>
                    <p className='font-normal opacity-60'>@gl3dator and @Jim149</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer