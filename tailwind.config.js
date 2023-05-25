tailwind.config = {
  darkMode: 'class',
};

function themeToggle(event) {
  const moon = document.querySelector('#moon');
  const sun = document.querySelector('#sun');
  const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
  audio.play();
  moon.classList.add('animate-spin');
  sun.classList.add('animate-spin');
  setTimeout(() => {
    document.documentElement.classList.toggle('dark');
    moon.classList.remove('animate-spin');
    sun.classList.remove('animate-spin');
  }, 300);
}
