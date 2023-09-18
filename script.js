const BgEl = document.getElementById("bg-el")
const sliderEl = document.getElementById("slider-el")

sliderEl.addEventListener("click", function(){
    if (BgEl.classList.contains("rounded-bg")){
        BgEl.classList.remove("rounded-bg");
        BgEl.classList.add("rounded-bg-default");
    } else{
    BgEl.classList.add("rounded-bg");
    }
})
// halo