// This function will handle click events for project sections,
// providing a simple interaction feedback to the user.
document.addEventListener('DOMContentLoaded', function() {
    const projectSections = document.querySelectorAll('section');

    projectSections.forEach(section => {
        section.addEventListener('click', function() {
            const projectName = section.querySelector('h2').innerText; // Get the project title
            alert(`You clicked on the project: ${projectName}`); // Show an alert with project title
        });
    });

    // Function to handle navigation link clicks
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const targetPage = link.getAttribute('href'); // Get the target page from the link
            alert(`Navigating to: ${targetPage}`); // Alert the user about navigation
            window.location.href = targetPage; // Navigate to the new page
        });
    });
});
