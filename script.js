document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars');
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite`;
        starsContainer.appendChild(star);
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
    }
`;
document.head.append(style);