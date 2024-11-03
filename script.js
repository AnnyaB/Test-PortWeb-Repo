function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show details
    } else {
        details.style.display = "none"; // Hide details
    }
}

// Ensure project details are hidden by default
document.querySelectorAll('.project-details').forEach((details) => {
    details.style.display = 'none';
});
