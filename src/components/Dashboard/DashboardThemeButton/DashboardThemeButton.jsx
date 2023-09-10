"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi2';


const DashboardThemeButton = () => {
    const {theme, setTheme} = useTheme();
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={` 
          border 
          ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
          rounded-full
          py-2 px-4
          h-11
          hover:bg-opacity-80
          transition-all
        `}
      >
        {theme === "dark" ? <><HiOutlineLightBulb size={24} /></> : <><HiLightBulb size={24}/></>}
      </button>
    )
}

export default DashboardThemeButton