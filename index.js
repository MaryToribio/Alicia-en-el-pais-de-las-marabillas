document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.phone input[type="checkbox"]');
    const gameCounter = document.getElementById('gameCounter');
    let score = 0;

    inputs.forEach(input => {
        input.addEventListener('click', function () {
            if (this.checked) {
                score++;
                gameCounter.textContent = score;
            }
        });
    });
});
