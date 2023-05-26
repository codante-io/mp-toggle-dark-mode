import { useState } from 'react'

enum Toggle {
  white = 'bg-zinc-100',
  red = 'bg-red-500',
  yellow = 'bg-yellow-500',
  green = 'bg-green-500',
}

type colors = keyof typeof Toggle

export function Home() {
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

          <div className="mt-10 flex justify-center gap-4 items-center">
            {/* // Toggle 01 */}
            <div
              className={`w-14 rounded-xl h-7 cursor-pointer flex items-center transition-all duration-500 ${
                mode === 'red' ? 'bg-gray-100' : 'bg-gray-700'
              }`}
              onClick={() => handleToggle('red')}
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
              onClick={() => handleToggle('yellow')}
            >
              <div
                className={`absolute w-5 h-5 rounded-full transition-all duration-500 ease-in-out ${
                  mode === 'yellow'
                    ? 'ml-8 bg-transparent top-1 bg-yellow-400'
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
                onClick={() => handleToggle('green')}
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
