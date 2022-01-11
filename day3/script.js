const body = document.querySelector('body');
const darkToggle = document.querySelector('#dark-toggle');

// Toggle light/dark mode
darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
})