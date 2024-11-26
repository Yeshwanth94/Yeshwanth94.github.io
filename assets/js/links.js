document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor tags
    var links = document.querySelectorAll('a');

    // Loop through the links and add target="_blank"
    links.forEach(function (link) {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
