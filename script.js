document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');
    const message = document.getElementById('message');
    const proposalAnimation = document.getElementById('proposal-animation');

    let clickCount = 0;

    function getRandomPosition() {
        const container = document.getElementById('game-container');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const x = Math.random() * (containerWidth - noButton.offsetWidth);
        const y = Math.random() * (containerHeight - noButton.offsetHeight);

        return { x, y };
    }

    function moveNoButton() {
        const { x, y } = getRandomPosition();
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    noButton.addEventListener('mouseover', () => {
        noButton.classList.add('moving');
    });

    noButton.addEventListener('mouseout', () => {
        noButton.classList.remove('moving');
    });

    noButton.addEventListener('click', () => {
        clickCount++;
        message.textContent = "Are you sure? It's really hard to say no!";
        moveNoButton();
        yesButton.style.transform = `scale(${1 + clickCount * 0.1})`;
    });

    yesButton.addEventListener('click', () => {
        message.textContent = "";
        proposalAnimation.classList.remove('hidden');
    });
});
