"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import elipse from "./assets/Ellipse 1.png"
import elipse2 from "./assets/Ellipse 2.png"
import Image from "next/image";
import retangle from './assets/Rectangle 2.png'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex relative h-min flex-col-reverse">
        <Image 
          src={retangle}
          alt="rectangle"
          className=""
          width={180}
          height={0} 
        />
        <button
          className={`absolute flex ${
            theme === "dark" ? "left-1/2" : "right-1/2"
          }`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ?   
            <Image 
              src={elipse2}
              alt="elipse"
              className=""
              width={150}
              height={150}
            /> 
            : 
            <Image 
              src={elipse}
              alt="elipse"
              className=""
              width={100}
              height={50}
            />
          }
        </button>
      </div>
    </div>
  );
};