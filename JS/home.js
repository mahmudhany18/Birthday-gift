const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const firstText = "Every love story is beautiful...";
const secondText = "But ours is my favorite. ❤️";

let i = 0;
let j = 0;

function typeFirst() {

    if (i < firstText.length) {

        title.innerHTML += firstText.charAt(i);
        i++;

        setTimeout(typeFirst, 70);

    } else {

        setTimeout(typeSecond, 700);

    }

}

function typeSecond() {

    if (j < secondText.length) {

        subtitle.innerHTML += secondText.charAt(j);

        j++;

        setTimeout(typeSecond, 70);

    }

}

if(title && subtitle){

    typeFirst();

}