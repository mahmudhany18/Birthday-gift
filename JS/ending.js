const letter = document.querySelector(".letter");


const text = `
Dear Habiba ❤️

Happy Birthday ya ro7 2lby ❤️

At this moment, you have reached the end of our first chapter.

I made this website because I wanted to give you something special, something that contains the memories and moments that made me smile because you were there.

From our first picture in El Tahrir, our first date in Zamalek, our walks, our laughs, our small jokes, and all the beautiful moments we shared...

Every memory became special because it was with you.

Thank you for being a beautiful part of my life and for all the happiness you brought to my days.

I hope this birthday brings you all the happiness, success, and beautiful moments you deserve.

I want you to know that this is not the end of our story.

This is only the first chapter, and I hope we create many more memories together in the future.

Happy Birthday, my beautiful girl ❤️
I love you more than yesterday and less than tomorrow. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

`;


let index = 0;


function typeWriter(){

    if(index < text.length){

    letter.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeWriter,70);

}
else{

    setTimeout(()=>{

        document
        .querySelector("#finalMessage")
        .classList
        .add("show");

    },1500);
    setTimeout(()=>{

    document
    .querySelector(".surprise")
    .classList
    .add("show");

},3000);

}

}


window.addEventListener("load",()=>{

    setTimeout(()=>{

        typeWriter();

    },1000);

});