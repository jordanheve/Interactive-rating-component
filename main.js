let numberSelected;
let numberContainer = document.querySelector(".rating-state-number-container");
let ratingNumber = document.querySelector(".thankyou-state-result-newnumber");
let submitBtn = document.querySelector(".submit-btn");
let ratingState = document.querySelector(".rating-state");
let thankyouState = document.querySelector(".thankyou-state")

numberContainer.addEventListener("click", event => {
    numberSelected = event.target.innerText;
    ratingNumber.innerText = numberSelected;
});

submitBtn.addEventListener("click", () => {
    if (numberSelected > 0  && numberSelected <= 5){
        ratingState.style.display = "none";
        thankyouState.style.display = "flex"
    } else {
        alert("To continue you need to rate us first")
    }
});
