let signInCard = document.createElement("div");

    signInCard.id = "signIn";

    signInCard.style.width = "21rem";
    signInCard.style.height = "14rem";
    signInCard.style.backgroundColor = "#F5F5F5";
    signInCard.style.display = "none";

    document
      .querySelector("#sign-in")
      .addEventListener("click", function (event) {
        console.log("Clicked.");
        if (signInCard.style.display == "none") {
          console.log("Inside clicked.");
          signInCard.style.display = "block";
        }
      });

    let body = document.querySelector("body");

    body.appendChild(signInCard);

