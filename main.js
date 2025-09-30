const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

const starsContainer = document.querySelector(".container-stars")
const numberOfStars = 100;

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
const OPENROUTER_API_KEY = "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";
const YOUR_SITE_URL = "https://saireckx.github.io/MagicPredict-/";

async function getOpenRouterCompletion(prompt) {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
            "HTTP-Referer": YOUR_SITE_URL,
            "X-Title": "Magic Predict",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

            model: "x-ai/grok-4-fast:free",
            messages: [
                { "role": "user", "content": prompt }
            ],

        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
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

const preLoader = document.querySelector(".pre-loader__container");
const inputElement = document.querySelector(".main-input");
const predictButton = document.querySelector("#main-btn button");
const oneCard = document.getElementById("1card");
const threeCards = document.getElementById("3card");
const accrosOfCards = document.getElementById("accros");


predictButton.addEventListener("click", async () => {

    let randomCards = [];
    let cardImgPaths = [];

    if (oneCard.classList.contains("selected")) {
        const randomIndex = Math.floor(Math.random() * allImgArr.length);
        const cardPath = allImgArr[randomIndex];
        const cardName = cardPath.split('/')[1].split('.')[0].replace(/(\d+-)/, '');


        cardImgPaths.push(cardPath);
        randomCards.push(cardName);

    } else if (threeCards.classList.contains("selected")) {
        for (let i = 0; i <= 3; i++) {
            const randomIndex = Math.floor(Math.random() * allImgArr.length);
            const cardPath = allImgArr[randomIndex];

            cardImgPaths.push(cardPath);
            const cardName = cardPath.split('/')[1].split('.')[0].replace(/(\d+-)/, '');
            randomCards.push(cardName);
        }
    }
     else if (accrosOfCards.classList.contains("selected")) {
        for (let i = 0; i < 5;i++) {
             const randomIndex = Math.floor(Math.random() * allImgArr.length);
            const cardPath = allImgArr[randomIndex];

            cardImgPaths.push(cardPath);
            const cardName = cardPath.split('/')[1].split('.')[0].replace(/(\d+-)/, '');
            randomCards.push(cardName);
        }
    }

    if (randomCards.length === 0) {
        alert("Пожалуйста, выберите расклад.");
        return;
    }

    let userPromptSettings = `сделай расклад испльзуй меньше скобок и прочего мусора, карты которые выпали:${randomCards}, коротко и поделу и не надо в начале расклада говорить что ты не профисиональный таролог, только расклалд ТАК ЖЕ НЕ ВСТАВЛЯЙ РЕШЕТКИ В НАЧАЛЕ СВОЕГО ОТВЕТА `;
    const userPrompt = userPromptSettings + inputElement.value;

    try {
        preLoader.classList.add("loaded");
        const result = await getOpenRouterCompletion(userPrompt);
        const showResult = encodeURIComponent(result);

        if (oneCard.classList.contains("selected")) {

            const cardImagePath = encodeURIComponent(cardImgPaths[0]);

            const targetURL = `1card.html?message=${showResult}&card=${cardImagePath}`;
            window.location.href = targetURL;

        } else if (threeCards.classList.contains("selected")) {
            const card1 = encodeURIComponent(cardImgPaths[0]);
            const card2 = encodeURIComponent(cardImgPaths[1]);
            const card3 = encodeURIComponent(cardImgPaths[2]);
            const targetURL = `3card.html?message=${showResult}&card1=${card1}&card2=${card2}&card3=${card3}`;
            window.location.href = targetURL;
        } else if (accrosOfCards.classList.contains("selected")) {
            const card1 = encodeURIComponent(cardImgPaths[0]);
            const card2 = encodeURIComponent(cardImgPaths[1]);
            const card3 = encodeURIComponent(cardImgPaths[2]);
            const card4 = encodeURIComponent(cardImgPaths[3]);
            const card5 = encodeURIComponent(cardImgPaths[4]);

            const targetURL = `5card.html?message=${showResult}&card1=${card1}&card2=${card2}&card3=${card3}&card4=${card4}&card5=${card5}`;
            window.location.href = targetURL
        }
    } catch (error) {
        console.error("Произошла ошибка при запросе к API:", error);
    }
});

const title = document.querySelector(".main-title");
const input = document.querySelector(".input-section");
const btn = document.getElementById("main-btn");
const option = document.querySelector(".select-option-section");

const starBg = document.querySelector(".container-stars");

starBg.classList.add("visible");
title.classList.add("visible");
input.classList.add("visible");
btn.classList.add("visible");
option.classList.add("visible");

preLoader.classList.remove("loaded");






