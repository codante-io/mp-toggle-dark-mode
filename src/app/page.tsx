'use client';
import { Toggle } from './toggle';
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className='flex items-center justify-center w-screen h-screen transition-all duration-500 ease-out bg-white dark:bg-black'>
        <Toggle />
      </main>
    </ThemeProvider>
  );
}
