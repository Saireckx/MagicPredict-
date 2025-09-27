const cards = document.querySelectorAll(".card");
    
cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

const starsContainer = document.querySelector(".containerStars")
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
    const YOUR_SITE_URL = "http://127.0.0.1:5500/"; 

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
                    {"role": "user", "content": prompt}
                ],
          
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

 const inputElement = document.querySelector(".main-input");
    const predictButton = document.querySelector("#main-btn button"); 

    predictButton.addEventListener("click", async () => {

        const userPromptSettings = "сделай не сильно длиный расклалд, 5-6 предложений, коротко и поделу и не надо в начале расклада говорить что ты не профисиональный таролог, только расклалд так же убери решетки в начале своего ответа"
        const userPrompt =  userPromptSettings + inputElement.value;

        try {
            const result = await getOpenRouterCompletion(userPrompt);
           
            let showResult = encodeURIComponent(result);
            const targetURL = `1card.html?message=${showResult}`
            window.location.href = targetURL;

        } catch (error) {
            console.error ("произошла ошибка", error);

            outputElement.innerHTML = "something went wrong:("
        }
    })

    document.getElementById("1card");
    document.getElementById("3card");
    document.getElementById("accros");


