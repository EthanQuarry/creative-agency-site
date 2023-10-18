"use client"

import Link from "next/link";
import { useState } from "react";


export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>

            <nav className={`left-0 h-screen 3xl:w-1/5 2xl:w-1/5 xl:1/5 mt-10 overflow-hidden  md:hidden`}>
                <div className='ml-10'>
                    <Link className=" text-neutral-500 text-4xl font-normal font-montserrat-alternates" href={'/'}>Vytenis Mališauskas</Link>

                    <div className='mt-24 flex flex-col space-y-8'>
                        <Link className=" text-neutral-500 text-2xl font-normal font-montserrat-alternates" href={'/about'}>about</Link>
                        <Link className=" text-neutral-500 text-2xl font-normal font-montserrat-alternates" href={'/gallery'}>gallery</Link>
                        <Link className=" text-neutral-500 text-2xl font-normal font-montserrat-alternates" href={'/contact'}>contact</Link>
                    </div>

                    <div className='mt-32 flex flex-col space-y-8'>

                    </div>

                    <div className='mt-52 flex flex-col space-y-2'>
                        <div className=" text-neutral-500 text-sm font-normal font-montserrat-alternates">
                            vmalisauskas@gmail.com
                        </div>
                        <div className=" text-neutral-500 text-sm font-normal font-montserrat-alternates">
                            +353 851123806
                        </div>
                    </div>

                </div>


                <div className="absolute top-0 2xl:left-1/6 xl:left-1/5 w-0.5 min-h-screen bg-black"></div>
            </nav>

            {/** 
             Mobile Menu
             */}
       <div className="flex flex-row space-x-5">
            
       <button onClick={handleClick}
                className="flex flex-col justify-center items-center ">
                <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isMenuOpen ?
                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
                </span>
                <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ?
                        'opacity-0' : 'opacity-100'}  `} >
            </span>
            <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isMenuOpen ?
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`} >
        </span>    

  </button >

        <nav className={`h-screen w-screen flex justify-center ${isMenuOpen ? '' : 'hidden'}`}
        >
            <div className=''>
                <Link className=" text-neutral-500 text-4xl font-normal font-montserrat-alternates" href={'/'}>Vytenis Mališauskas</Link>

                <div className=''>
                    <Link className=" text-neutral-500 text-2xl font-normal font-montserrat-alternates" href={'/about'}>about</Link>
                    <Link className=" text-neutral-500 text-2xl font-normal font-montserrat-alternates" href={'/gallery'}>gallery</Link>
                    <Link className=" text-neutral-500 text-2xl font-normal font-montserrat-alternates" href={'/contact'}>contact</Link>
                </div>

                <div className=''>
                    <Link className=" text-neutral-500 text-2xl font-normal font-montserrat-alternates" href={'https://www.instagram.com/carrigphotos/'} target='_blank'>
                        
                    </Link>
                    <Link className=" text-neutral-500 text-2xl font-normal font-montserrat-alternates" href={'https://www.facebook.com/VytenisPhotography.ie/'} target='_blank'>
                        
                    </Link>
                </div>

                <div className=''>
                    <div className=" text-neutral-500 text-sm font-normal font-montserrat-alternates">
                        vmalisauskas@gmail.com
                    </div>
                    <div className=" text-neutral-500 text-sm font-normal font-montserrat-alternates">
                        +353 851123806
                    </div>
                </div>

            </div>


            <div className="absolute top-0  w-0.5 min-h-screen bg-black"></div>
        </nav>
       </div>
        </div >
    )
}
