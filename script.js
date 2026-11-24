
const messages = [
    "You are doing better than you think. Keep going! ♡",

    "Never stop dreaming, little girl. 🎀",

    "Small progress is still progress. 🌷",

    "You deserve all the beautiful things in life. ♡",

    "Keep shining and believe in yourself! ✨",

    "Your dreams are waiting for you. Never give up! 💗",

    "Be proud of how far you have come. ୨୧"
];


function changeMessage() {

    const messageElement =
        document.getElementById("random-message");

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    messageElement.style.opacity = 0;

    setTimeout(() => {

        messageElement.innerHTML =
            messages[randomIndex];

        messageElement.style.opacity = 1;

    }, 200);

}


// Console greeting

console.log("Hello Dinda! Welcome to your little world 🎀");