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

function isInMiddleViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight/2 || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isInBottomViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight/1.2 || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function changeonscroll() {
    for(let i=1; i < 7; i++) {
        const time = document.getElementById(i);
        document.addEventListener('scroll', function () {
            if (isInMiddleViewport(time)) {
                time.style.opacity = "0.8";
            }
            else {
                time.style.opacity = "0.2";
            }
})}}


function changeonhover() {
    for(let i=10; i < 19; i++) {

        /*Calculation of stroke percent: .icon-box:nth-child(i) --> stroke-dashoffset: calc(260 - (260 * % / 100));*/
        const percent = ['182', '182','156','118','93','130','93','208','143'];
        const classes = ["dot20", "dot22", "dot24", "dot26", "dot28", "dot30", "dot32", "dot34", "dot36"];
        const stroke = document.getElementById(i);
        document.addEventListener('scroll', function () {
            if (isInBottomViewport(stroke)) {
                document.getElementById(i*10).style.strokeDashoffset = percent[i%10]; 
                document.getElementById(i*2).classList.add(classes[i%10]);
                
            }
            else {
                document.getElementById(i*10).style.strokeDashoffset = "260";
                document.getElementById(i*2).classList.remove(classes[i%10]);
            }
})}}


function start() {
    reveal();
    changeonscroll();
    changeonhover();
}

