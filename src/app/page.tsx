"use client"
import { useState } from 'react';
import './globals.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import xwing1 from '../../public/x-wing1.png';
import republicCrusader1 from '../../public/republicCrusader.png';
import Image from 'next/image';
import tieFighter1 from '../../public/tieFighter1.png';
import empireCrusader1 from '../../public/empireCrusader1.png';


export default function Home() {

  const [email, setEmail] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  const [password, setPassword] = useState('');
  const storedLightMode = localStorage.getItem('lightmode');
  const storedDarkMode = localStorage.getItem('darkmode');
  const initialLightMode = storedLightMode ? JSON.parse(storedLightMode) : true;
  const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [isLightMode, setIsLightMode] = useState(storedLightMode ? initialLightMode : true);
  const [lightsaber, setLightSaber] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode ? initialDarkMode : false);
  const [audio, setAudio] = useState(new Audio('/audios/power-down.mp3'));
  const [volume] = useState(0.1);

  const handleModeToggle = () => {
    if (!isLightMode) {
      if (lightsaber === 'light-up') {
        setLightSaber('light-shrink');
        audio.volume = volume;
        audio.play();
        setAudio(new Audio('/audios/power-up.mp3'));
      } else {
        audio.volume = volume;
        audio.play();
        setAudio(new Audio('/audios/power-down.mp3'));
        setLightSaber('light-up')
      }
      setIsLightMode(!isLightMode);
      localStorage.setItem('lightmode', JSON.stringify(!isLightMode));
      return;
    }
    if (isLightMode) {
      setLightSaber('light-shrink');
      audio.volume = volume;
      audio.play();
      setAudio(new Audio('/audios/power-up.mp3'));
      setIsLightMode(!isLightMode);
      localStorage.setItem('lightmode', JSON.stringify(!isLightMode));
      return;
    }
  };
  
  const handleAnimationEnd = () => {
    if (lightsaber === 'light-shrink') {
      audio.volume = volume;
      audio.play();
      setAudio(new Audio('/audios/power-down.mp3'));
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('darkmode', JSON.stringify(!isDarkMode));
      setLightSaber('light-up');
    }
  }


  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length < 1) {
      setEmailHelperText('Esse campo não pode estar vazio!');
    }
    if (!emailRegex.test(email)) {
      setEmailHelperText('Esse não é um email válido!');
    }
    if (password.length < 1) {
      setPasswordHelperText('Esse campo não pode estar vazio!');
    }
    if (password.length > 1 && email.length > 1 && emailRegex.test(email)) {
      alert('Parabéns pelo login com sucesso. A página de boas-vindas está em construção!')
    }
    return null;
  }
  

  return (
    <div>
      <header className="absolute w-screen h-10 z-10 items-center flex justify-center border border-t-0 border-r-0 border-l-0 border-yellow-500 bg-black">
      <img
      onClick={handleModeToggle}
      style={{ zIndex: 99 }}
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b63b52f4-e3cd-44ed-abae-c2972100be5c/dcedy9x-28c30129-56f9-459c-990b-adc65a762e5e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2M2I1MmY0LWUzY2QtNDRlZC1hYmFlLWMyOTcyMTAwYmU1Y1wvZGNlZHk5eC0yOGMzMDEyOS01NmY5LTQ1OWMtOTkwYi1hZGM2NWE3NjJlNWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._rUREn58aEMGXcy3jLhQJ82zJiiNJou1G7HDlb7fJuk" alt="DarkMode" 
      className="transform rotate-90 w-10 mr-5 cursor-pointer"
      />
      <div onClick={handleModeToggle} onAnimationEnd={handleAnimationEnd} className={`shadow-offset-up ${isDarkMode ? 'bg-red-500' : 'bg-green-500'} shadow-lg ${isDarkMode ? 'shadow-red-500' : 'shadow-green-500'} h-2 w-52 mr-6 rounded ${lightsaber}`}>

      </div>
      </header>
    <div className="flex flex-row lg:p-20 sm:p-0 lg:justify-start lg:items-center md:items-center sm:items-start h-full w-full bg-black">
      <div className="absolute inset-0 z-0">
      {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className={`absolute w-0.5 h-0.5 transition rounded-full bg-white opacity-${Math.floor(Math.random() * 60) + 40}`}
            style={{ top: `${Math.random() * 95}%`, left: `${Math.random() * 95}%` }}
          ></div>
        ))}
      <TransitionGroup className="planet-container">
      {Array.from({ length: 8}).map((_, index) => (
        <CSSTransition key={index} timeout={500} classNames="planet">
          <div
           key={index}
           className={`planet absolute w-20 h-20 transition bg-gray-400 rounded-full bg-center bg-no-repeat bg-planet${index === 0 ? '1' : index}`}
          style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%`, zIndex: -2 }}>
          </div>
        </CSSTransition>
      ))}
      {Array.from({ length: 5}).map((_, index) => (
        <CSSTransition key={index} timeout={500} classNames="planet">
          <Image
          alt="x-wing"
          src={isLightMode ? xwing1 : tieFighter1}
           key={index}
           className={`planet w-10 absolute`}
          style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80}%`, zIndex: -1 }}>
          </Image>
        </CSSTransition>
      ))}
            {Array.from({ length: 2}).map((_, index) => (
        <CSSTransition key={index} timeout={500} classNames="planet">
          <Image
          alt="x-wing"
          src={isLightMode ? republicCrusader1 : empireCrusader1}
           key={index}
           className={`planet ${isLightMode ? 'w-12.5' : 'w-1/6'} absolute`}
          style={{ top: `${Math.random() * 60}%`, left: `${Math.random() * 60}%`, zIndex: -2 }}>
          </Image>
        </CSSTransition>
      ))}
      </TransitionGroup>
      </div>
      <div style={{ zIndex: 1}} className={`bg-black lg:w-3/6 bg-opacity-70 rounded shadow h-4/6 sm:w-2/3 flex flex-row flex-wrap justify-center items-center`}>
        <div className="flex flex-col w-full h-full justify-start items-start m-5">
          <div className="lg:w-10/12 sm:w-full flex flex-row lg:justify-center   sm:justify-start items-center flex-wrap">
          <h1 className='text-yellow-500 m-0 self-start font-bold text-6xl w-full lg:text-center'>Faça seu login.</h1>
          <span className="text-yellow-500 self-start text-center opacity-70 from-stone-500 italic">{isLightMode ? 'E que a força esteja com você.' : 'E que o lado negro da força te dê poder.'}</span>
          </div>
          <div className="flex flex-col w-10/12 sm:w-full">
            <label className="text-yellow-500 m-1 font-semibold" htmlFor="email">Email</label>
            <input value={email} onChange={(evt) => {
              setEmail(evt.target.value);
              setEmailHelperText('');
            }} className="w-10/12 px-4 m-2 py-2 border border-yellow-500 rounded-full bg-transparent text-yellow-500 focus:outline-none focus:border-yellow-500" type="text" name="" id="email" />
            {emailHelperText ? <span className="text-red-500 m-1 ml-5">{emailHelperText}</span>: null}
            <label className="text-yellow-500 m-1 font-semibold" htmlFor="password">Senha</label>
            <input value={password} onChange={(evt) => {
              setPassword(evt.target.value);
              setPasswordHelperText('');
            }} className="w-10/12 px-4 py-2 m-2 border border-yellow-500 rounded-full bg-transparent text-yellow-500 focus:outline-none focus:border-yellow-500" type="password" name="" id="password" />
            {passwordHelperText ? <span className="text-red-500 m-1 ml-5">{passwordHelperText}</span>: null}
            <a className="text-yellow-500 underline text-xs text-end m-1 w-10/12">Esqueci minha senha</a>
            <button onClick={onSubmit} className="border m-2 border-yellow-500 bg-transparent text-yellow-500 hover:bg-yellow-500 hover:text-black w-10/12 px-4 py-2 text-2xl font-semibold rounded-full transition-colors duration-300" type="button">Entrar</button>
            <a className="text-yellow-500 w-10/12 underline pt-4 text-center">Ainda não tenho minha conta</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
