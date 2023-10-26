"use client"


import rectangles from '../../../../public/3-rectangles.png'
import arrow from '../../../../public/arrow.png'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import SlideButtonArrow from '@/app/components/SlideButtonArrow';
import Preloader from '@/app/components/Preloader';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';


gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const titles = document.querySelectorAll('.h_title');
        const tl = gsap.timeline({ defaults: { duration: 1 } });

        titles.forEach((title, index) => {
            const el = title.querySelectorAll('span span');
            const delay = index * 0.08;

            tl.to(
                el,
                {
                    y: 0,
                    duration: 1.5,
                    ease: 'cubic-text',
                },
                delay
            );
        });

        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
      
                setTimeout( () => {
                  setIsLoading(false);
                  document.body.style.cursor = 'default'
                  window.scrollTo(0,0);
                }, 3000)
            }
          )()
    }, []);

    return (

       
        <div className="w-full h-screen relative bg-[#eeebe6]">
             <AnimatePresence mode="wait">
             {isLoading && <Preloader />}
             </AnimatePresence>
            <div className="w-full h-0 border border-[#5A5A5A]"></div>

            <div className='h-full flex flex-row space-x-9 md:mt-20 xs:mt-10'>
                <div className='block md:w-2/3 lg:w-1/2  xs:w-full md:space-y-32 xs:space-y-8 md:px-20 xs:px-8'>
                    <div className="w-full md:w-2/3 lg:w-2/3 left-0 top-0  text-zinc-600 md:text-6xl xs:text-5xl font-normal font-montserrat-alternates">


                        <div className="h_container font_apoc flex flex-col items-center  px-2 pb-[20vw] xs:pb-3  lg:pb-[4vw]">
                            <div className="h_title  relative w-full uppercase leading-[90%]  ">
                                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                    <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                                        The <span className='font-medium'>No.1</span>
                                    </span>
                                </span>

                                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                    <span className="font-medium inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                    &nbsp; creative&nbsp;
                                    </span>
                                </span>
                                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                    <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                    &nbsp; &nbsp; design&nbsp;
                                    </span>
                                </span>
                                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                    <span className="font-medium inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                        &nbsp;&nbsp;agency.
                                    </span>
                                </span>
                                <br></br>
                                <span className="-mb-1.5 mt-6 inline-block overflow-hidden align-bottom">
                                    <span className="font-medium inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                    &nbsp; for 
                                    </span>
                                </span>

                            </div>
                            <div className="h_title relative  w-full text-center  uppercase leading-[90%]  ">
                            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                    <span className="font-medium inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                                        crafting
                                    </span>
                                </span>
                                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                    <span className=" inline-block font-medium translate-y-full pb-1.5 pt-6 will-change-transform">
                                        reputations
                                    </span>
                                </span>
                               
                            </div>
                        </div>

                    </div>
                    <div className=" uppercase leading-[90%] w-full md:w-3/4 lg:w-2/3 left-0 md:left-1/4 lg:left-1/3 top-30  text-zinc-600 text-2xl md:text-3xl lg:text-4xl xs:text-md font-normal font-montserrat-alternates">
                        <div
                            className=" overflow-hidden rounded-full border border-black uppercase   lg:leading-10 "
                        >
                            <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
                                <span className=" group-hover:pause animate-loopL">
                                   Welcome&nbsp; Welcome &nbsp;
                                </span>
                                <span className=" group-hover:pause animate-loopL">
                                Welcome&nbsp; Welcome&nbsp; 
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="block mt-30">
                        <Link href="/">
                        <SlideButtonArrow> <Image src={arrow} alt="arrow" /></SlideButtonArrow>
                        </Link>
                    </div>

                    <div className='uppercase font-medium text-zinc-600  lg:text-lg xs:text-lg  font-montserrat-alternates'>
                    All Inquires to: <br />
                    hello@aromadesign.com
                </div>
                </div>

          
            </div>


        </div>


    )
}