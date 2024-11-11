// Get the button and body element
const modeToggle = document.getElementById('modeToggle');
const body = document.body();

// Check if dark mode is already applied
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.setAttribute('aria-pressed', 'true');
    modeToggle.textContent = '🌞'; // Change to Sun icon for dark mode
} else {
    modeToggle.setAttribute('aria-pressed', 'false');
    modeToggle.textContent = '🌙'; // Moon icon for light mode
}

// Add event listener for the toggle button
modeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        modeToggle.setAttribute('aria-pressed', 'false');
        modeToggle.textContent = '🌙'; // Moon icon for light mode
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        modeToggle.setAttribute('aria-pressed', 'true');
        modeToggle.textContent = '🌞'; // Sun icon for dark mode
        localStorage.setItem('theme', 'dark');
    }
});
