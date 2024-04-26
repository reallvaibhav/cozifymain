const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()

// Mental health tips array
const tips = [
    "Practice mindfulness meditation daily.",
    "Exercise regularly to boost your mood and reduce stress.",
    "Reach out to a friend or family member for support when you're feeling down.",
    "Limit your caffeine intake, especially if you're prone to anxiety.",
    "Get enough sleep each night to support your mental health.",
    "Set realistic goals and break them down into manageable steps.",
    "Consider seeking professional help if you're struggling to cope.",
    "Find healthy ways to manage stress, such as deep breathing exercises or journaling.",
    "Engage in activities that bring you joy and fulfillment.",
    "Remember to be kind to yourself and practice self-compassion."
];

// Function to get a random tip
function getRandomTip() {
    return tips[Math.floor(Math.random() * tips.length)];
}

// Function to display the popup
function showPopup() {
    const tipPopup = document.getElementById("tipPopup");
    const tipText = document.getElementById("tipText");
    tipText.textContent = getRandomTip();
    tipPopup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("tipPopup").style.display = "none";
}

// Event listener for the button
document.getElementById("tipButton").addEventListener("click", showPopup);

// news Api
