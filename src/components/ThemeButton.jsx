"use client"
import { useTheme } from 'next-themes'
import React from 'react'

const ThemeButton = () => {
    const {theme, setTheme} = useTheme();
  return (
    <button onClick={() =>setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "light" : "Dark"}
    </button>
  )
}

export default ThemeButton