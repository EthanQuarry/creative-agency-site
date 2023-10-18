import React from 'react';

export default function SlideButton({ children}: { children: React.ReactNode }) {
    return (
        <button className=" group relative cursor-pointer  text-2xl uppercase leading-6 text-black">
        <span className="inline-block p-1 transition duration-500  ease-out group-hover:rotate-45">
          {children}
        </span>
        <span className="absolute left-0 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:-rotate-45">
          {children}
        </span>
      </button>
    )
}