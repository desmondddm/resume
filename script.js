document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll("h2");
    headers.forEach(header => {
        header.addEventListener("click", function() {
            const nextElement = this.nextElementSibling;
            if (nextElement) {
                nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});
