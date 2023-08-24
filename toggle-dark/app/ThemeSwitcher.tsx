"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import elipse from "./assets/EllipseDark.png"
import elipse2 from "./assets/EllipseWhite.png"
import Image from "next/image";
import retangle from './assets/RectangleDark.png'
import retangle2 from './assets/RectangleWhite.png'
import moon from './assets/moon.svg'
import sun from './assets/sun.svg'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const playAudio = () => {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/385');
    audio.playbackRate = 5;
    audio.play();
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex relative h-min flex-col-reverse">
      {theme === "light" ?  <Image 
          src={retangle}
          alt="rectangle"
          className=""
          width={180}
          height={0} 
        /> :
        <Image 
        src={retangle2}
        alt="rectangle"
        className=""
        width={180}
        height={0} 
      />
        }
        <button
          className={`absolute flex ${
            theme === "dark" ? "left-1/2" : "right-1/2"
          }`}
          onClick={() => {setTheme(theme === "dark" ? "light" : "dark")
          playAudio();
        }}
        >
          {theme === "light" ?  
          <> 
            <Image 
              src={elipse2}
              alt="elipse"
              className="relative"
              width={150}
              height={150}
            /> 
            <Image 
              src={sun}
              alt="elipse"
              className="absolute top-1 left-2"
              width={70}
              height={50}
            /> 
            </>
            : 
            <> 
            <Image 
              src={elipse}
              alt="elipse"
              className="relative"
              width={150}
              height={150}
            /> 
            <Image 
              src={moon}
              alt="elipse"
              className="absolute top-4 left-3"
              width={60}
              height={50}
            /> 
            </>
          }
        </button>
      </div>
    </div>
  );
};