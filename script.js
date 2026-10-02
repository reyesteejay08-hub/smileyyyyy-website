window.addEventListener("load", function () {

    if (!sessionStorage.getItem("visited")) {

        alert("keep pressing ok");
        alert("I'm gonna hack your device and steal all your data in 3...2...1...");
        alert("Kidding lmao, i just wanted to say hi  (≧∇≦) ");
        alert("I hope u love this website, i've been working on it for a while!");
        alert("okay bye now, enjoy the website! (≧∇≦) ");

        sessionStorage.setItem("visited", "true");
    }

    document.body.classList.remove("surprise-hidden");

});


const photoTrack = document.querySelector("#photo-track");

if (photoTrack) {
    for (let i = 1; i <= 38; i++) {
        const img = document.createElement("img");
        img.src = `./images/pic${i}.jpg.jpg`;
        img.alt = "Memory";
        photoTrack.appendChild(img);
    }

    const photos = [...photoTrack.children];

    photos.forEach(photo => {
        const clone = photo.cloneNode(true);
        photoTrack.appendChild(clone);
    });
}