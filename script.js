// Function to toggle visibility of project details
function toggleDetails(id) {
    const details = document.getElementById(id);
    // Toggle the display between block and none
    details.style.display = (details.style.display === "block") ? "none" : "block";
}

// Set project details to be hidden initially
document.addEventListener("DOMContentLoaded", () => {
    // Initially hide all project details
    document.querySelectorAll('.project-details').forEach(details => {
        details.style.display = 'none';
    });

    // Add event listeners to all project titles or buttons that should toggle details
    document.querySelectorAll('.toggle-details-button').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project-id');
            toggleDetails(projectId);
        });
    });
});
