// Function to move #page-title based on window size
function movePageTitle() {
    const pageTitle = document.getElementById('page-title');
    const header = document.getElementById('header-content');
    const section = document.getElementById('section-content');

    if (window.innerWidth < 1000) {
        // Append #page-title to header if not already there
        if (!header.contains(pageTitle)) {
            header.insertBefore(pageTitle, header.firstChild);
        }
    } else {
        // Move #page-title back to section-content if not already there
        if (!section.contains(pageTitle)) {
            section.insertBefore(pageTitle, section.firstChild);
        }
    }
}

// Attach event listener to window resize
window.addEventListener('resize', movePageTitle);

// Run on initial load
movePageTitle();