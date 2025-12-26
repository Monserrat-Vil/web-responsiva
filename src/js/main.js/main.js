const nav__Toggle = document.querySelector("#navToggle");
const mobilePanel = document.querySelector("#mobilePanel");

function closeMenu(){
    nav__Toggle.setAttribute("aria-expanded", "false");
    mobilePanel.hidden=true;
}

function openMenu(){
    nav__Toggle.setAttribute("aria-expanded", "true");
    mobilePanel.hidden=false;
}

nav__Toggle.addEventListener("click", ()=>{
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
});

.document.querySelectorAll(".panel-link, .panel-cta").forEach((a)=>{
    a.addEventListener("click", closeMenu)
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
})