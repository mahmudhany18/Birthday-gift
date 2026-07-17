const startButton = document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener("click", () => {

        startButton.classList.add("pressed");

        document.body.classList.add("fadeOut");

        setTimeout(() => {

            window.location.href = "story.html";

        }, 900);

    });

}

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("loader")
        .classList
        .add("hide");

    },1500);

});