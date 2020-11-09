const slideDiv = document.querySelector(".main-slide");
const slideNav = document.querySelector(".slideNav");

var slideIndex = 1;

function switchSlide(n){
    showSlide(slideIndex += n);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("showedDiv");
    
    if(n > slides.length) // max next
    {
        slideIndex = 1;
    }
    if(n < 1) // min prev
    {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++) // slides none display
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

function changeNum(n){
    return slideIndex;
}

function makeSliderNav(slideIndex){
    const navDiv1 = document.createElement("div"); // css background image
    const numNav = document.createElement("div");
    const navDiv2 = document.createElement("div"); // css background image
    const prev = document.getElementsByClassName("prev"); // return arr
    const next = document.getElementsByClassName("next"); // return arr
    const nowSpan = document.createElement("span");
    const middleSpan = document.createElement("span");
    const lastSpan = document.createElement("span");
    const slide = document.getElementsByClassName("showedDiv");

    // nowSpan.classList.add("now");
    nowSpan.innerHTML = 1;
    middleSpan.innerHTML = " / ";
    lastSpan.innerHTML = slide.length;
    numNav.appendChild(nowSpan);
    numNav.appendChild(middleSpan);
    numNav.appendChild(lastSpan);

    navDiv1.classList.add("prev");
    navDiv2.classList.add("next");

    navDiv1.innerText = "prev";
    navDiv2.innerText = "next";

    slideNav.appendChild(navDiv1);
    slideNav.appendChild(numNav);
    slideNav.appendChild(navDiv2);

    prev[0].onclick = function() {
        switchSlide(-1);
        nowSpan.innerHTML = changeNum(slideIndex);
    };
    next[0].onclick = function() {
        switchSlide(1);
        nowSpan.innerHTML = changeNum(slideIndex);
    };
}

function makeSlider(){ // make div, make image fucntion
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");

    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();

    div1.classList.add("showedDiv");
    div2.classList.add("showedDiv");
    div3.classList.add("showedDiv");
    div4.classList.add("showedDiv");

    img1.classList.add("slideImg");
    img2.classList.add("slideImg");
    img3.classList.add("slideImg");
    img4.classList.add("slideImg");

    img1.src = `img/1.jpg`;
    img2.src = `img/2.jpg`;
    img3.src = `img/3.jpg`;
    img4.src = `img/4.jpg`;

    div1.prepend(img1);
    div2.prepend(img2);
    div3.prepend(img3);
    div4.prepend(img4);

    slideDiv.appendChild(div1);
    slideDiv.appendChild(div2);
    slideDiv.appendChild(div3);
    slideDiv.appendChild(div4);
}

function init(){
    makeSlider();
    makeSliderNav(slideIndex);
    showSlide(slideIndex);
}

init();