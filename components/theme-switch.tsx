"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import toast from "react-hot-toast";
import {MdDarkMode} from 'react-icons/md'



export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme(); // First, toggle the theme
    if (theme !== "dark") {
      notify();     // Show the notification only if dark mode is enabled
    }
  };

  const notify = () => {
    toast("Dark Mode Enabled", { 
      icon: <MdDarkMode />,
      style:{
        background:"#333",
        color:"#fff"
      }
    });
  };


  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleThemeToggle}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
