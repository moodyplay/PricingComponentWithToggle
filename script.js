const switchEl = document.getElementById("switch");
const cardsEl = document.getElementsByClassName("card");



switchEl.addEventListener('change', function () {
    for (let i = 0; i < cardsEl.length; i++) {
        const card = cardsEl[i];
        const before = card.querySelector("::before");
        
        if (switchEl.checked) {
            card.classList.add("blue"); // Add a class to control the opacity
        } else {
            card.classList.remove("blue"); // Remove the class to control the opacity
        }
    }
});