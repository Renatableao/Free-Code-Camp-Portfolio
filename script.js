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