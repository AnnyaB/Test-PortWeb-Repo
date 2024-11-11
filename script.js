// Function to toggle dark and light modes
function toggleMode() {
    const body = document.body;
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';

    // Toggle between dark and light mode
    if (currentMode === 'light') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark'); // Save the user's preference
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('mode', 'light'); // Save the user's preference
    }
}

// On page load, set the mode based on the saved preference (if any)
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode') || 'light'; // Default to light mode
    document.body.classList.add(savedMode + '-mode');

    // Add event listener to the mode toggle button
    const toggleButton = document.getElementById('modeToggle');
    toggleButton.addEventListener('click', toggleMode);
});
