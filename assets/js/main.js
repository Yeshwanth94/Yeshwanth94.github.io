document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('show-abstract-btn')) {
            console.log('Button clicked', event.target);

            // Find the next sibling element, skip over any non-element nodes
            let abstract = event.target.nextElementSibling;

            // Skip over non-element nodes (like text nodes or spaces)
            while (abstract && abstract.nodeType !== 1) {
                abstract = abstract.nextElementSibling;
            }

            console.log('Found abstract:', abstract); // Log the abstract content

            // Check if the abstract was found
            if (abstract) {
                // Toggle visibility of the abstract content
                if (abstract.style.display === 'none' || abstract.style.display === '') {
                    abstract.style.display = 'block';
                    // event.target.textContent = 'Hide Abstract';
                } else {
                    abstract.style.display = 'none';
                    // event.target.textContent = 'Show Abstract';
                }
            } else {
                console.error('No abstract found for this button');
            }
        }
    });
});
