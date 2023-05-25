import { useState } from 'react'

enum Toggle {
  white = 'bg-white',
  red = 'bg-red-500',
  yellow = 'bg-yellow-500',
}

export function Home() {
  const [mode, setMode] = useState<'white' | 'red' | 'yellow'>(
    () =>
      (localStorage.getItem('theme') as 'white' | 'red' | 'yellow') || 'white',
  )

  function handleToggle(color: 'white' | 'red' | 'yellow') {
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

          <div className="mt-10 flex justify-between items-center">
            {/* // Toggle 01 */}
            <div
              className={`relative w-10 rounded-xl h-5 cursor-pointer flex items-center transition-all duration-500 ${
                mode === 'red' ? 'bg-gray-100' : 'bg-gray-700'
              }`}
              onClick={() => handleToggle('red')}
            >
              <div
                className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${
                  mode === 'red' ? 'ml-6 bg-gray-700' : 'bg-gray-100 ml-1.5'
                }`}
              ></div>
            </div>

            {/* // Toggle 02 */}
            <div
              className={`relative w-10 rounded-xl h-5 cursor-pointer flex items-center transition-all duration-500 ${
                mode === 'yellow' ? 'bg-gray-100' : 'bg-gray-700'
              }`}
              onClick={() => handleToggle('yellow')}
            >
              <div
                className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${
                  mode === 'yellow' ? 'ml-6 bg-gray-700' : 'bg-gray-100 ml-1.5'
                }`}
              ></div>
            </div>

            {/* <div className="relative w-10 rounded-xl h-5 cursor-pointer bg-gray-700 dark:bg-gray-100 flex items-center transition-all duration-700">
              <div className="absolute w-3 h-3 rounded-full bg-gray-100 ml-1.5 dark:ml-6 dark:bg-gray-700 transition-all duration-700"></div>
            </div> */}
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
