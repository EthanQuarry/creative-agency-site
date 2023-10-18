" use client"

import React from 'react'

import rectangles from '../../../../public/3-rectangles.png'
import arrow from '../../../../public/arrow.png'
import Image from 'next/image'
import SlideButton from '@/app/components/SlideButton'

export default async function Home() {

    return (
        <div className="w-full h-screen relative bg-[#eeebe6]">

            <div className="w-full h-0 border border-[#5A5A5A]"></div>

            <div className='h-full flex flex-row space-x-9 mt-20'>
                <div className='block w-1/2 space-y-20 px-20'>
                    <div className="w-full md:w-2/3 lg:w-2/3 left-0 top-0  text-zinc-600 text-8xl font-normal font-montserrat-alternates">EXPERTS IN DIGITAL CREATION</div>
                    <div className="w-full md:w-3/4 lg:w-2/3 left-0 md:left-1/4 lg:left-1/3 top-30  text-zinc-600 text-2xl md:text-3xl lg:text-4xl font-normal font-montserrat-alternates">
                        <SlideButton>LATEST WORK</SlideButton>
                        </div>
                    <div className="block m-auto">
                    <SlideButton>
                        
                    <Image src={arrow} alt="arrow" />
                    </SlideButton>
                    </div>
                </div>

                <div className='block w-1/2 h-full'>
                    <div className="w-full text-zinc-600 text-sm md:text-base lg:text-lg  font-montserrat-alternates">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    <div className='flex flex-row h-full w-full'>
                        <div className="">
                            <Image src={rectangles} alt="rectangles" />
                        </div>
                        <div className="w-1/2 flex text-right place-items-center ">
                            <div className="w-full text-zinc-600 text-sm md:text-base lg:text-lg font-normal font-montserrat-alternates">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                        </div>

                    </div>
                </div>
            </div>


        </div>


    )
}