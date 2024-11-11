// Get the button and body element
const modeToggle = document.getElementById('modeToggle');
const body = document.body();

// Check if dark mode is already applied from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.textContent = '🌞'; // Change to Dark moon icon for dark mode
} else {
    modeToggle.textContent = '🌙'; // Half moon icon for light mode
}

// Add event listener for the toggle button
modeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on body
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        modeToggle.textContent = '🌙'; // Half moon icon for light mode
        localStorage.setItem('theme', 'light'); // Store the preference in localStorage
    } else {
        body.classList.add('dark-mode');
        modeToggle.textContent = '🌚'; // Dark moon icon for dark mode
        localStorage.setItem('theme', 'dark'); // Store the preference in localStorage
    }
});


