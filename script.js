// Smooth Scroll Implementation for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to Create a Modal for Project Details
function createModal(projectTitle, projectDescription) {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    const modalBox = document.createElement('div');
    modalBox.className = 'modal-box';

    const closeModal = document.createElement('span');
    closeModal.className = 'close-modal';
    closeModal.innerText = '×';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = `
        <h2>${projectTitle}</h2>
        <p>${projectDescription}</p>
    `;

    // Append elements
    modalBox.appendChild(closeModal);
    modalBox.appendChild(modalContent);
    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);

    // Close modal on clicking '×' or outside the modal box
    closeModal.addEventListener('click', () => document.body.removeChild(modalOverlay));
    modalOverlay.addEventListener('click', event => {
        if (event.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
}

// Function to Handle Scroll-Based Animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});


