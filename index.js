document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');

    heading.addEventListener('click', function() {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heading.style.color = randomColor;
    });
});