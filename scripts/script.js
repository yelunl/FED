var navigatie = document.querySelector("header nav");
var menuButton = document.querySelector("nav div > a");
var menuItems = document.querySelector("header nav ul");

var coffeeImage = document.querySelector("main > article:first-of-type");

var halloweenButton = document.querySelector("footer nav ul li:last-child");
var halloweenImage = document.querySelector("header nav img");

// https://www.youtube.com/watch?v=_OfaBRz9FQY
// https://stackoverflow.com/questions/9419263/how-to-play-audio
var audio = new Audio('../audio/horror_sound.mp3');

var body = document.querySelector("body");
var header = document.querySelector("header");
var main = document.querySelector("main");

function menuOpen() {
    navigatie.classList.toggle("menuOpen");
}

function halloweenTheme() {
    if (halloweenImage.getAttribute('src') === "../images/image.png") {
        halloweenImage.src = "../images/logo.svg";
    } else {
        halloweenImage.src = "../images/image.png";
        audio.play();
    }

    halloweenImage.style.width = "7em";

    body.classList.toggle("halloweenTheme");
    header.classList.toggle("halloweenTheme");
    main.classList.toggle("halloweenTheme");
}

halloweenButton.addEventListener('click', halloweenTheme);
menuButton.addEventListener('click', menuOpen);

window.addEventListener('load', function() {
    coffeeImage.classList.add("fadeCoffee");
})
