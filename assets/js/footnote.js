document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('click', function (event) {
        const clickedElement = event.target;

        // Find the currently visible footnote content
        const footnote = document.querySelector('.footnote-content.visible');

        // If the clicked element is the footnote trigger
        if (clickedElement && clickedElement.classList.contains('show-footnote-trigger')) {
            console.log('Button clicked', clickedElement);

            // Find the next sibling element (the footnote content)
            let footnote = clickedElement.nextElementSibling;

            // Skip over non-element nodes (like text nodes or spaces)
            while (footnote && footnote.nodeType !== 1) {
                footnote = footnote.nextElementSibling;
            }

            console.log('Found footnote:', footnote);

            // Check if the footnote was found
            if (footnote) {
                // Toggle the visibility of the footnote
                if (footnote.style.display === 'block' || footnote.classList.contains('visible')) {
                    footnote.classList.remove('visible');
                    footnote.style.display = 'none';
                } else {
                    footnote.classList.add('visible');
                    footnote.style.display = 'block';

                    // Get the position of the trigger
                    const rect = clickedElement.getBoundingClientRect();

                    // Adjust the position based on the page's scroll
                    const scrollOffset = window.scrollY || window.pageYOffset;

                    // Position the footnote above the trigger (adjust if needed)
                    footnote.style.top = `${rect.top + scrollOffset - footnote.offsetHeight - 5}px`; // Position it above the trigger
                    footnote.style.left = `${rect.left}px`; // Align it to the left of the trigger
                }
            } else {
                console.error('No footnote content found for this trigger');
            }

            // Stop propagation to prevent outside click detection when clicking on the trigger
            event.stopPropagation();
        } else if (footnote && !footnote.contains(clickedElement) && !clickedElement.classList.contains('show-footnote-trigger')) {
            console.log('Clicked outside the footnote. Closing it.');
            // Close the footnote if the click is outside of the footnote or trigger
            footnote.classList.remove('visible');
            footnote.style.display = 'none';
        } else {
            console.log('Click inside the footnote or on the trigger - no action taken.');
        }
    });
});
