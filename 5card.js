
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

   for (let i = 1; i <= 5; i++) {

        const encodedImg = urlParams.get(`card${i}`);

            const imgPath = decodeURIComponent(encodedImg);
            const createNewImg = document.createElement("img");
            const topRow = document.querySelector(".top-row")
            const bottomRow = document.querySelector(".bottom-row")

            createNewImg.src = imgPath;
            createNewImg.style.width = "200px";
            createNewImg.style.height = "300px";

            if (i <= 2) {
                topRow.appendChild(createNewImg);
            } else {
                bottomRow.appendChild(createNewImg)
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
const stars = document.querySelector(".container-stars")

title.classList.add("visible")
cardWrap.classList.add("visible")
outputWrap.classList.add("visible")
stars.classList.add("visible")



