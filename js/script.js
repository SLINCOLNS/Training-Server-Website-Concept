document.addEventListener("DOMContentLoaded", () => {
    const snowflakes = "❄️✦✧✼".split('');
    const snowflakeCount = 100;

    function createSnowflake() {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        flake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];

        const size = Math.random() * 20 + 10;
        flake.style.fontSize = `${size}px`;
        flake.style.left = Math.random() * window.innerWidth + "px"; // Позиционирование по оси X

        // Случайная продолжительность анимации
        const animationDuration = Math.random() * 3 + 2;
        flake.style.animationDuration = `${animationDuration}s`;
        
        // Случайная задержка, чтобы снежинки не падали одновременно
        const animationDelay = Math.random() * 2;
        flake.style.animationDelay = `${animationDelay}s`;

        document.body.appendChild(flake);

        flake.addEventListener('animationend', () => flake.remove());
    }

    setInterval(createSnowflake, 200); // Генерация снежинок
});
