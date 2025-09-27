function displayAnswerFromAI() {
    const urlParams = new URLSearchParams(window.location.search)
    const encodedMessage = urlParams.get('message');



    if (encodedMessage) {

        const message = decodeURIComponent(encodedMessage);

        const outputElement = document.querySelector('.output');

        outputElement.innerHTML = message;

    }
}
displayAnswerFromAI()


const starsContainer = document.querySelector(".containerStars")
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


const allImgArr = [
    "img/00-TheFool.png",
    "img/01-TheMagician.png",
    "img/02-TheHighPriestess.png",
    "img/03-TheEmpress.png",
    "img/04-TheEmperor.png",
    "img/05-TheHierophant.png",
    "img/06-TheLovers.png",
    "img/07-TheChariot.png",
    "img/08-Strength.png",
    "img/09-TheHermit.png",
    "img/10-WheelOfFortune.png",
    "img/11-Justice.png",
    "img/12-TheHangedMan.png",
    "img/13-Death.png",
    "img/14-Temperance.png",
    "img/15-TheDevil.png",
    "img/16-TheTower.png",
    "img/17-TheStar.png",
    "img/18-TheMoon.png",
    "img/19-TheSun.png",
    "img/20-Judgement.png",
    "img/21-TheWorld.png",
    "img/CardBacks.png",
    "img/Cups01.png",
    "img/Cups02.png",
    "img/Cups03.png",
    "img/Cups04.png",
    "img/Cups05.png",
    "img/Cups06.png",
    "img/Cups07.png",
    "img/Cups08.png",
    "img/Cups09.png",
    "img/Cups10.png",
    "img/Cups11.png",
    "img/Cups12.png",
    "img/Cups13.png",
    "img/Cups14.png",
    "img/Pentacles01.png",
    "img/Pentacles02.png",
    "img/Pentacles03.png",
    "img/Pentacles04.png",
    "img/Pentacles05.png",
    "img/Pentacles06.png",
    "img/Pentacles07.png",
    "img/Pentacles08.png",
    "img/Pentacles09.png",
    "img/Pentacles10.png",
    "img/Pentacles11.png",
    "img/Pentacles12.png",
    "img/Pentacles13.png",
    "img/Pentacles14.png",
    "img/Swords01.png",
    "img/Swords02.png",
    "img/Swords03.png",
    "img/Swords04.png",
    "img/Swords05.png",
    "img/Swords06.png",
    "img/Swords07.png",
    "img/Swords08.png",
    "img/Swords09.png",
    "img/Swords10.png",
    "img/Swords11.png",
    "img/Swords12.png",
    "img/Swords13.png",
    "img/Swords14.png",
    "img/Wands01.png",
    "img/Wands02.png",
    "img/Wands03.png",
    "img/Wands04.png",
    "img/Wands05.png",
    "img/Wands06.png",
    "img/Wands07.png",
    "img/Wands08.png",
    "img/Wands09.png",
    "img/Wands10.png",
    "img/Wands11.png",
    "img/Wands12.png",
    "img/Wands13.png",
    "img/Wands14.png"
];

function randomCard() {

    const randomIndex = Math.floor(Math.random() * allImgArr.length);

    const imgContainer = document.querySelector(".output-card")

    const createNewImg = document.createElement("img");

    createNewImg.src = allImgArr[randomIndex]

    createNewImg.style.width = "300px";
    createNewImg.style.height = "400px";



    imgContainer.appendChild(createNewImg);

}

randomCard();


function randomEmoji() {
    let emojiContainer = document.querySelector(".emoji");

    const emojiArr = [
        "🧙","✨", "🔮","💫", "🌙"
    ];

    const randomEmoji = Math.floor(Math.random() * emojiArr.length);
     const emojiOutput = emojiArr[randomEmoji]
    
    emojiContainer.innerHTML = emojiOutput

}

randomEmoji()

