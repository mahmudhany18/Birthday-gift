console.log("Story Page Loaded ❤️");
const viewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

document.querySelectorAll(".polaroid img").forEach((image)=>{

    image.addEventListener("click",()=>{

        viewerImage.src = image.src;

        viewer.classList.add("show");

    });

});

closeViewer.addEventListener("click",()=>{

    viewer.classList.remove("show");

});

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        viewer.classList.remove("show");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        viewer.classList.remove("show");

    }

});

const timeline = document.getElementById("timelineProgress");

function updateTimeline() {

    const story = document.querySelector(".story");

    const storyTop = story.offsetTop;

    const storyHeight = story.offsetHeight;

    const scroll = window.scrollY + window.innerHeight / 2;

    let percent = (scroll - storyTop) / storyHeight;

    percent = Math.max(0, Math.min(percent, 1));

    timeline.style.height = percent * 100 + "%";

}

window.addEventListener("scroll", updateTimeline);

updateTimeline();

const memories = document.querySelectorAll(".memory");

const memoryNumber = document.getElementById("memoryNumber");

const memoryTitle = document.getElementById("memoryTitle");

const memoryDate = document.getElementById("memoryDate");

const counterFill = document.getElementById("counterFill");

function updateMemoryCounter(){

    memories.forEach((memory,index)=>{

        const rect = memory.getBoundingClientRect();

        if(rect.top < window.innerHeight*0.45 &&
           rect.bottom > window.innerHeight*0.45){

            memories.forEach(m=>{

            m.classList.remove("activeMemory");

            });

            memory.classList.add("activeMemory");

            memoryNumber.textContent =
            `❤️ Memory ${index+1} of ${memories.length}`;

            memoryTitle.textContent =
            memory.querySelector("h2").textContent;
            
            memoryDate.textContent =
            "📅 " + 
            memory.querySelector(".photoDate").textContent;

            counterFill.style.width =
            `${((index + 1) / memories.length) * 100}%`;

        }

    });

}

window.addEventListener("scroll",updateMemoryCounter);

updateMemoryCounter();

function updateBackground(){

    const progress =
    window.scrollY /
    (document.body.scrollHeight - window.innerHeight);

    if(progress < .33){

        document.body.style.background =
        "radial-gradient(circle at top,#FFEAF2,#FFF7FA 70%)";

    }

    else if(progress < .66){

        document.body.style.background =
        "radial-gradient(circle at top,#FFDDEB,#FFF5F9 70%)";

    }

    else{

        document.body.style.background =
        "radial-gradient(circle at top,#FFD2E5,#FFF2F8 70%)";

    }

}

window.addEventListener("scroll", updateBackground);

updateBackground();