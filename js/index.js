let navLinks = document.querySelectorAll('.nav__link');
let bodyId = document.querySelector("body").id;


for (let link of navLinks) {
    if (link.dataset.active == bodyId) {
        console.log(bodyId)
        link.classList.add("active");
    }
}
