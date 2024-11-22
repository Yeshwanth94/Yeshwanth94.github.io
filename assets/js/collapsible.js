document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".collapsible-heading").forEach(heading => {
        heading.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.classList.toggle("show");
            this.classList.toggle("active");
        });
    });
});
