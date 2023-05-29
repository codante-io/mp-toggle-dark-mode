'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

export function Toggle() {
  const [play] = useSound('/toggle.wav');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';
  
  const handleChecked = () => {
    play();
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <label
        htmlFor="toggle"
        className='relative flex items-center justify-center w-20 h-10 bg-gray-400 rounded-full cursor-pointer dark:bg-gray-700'>
        <input
          type="checkbox"
          id="toggle"
          className='hidden peer'
          onChange={handleChecked}
          checked={isDarkMode}
        />
        <div className='absolute left-0 flex items-center justify-center w-10 h-10 transition-all duration-200 ease-out bg-gray-300 rounded-full peer-checked:left-10 peer-checked:rotate-[360deg]'>
          <Image
            width={24}
            height={24}
            alt={isDarkMode ? 'moon' : 'sun'}
            src={isDarkMode ? '/moon.svg' : '/sun.svg'}
          />
        </div>
      </label>
    </>
  );
}