// Ensure the script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Check if dark mode is saved in localStorage and apply it
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = '🌞'; // Sun icon for dark mode
    } else {
        modeToggle.textContent = '🌙'; // Moon icon for light mode
    }

    // Add the click event listener to the button
    modeToggle.addEventListener('click', function () {
        // Toggle the dark mode on and off
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            modeToggle.textContent = '🌙'; // Change icon to Moon for light mode
            localStorage.setItem('theme', 'light'); // Store light mode in localStorage
        } else {
            body.classList.add('dark-mode');
            modeToggle.textContent = '🌞'; // Change icon to Sun for dark mode
            localStorage.setItem('theme', 'dark'); // Store dark mode in localStorage
        }
    });
});
