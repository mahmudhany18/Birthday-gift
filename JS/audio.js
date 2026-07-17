const audio = document.getElementById("bgMusic");

const playlist = [
    "music/gh.mp3",
    "music/s1.mp3",
    "music/s2.mp3",
    "music/s3.mp3",
    "music/s4.mp3",
    "music/s5.mp3",
    "music/s6.mp3",
    "music/s7.mp3",
    "music/s8.mp3",
    "music/s9.mp3",
    "music/s10.mp3"
];

let currentSong =
    parseInt(localStorage.getItem("currentSong")) || 0;

audio.src = playlist[currentSong];

const savedTime = localStorage.getItem("musicTime");

if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
}

audio.play().catch(() => {});

setInterval(() => {
    localStorage.setItem("musicTime", audio.currentTime);
}, 1000);

audio.addEventListener("ended", () => {

    let next;

    do {
        next = Math.floor(Math.random() * playlist.length);
    } while (next === currentSong);

    currentSong = next;

    localStorage.setItem("currentSong", currentSong);

    audio.src = playlist[currentSong];

    audio.currentTime = 0;

    audio.play();

});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("musicTime", audio.currentTime);
});
