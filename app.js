const bgImg = document.querySelector("#background-img");
window.addEventListener("scroll", () => {
    updateImage();
})

function updateImage() {
    bgImg.style.opacity = 1 - window.pageYOffset / 800;
    // console.log(window.pageYOffset, 1 - window.pageYOffset / 800);
    bgImg.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}