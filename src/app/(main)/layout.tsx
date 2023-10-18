"use client"

import NavBar from '../components/CustomCursor/NavBar';
import '../globals.css'

import { useState } from 'react';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (

        <div className='flex flex-row'>
            <main className='left-1/5 mx-10 mt-20'>
                {children}
            </main>
        </div>
    )
}
