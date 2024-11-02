document.addEventListener('DOMContentLoaded', function() {
    const projectSections = document.querySelectorAll('section');

    projectSections.forEach(section => {
        section.addEventListener('click', function() {
            alert(`You clicked on the project: ${section.querySelector('h2').innerText}`);
        });
    });

    // Function to handle navigation link clicks
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const targetPage = link.getAttribute('href');
            alert(`Navigating to: ${targetPage}`); // Simple alert for navigation feedback
            window.location.href = targetPage; // Navigate to the new page
        });
    });
});




