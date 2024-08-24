document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            // Remove 'active' class from all images
            images.forEach(i => i.classList.remove('active'));
            // Add 'active' class to the clicked image
            img.classList.add('active');
        });
    });
});
