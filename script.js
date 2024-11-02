document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const projectSections = document.querySelectorAll('section.interest');
    console.log('Found project sections:', projectSections.length);

    projectSections.forEach(section => {
        section.addEventListener('click', function() {
            const projectName = section.querySelector('h2').innerText;
            alert(`You clicked on the project: ${projectName}`);
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    console.log('Found navigation links:', navLinks.length);

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = link.getAttribute('href');
            alert(`Navigating to: ${targetPage}`);
            window.location.href = targetPage;
        });
    });
});
