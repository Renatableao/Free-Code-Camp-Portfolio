function menu() {
    const navbar = document.getElementById("navbar");
    const navlist = document.getElementById("nav-links");
    const backdrop = document.getElementById("backdrop");
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        navlist.classList.remove("show");
        backdrop.classList.remove('drop');
    }
    else {
        navbar.classList.add("open");
        navlist.classList.add("show");
        backdrop.classList.add('drop');
    }
}

function reveal() {
    document.getElementById("welcome-section").style.marginTop = "0";
    document.getElementById("name").style.opacity = "1";
    document.getElementById("devop").style.opacity = "1";

}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight/2 || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function changeonscroll() {
    for(let i=1; i < 7; i++) {
        const time = document.getElementById(i);
        document.addEventListener('scroll', function () {
            if (isInViewport(time) == true) {
                time.style.opacity = "0.8";
            }
            else {
                time.style.opacity = "0.2";
            }
})}}

function start() {
    reveal();
    changeonscroll();
}

