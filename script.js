// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for Project Details
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

function showDetails(projectName, description) {
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${projectName}</h2>
            <p>${description}</p>
        </div>
    `;
    modal.style.display = 'block';
    
    document.querySelector('.close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Closing modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Animated Elements on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');

function handleScrollAnimation() {
    animatedElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);

// Initializing animation on page load
handleScrollAnimation();




