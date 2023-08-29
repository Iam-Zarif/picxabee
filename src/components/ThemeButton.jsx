"use client"
import { useTheme } from 'next-themes'
import React from 'react'

const ThemeButton = () => {
    const {theme, setTheme} = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`
        border
        ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
        rounded-full
        py-2 px-4
        hover:bg-opacity-80
        transition-all
      `}
    >
      {theme === "dark" ? "Light Theme" : "Dark Theme"}
    </button>
  )
}

export default ThemeButton