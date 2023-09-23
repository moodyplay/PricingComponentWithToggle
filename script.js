const switchEl = document.getElementById("switch");
const cardsEl = document.getElementsByClassName("card");

const cssTemplateString = `.foo:[:before]{prop: opacity:1}`;

switchEl.addEventListener('change', function () {




    
    for (let i = 0; i < cardsEl.length; i++) {
        cardsEl[i].innerHTML = cssTemplateString;
        
    }
});    