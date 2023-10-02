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

document.addEventListener('scroll', function() {
    for (let card of cardsEl) {
        if (isElementInViewport(card)) {
            card.classList.add('card-visible');
        }else{
            card.classList.remove('card-visible')
        }
    }
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}