tailwind.config = {
  darkMode: 'class',
};

function themeToggle(event) {
  console.log('theme');
  document.documentElement.classList.toggle('dark');
}
