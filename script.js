document.getElementById("yes-btn").addEventListener("click", function () {
    window.location.href = "yes.html";
});

const noBtn = document.getElementById("no-btn");
const flashbangModal = document.getElementById("flashbang-modal");
const flashbangText = document.getElementById("flashbang-text");

let moveCount = 0;
const maxMoves = 3;
let isShrinking = false;
let currentX = 0;
let currentY = 0;

// Array of random messages
const messages = [
    "You cannot escape me!",
    "Our love is inevitable!",
    "Resistance is futile!",
    "You're only delaying the inevitable!",
    "I'll always find you!",
    "You're mine forever!",
    "The stars align for us!",
    "Destiny brings us together!",
    "You can't say no forever!",
    "I'll wait for eternity!",
    "Our hearts are bound!",
    "You're stuck with me!",
    "Fate has spoken!",
    "You can run, but you can't hide!",
    "I'm your forever Valentine!",
];

noBtn.addEventListener("mouseenter", function() {
    if (isShrinking) return;

    if (moveCount < maxMoves) {
        const moveDistance = 100;
        const randomX = (Math.random() - 0.5) * moveDistance * 2;
        const randomY = (Math.random() - 0.5) * moveDistance * 2;

        currentX += randomX;
        currentY += randomY;

        noBtn.style.transform = `translate(${currentX}px, ${currentY}px)`;
        moveCount++;
    } else if (!isShrinking) {
        isShrinking = true;
        noBtn.classList.add("shrinking");
        noBtn.style.transition = "transform 24s ease-in-out, opacity 24s ease-in-out, filter 3s ease, box-shadow 3s ease";
        noBtn.style.transform = `translate(${currentX}px, ${currentY}px) scale(0)`;
        noBtn.style.opacity = "0";
    }
});

noBtn.addEventListener("click", function() {
    if (isShrinking) {
        // Get a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        flashbangText.textContent = randomMessage;

        // Show the flashbang modal
        flashbangModal.style.display = "flex";

        // Hide the modal after 3 seconds
        setTimeout(() => {
            flashbangModal.style.display = "none";
        }, 3000); // 3 seconds
    }
});