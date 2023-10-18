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

        <div className=''>
            <main className=''>
                {children}
            </main>
        </div>
    )
}
