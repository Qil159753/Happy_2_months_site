// Function for the button surprise
function revealMessage() {
    const msg = document.getElementById('secret-msg');
    msg.style.display = 'block';
    msg.style.animation = 'fadeIn 2s';
}

// Anniversary Timer Logic
const startDate = new Date("2025-12-19T00:00:00"); // Your start date

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timer').innerHTML = 
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds Together`;
}

// Update every second
setInterval(updateTimer, 1000);
updateTimer();