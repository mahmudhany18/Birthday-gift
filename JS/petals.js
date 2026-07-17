const petals = document.getElementById("petals");

if (petals) {

    function createPetal() {

        const petal = document.createElement("span");

        petal.classList.add("petal");

        petal.innerHTML = "🌸";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.fontSize = Math.random() * 15 + 20 + "px";

        petal.style.animationDuration =
            Math.random() * 5 + 8 + "s";

        petals.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 13000);

    }

    setInterval(createPetal, 350);

}