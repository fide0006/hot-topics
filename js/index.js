// Get references to the necessary elements
const container = document.querySelector('.main-content');
const links = document.querySelectorAll('.nav-links a');

// Function to load the requested partial content
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Function to handle link clicks and load content
function selectContent(event) {
    event.preventDefault();
    const url = event.target.href;
    loadContent(url);
}

// Register link elements for click event
links.forEach(link => {
    link.addEventListener('click', selectContent);
});

// Load the initial content (home page) on page load
document.addEventListener('DOMContentLoaded', () => {
    const initialUrl = links[0].href;
    loadContent(initialUrl);
});
