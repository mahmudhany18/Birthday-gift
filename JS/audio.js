const music = document.getElementById("bgMusic");

if (music) {

    // Restore previous position
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = Number(savedTime);
    }


    // Save current position every second
    setInterval(() => {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }, 1000);


    // When song ends, start again
    music.addEventListener("ended", () => {

        music.currentTime = 0;
        music.play();

    });


    // Try to continue automatically
    music.play().catch(() => {

        console.log("Waiting for user interaction");

    });

}