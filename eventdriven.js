let intervalId;

function startMovement() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const meme = document.getElementById('meme'); //refers to the image//

    // Disable Start button and enable Stop button //
    startButton.disabled = true;
    stopButton.disabled = false;

    // Move the meme image around in a random pattern//
    intervalId = setInterval(() => {
        const randomX = Math.random() * (window.innerWidth - meme.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - meme.offsetHeight);
        meme.style.left = `${randomX}px`;
        meme.style.top = `${randomY}px`;
    }, 500); // moves every half second//
}

function stopMovement() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    // Enable Start button and disable Stop button //
    startButton.disabled = false;
    stopButton.disabled = true;

    // Stop the movement of the meme image //
    clearInterval(intervalId);
}