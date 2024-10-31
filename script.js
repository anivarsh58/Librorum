signInCard = document.querySelector("#signIn")
signUpCard = document.querySelector('#signUp')

signInCard.style.display = "none";
signUpCard.style.display = "none";

document
    .querySelector("#sign-in")
    .addEventListener("click", function (event) {
    console.log("Clicked.");
    if (signInCard.style.display == "none") {
        console.log("Inside clicked.");
        signInCard.style.display = "block";
    }
    });

document
    .querySelector("#sign-up")
    .addEventListener("click", function (event) {
    console.log("Clicked.");
    if (signUpCard.style.display == "none") {
        console.log("Inside clicked.");
        signUpCard.style.display = "block";
    }
    });