
function generateStars() {

    const starsContainer = document.querySelector(".container-stars")
    const numberOfStars = 50;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("span");
        star.style.position = "absolute";
        star.style.width = "4px";
        star.style.height = "4px";
        star.style.borderRadius = "50%";
        star.style.backgroundColor = "#fff";

        const randomX = Math.random() * (starsContainer.clientWidth);
        const randomY = Math.random() * (starsContainer.clientHeight);

        star.style.left = randomX + "px";
        star.style.top = randomY + "px";

        starsContainer.appendChild(star);
    }
}
function displayAnswerFromAI() {
    const urlParams = new URLSearchParams(window.location.search)
    const encodedMessage = urlParams.get('message');

    if (encodedMessage) {

        const message = decodeURIComponent(encodedMessage);

        const outputElement = document.querySelector('.output');

        outputElement.innerHTML = message;

    }
}

function displayImgFromRandom() {
    const urlParams = new URLSearchParams(window.location.search);
    

    for (let i = 1; i <= 3; i++) {

        const encodedImg = urlParams.get(`card${i}`);

    if (encodedImg) {
        const imgPath = decodeURIComponent(encodedImg);
        const imgContainer = document.querySelector(".output-card");
        const createNewImg = document.createElement("img");

        createNewImg.src = imgPath;
        createNewImg.style.width = "300px";
        createNewImg.style.height = "400px";
        imgContainer.appendChild(createNewImg)
    }

}
 }

function randomEmoji() {
    let emojiContainer = document.querySelector(".emoji");

    const emojiArr = [
        "🧙", "✨", "🔮", "💫", "🌙"
    ];

    const randomEmoji = Math.floor(Math.random() * emojiArr.length);
    const emojiOutput = emojiArr[randomEmoji]

    emojiContainer.innerHTML = emojiOutput;

}

    generateStars();
    displayAnswerFromAI();
    displayImgFromRandom();
    randomEmoji();

    const title = document.querySelector('.main-title');
const cardWrap = document.querySelector('.output-card__wrap');
const outputWrap = document.querySelector('.output-wrap');
const stars = document.querySelector(".container-stars");

title.classList.add("visible");
cardWrap.classList.add("visible");
outputWrap.classList.add("visible");
stars.classList.add("visible");
