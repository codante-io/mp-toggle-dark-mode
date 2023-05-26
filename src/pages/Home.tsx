import { useState } from 'react'
import useSound from 'use-sound'

import lightOnAudio from '../assets/audios/lightOn.mp3'
import lightOffAudio from '../assets/audios/lightOff.mp3'
import bubbleShotAudio from '../assets/audios/bubbleShot.mp3'
import blipAudio from '../assets/audios/blip.mp3'
import chargingAudio from '../assets/audios/charging.mp3'
import chargeUpAudio from '../assets/audios/chargeUp.mp3'
import shutDownAudio from '../assets/audios/shutDown.mp3'

enum Toggle {
  white = 'bg-zinc-100',
  red = 'bg-red-500',
  yellow = 'bg-yellow-500',
  green = 'bg-green-500',
  battery = 'bg-slate-800',
  user = 'bg-cyan-800',
  planet = 'bg-purple-900',
}

type colors = keyof typeof Toggle

export function Home() {
  const [lightOn] = useSound(lightOnAudio)
  const [lightOff] = useSound(lightOffAudio)
  const [bubbleShot] = useSound(bubbleShotAudio)
  const [blip] = useSound(blipAudio)
  const [charging] = useSound(chargingAudio)
  const [shutDown] = useSound(shutDownAudio)
  const [chargeUp] = useSound(chargeUpAudio)

  const [mode, setMode] = useState<colors>(
    () => (localStorage.getItem('theme') as colors) || 'white',
  )

  function handleToggle(color: colors) {
    if (color === mode) {
      setMode('white')
      localStorage.theme = 'white'
    } else {
      setMode(color)
      localStorage.theme = color
    }
  }

  function handleSoundLight() {
    if (mode === 'white') {
      lightOn()
    } else {
      lightOff()
    }
  }

  function handleSoundCharging() {
    if (mode !== 'battery') {
      charging()
    } else {
      shutDown()
    }
  }

  function handleSoundChargeUp() {
    if (mode !== 'planet') {
      chargeUp()
    } else {
      shutDown()
    }
  }

  return (
    <main className={`${Toggle[mode]} transition-all duration-500`}>
      <div
        className={`${Toggle[mode]} transition-all duration-500 h-screen flex justify-center max-w-[1280px] m-auto py-16 px-8 font-body`}
      >
        <div
          className={`${
            mode === 'white' ? 'bg-white' : `bg-slate-900 text-zinc-300`
          } transition-all duration-500 shadow-lg w-9/12 h-min p-8 rounded-md`}
        >
          <h1 className="font-bold text-lg">Escolha seu toggle</h1>

          <div className="mt-10 flex justify-center gap-8 items-center">
            {/* // Toggle 01 */}
            <div
              className={`w-14 rounded-xl h-7 cursor-pointer flex items-center transition-all duration-500 ${
                mode === 'red' ? 'bg-gray-100' : 'bg-gray-700'
              }`}
              onClick={() => {
                handleToggle('red')
                blip()
              }}
            >
              <div
                className={`w-5 h-5 rounded-full transition-all duration-500 ${
                  mode === 'red' ? 'ml-8 bg-gray-700' : 'bg-gray-100 ml-1.5'
                }`}
              ></div>
            </div>

            {/* // Toggle 02 */}
            <div
              className={`relative w-14 rounded-xl h-7 cursor-pointer flex items-center transition-all duration-500 ${
                mode === 'yellow' ? 'bg-gray-100' : 'bg-gray-700'
              }`}
              onClick={() => {
                handleToggle('yellow')
                bubbleShot()
              }}
            >
              <div
                className={`absolute w-5 h-5 rounded-full transition-all duration-500 ease-in-out ${
                  mode === 'yellow'
                    ? 'ml-8 top-1 bg-yellow-400'
                    : 'bg-transparent ml-1.4 shadow-moon top-0'
                }`}
              ></div>
            </div>

            {/* // Toggle 03 */}
            <label className="flex items-center relative w-max cursor-pointer select-none">
              <input
                type="checkbox"
                id="inputToggle03"
                className="checked:bg-green-500 appearance-none cursor-pointer w-14 h-7 rounded-full bg-red-500 transition-all duration-500"
                onClick={() => {
                  handleToggle('green')
                  handleSoundLight()
                }}
                checked={mode === 'green'}
              />
              <span className="absolute font-medium text-xs uppercase right-1 text-white">
                OFF
              </span>
              <span className="absolute font-medium text-xs uppercase right-8 text-white">
                ON
              </span>
              <span className="w-[1.9rem] h-[1.9rem] right-7 absolute rounded-full transform transition-transform duration-500 bg-gray-200" />
            </label>

            {/* // Toggle 04 */}
            <div
              className={`w-10 h-10 bg-no-repeat cursor-pointer transition-all duration-500 bg-[url('/src/assets/batteries/battery0.svg')] ${
                mode === 'battery' && 'animate-battery'
              }`}
              onClick={() => {
                handleToggle('battery')
                handleSoundCharging()
              }}
            ></div>

            {/* // Toggle 05 */}
            <div
              className={`w-8 h-8 bg-no-repeat cursor-pointer transition-all duration-500 bg-[url('/src/assets/users/user0.svg')] ${
                mode === 'user' && 'animate-user'
              }`}
              onClick={() => handleToggle('user')}
            ></div>

            {/* // Toggle 06 */}
            <div
              className={`w-8 h-8 bg-no-repeat cursor-pointer transition-all duration-500 bg-[url('/src/assets/planets/planet0.svg')] ${
                mode === 'planet' && 'animate-planet'
              }`}
              onClick={() => {
                handleToggle('planet')
                handleSoundChargeUp()
              }}
            ></div>
          </div>

          <section className="mt-20">
            <h2 className="font-bold text-lg">Lorem ipsum hello</h2>

            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              illum quia dolore, in a sed! Sed tempore molestias, veritatis
              impedit alias assumenda mollitia. Placeat aperiam sed vel aliquid
              adipisci dolor!
            </p>

            <p className="mt-4 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              itaque ullam officiis sequi ipsum accusantium possimus minima
              earum assumenda totam ut animi repellat doloribus, quod sit non
              ratione eos vero!
            </p>

            <p className="mt-4 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              itaque ullam officiis sequi ipsum accusantium possimus minima
              earum assumenda totam ut animi repellat doloribus, quod sit non
              ratione eos vero!
            </p>

            <p className="mt-4 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              itaque ullam officiis sequi ipsum accusantium possimus minima
              earum assumenda totam ut animi repellat doloribus, quod sit non
              ratione eos vero!
            </p>

            <p className="mt-4 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              itaque ullam officiis sequi ipsum accusantium possimus minima
              earum assumenda totam ut animi repellat doloribus, quod sit non
              ratione eos vero!
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
