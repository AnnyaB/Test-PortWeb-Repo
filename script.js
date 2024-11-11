document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Apply saved theme on page load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = '🌞';
    } else {
        modeToggle.textContent = '🌙';
    }

    // Toggle theme on button click
    modeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            modeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            modeToggle.textContent = '🌞';
            localStorage.setItem('theme', 'dark');
        }
    });
});
 

