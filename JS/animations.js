function revealElements() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {

        const top = reveal.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            reveal.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

