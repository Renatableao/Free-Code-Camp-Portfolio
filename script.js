function menu() {
    const navbar = document.getElementById("navbar");
    const navlist = document.getElementById("nav-links");
    const backdrop = document.getElementById("backdrop");
    if (navbar.classList.contains("opennav")) {
        navbar.classList.remove("opennav");
        navlist.classList.remove("shownavlist");
        backdrop.classList.remove('opendrop');
    }
    else {
        navbar.classList.add("opennav");
        navlist.classList.add("shownavlist");
        backdrop.classList.add('opendrop');
    }
}

function reveal() {
    document.getElementById("welcome-section").style.marginTop = "0";
    document.getElementById("name").style.opacity = "1";
    document.getElementById("occupation").style.opacity = "1";

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
    const times = document.getElementsByClassName("time");
    for (const time of times) {
        document.addEventListener('scroll', function () {
            if (isInMiddleViewport(time)) {
                time.style.opacity = "0.8";
            }
            else {
                time.style.opacity = "0.2";
            }
})}}


function changeonhover() {
    
    
    for (let i=1; i<10; i++) {
        document.addEventListener('scroll', function () {
        const sets = document.getElementsByClassName("icon-set");
        /*Calculation of stroke percent: .icon-box:nth-child(i) --> stroke-dashoffset: calc(260 - (260 * % / 100));*/
        const percent = ['182', '182','156','118','93','130','93','208','143'];
        const classes = ["dot1", "dot2", "dot3", "dot4", "dot5", "dot6", "dot7", "dot8", "dot9"];
                if (isInBottomViewport(sets[i-1])) 
                {
                    document.getElementById(i*10).style.strokeDashoffset = percent[i-1]; 
                    document.getElementById(i).classList.add(classes[i-1]);
                }
                else 
                {
                    document.getElementById(i*10).style.strokeDashoffset = "260";
                    document.getElementById(i).classList.remove(classes[i-1]);
                }
})}}

function start() {
    reveal();
    changeonscroll();
    changeonhover();
}

