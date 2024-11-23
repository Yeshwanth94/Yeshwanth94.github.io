// document.addEventListener("DOMContentLoaded", function () {
//     document.body.addEventListener('click', function (event) {
//         if (event.target && event.target.classList.contains('show-footnote-trigger')) {
//             console.log('Button clicked', event.target);

//             // Find the next sibling element, skip over any non-element nodes
//             let footnote = event.target.nextElementSibling;

//             // Skip over non-element nodes (like text nodes or spaces)
//             while (footnote && footnote.nodeType !== 1) {
//                 footnote = footnote.nextElementSibling;
//             }

//             console.log('Found footnote:', footnote); // Log the abstract content

//             // Check if the abstract was found
//             if (footnote) {
//                 // Toggle visibility of the abstract content
//                 if (footnote.style.display === 'none' || footnote.style.display === '') {
//                     footnote.style.display = 'block';
//                     // event.target.textContent = 'Hide Abstract';
//                 } else {
//                     footnote.style.display = 'none';
//                     // event.target.textContent = 'Show Abstract';
//                 }
//             } else {
//                 console.error('No abstract found for this button');
//             }
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('show-footnote-trigger')) {
            console.log('Button clicked', event.target);

            // Find the next sibling element, skip over any non-element nodes
            let footnote = event.target.nextElementSibling;

            // Skip over non-element nodes (like text nodes or spaces)
            while (footnote && footnote.nodeType !== 1) {
                footnote = footnote.nextElementSibling;
            }

            console.log('Found footnote:', footnote);

            // Check if the footnote was found
            if (footnote) {
                // If footnote is already visible, hide it
                if (footnote.style.display === 'block' || footnote.classList.contains('visible')) {
                    footnote.classList.remove('visible');
                    footnote.style.display = 'none';
                } else {
                    // Set footnote to visible and position it
                    footnote.classList.add('visible');
                    footnote.style.display = 'block';

                    // Get the position of the trigger
                    const rect = event.target.getBoundingClientRect();

                    // Position the footnote above the trigger (adjust if needed)
                    footnote.style.top = `${rect.top - footnote.offsetHeight - 5}px`; // Position it above the trigger
                    footnote.style.left = `${rect.left}px`; // Align it to the left of the trigger
                }
            } else {
                console.error('No footnote content found for this trigger');
            }
        }
    });
});
