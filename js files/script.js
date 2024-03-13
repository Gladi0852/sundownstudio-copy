let navbar = document.querySelector('nav');
fetch('./navbar.html').then(res=>res.text()).then(data => {navbar.innerHTML = data});

// ---------fetch footer--------------
let footerPage = async()=>{
    let footerData = await fetch('./footer.html');
    return footerData.text();
}

let footerData = await footerPage();
footer.innerHTML = footerData

footer.style.height = document.querySelector("footer").offsetHeight + 290 + "px"
window.addEventListener('resize',()=>{
    footer.style.height = document.querySelector("footer").offsetHeight + "px"
});



// let footer = document.querySelector('#footer');
// let footerPage = document.querySelector('.page7')
// footerPage.style.height = footer.offsetHeight + "px";

// window.addEventListener('resize',()=>{
    // footerPage.style.height = footer.offsetHeight + "px";
// })

gsap.registerPlugin(ScrollTrigger);

let page6 = document.querySelector(".page6");
let crsr = document.querySelector(".crsr");

var brp = document.querySelector(".brand-photo");
var brpVideo = document.querySelector(".brand-photo video");
// brpVideo.src = './Resources/play new kid video.mp4';


var proj = document.querySelectorAll(".page4 .proj");
var projContainer = document.querySelector(".page4 .proj-container");

projContainer.addEventListener('mouseenter', () => {
    brp.style.display = "block"
})
projContainer.addEventListener('mouseleave', () => {
    brp.style.display = "none"
});
var typeAttr;
var valueAttr;
var projHeight;
proj.forEach((ele) => {
    ele.addEventListener('mouseenter', () => {
        projHeight = window.getComputedStyle(ele,"::before")
        ele.style.setProperty('--projHeight','100%')
        typeAttr = ele.getAttribute("backgroundType")
        valueAttr = ele.getAttribute("backgroundValue")
        if(typeAttr == "photo"){
            brp.style.backgroundImage = `url("${valueAttr}")`
        }
        else{
            brpVideo.src = valueAttr
        }
    })
    ele.addEventListener('mouseleave', () => {
        brpVideo.src = ""
        ele.style.setProperty('--projHeight','0')
    })
});

var workIntro = document.querySelectorAll(".page5 .works-wrapper .intro h3");
var workPara = document.querySelector(".page5 .works-wrapper .intro p");
let desString = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
let proString = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
let exeString = "We're with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
var workPhoto = document.querySelector(".works-wrapper .image img");

workIntro.forEach((ele) => {
    ele.addEventListener('click', () => {
        if (ele.className == "des" && !ele.classList.contains("active")) {
            workIntro[1].style.borderColor = "#504a45";
            workIntro[2].style.borderColor = "#504a45";
            ele.style.borderColor = "#fe340b";
            workPara.innerHTML = desString;
            workPhoto.src = "./Resources/design-photo.webp";
            ele.style.color = "#fff";
            ele.classList.add("active");
            if (workIntro[1].classList.contains("active")) {
                workIntro[1].classList.remove("active");
                workIntro[1].style.color = "#504a45";

            }
            if (workIntro[2].classList.contains("active")) {
                workIntro[2].classList.remove("active");
                workIntro[2].style.color = "#504a45";
            }

            gsap.from(".works-wrapper .intro p,.works-wrapper .image img", {
                opacity: 0,
                // duration : 1,
                delay: 0.3,
            })
        }
        if (ele.className == "pro" && !ele.classList.contains("active")) {
            workIntro[0].style.borderColor = "#504a45";
            workIntro[2].style.borderColor = "#504a45";
            ele.style.borderColor = "#fe340b";
            workPara.innerHTML = proString;
            workPhoto.src = "./Resources/project-photo.webp";
            ele.style.color = "#fff";
            ele.classList.add("active");
            if (workIntro[0].classList.contains("active")) {
                workIntro[0].classList.remove("active");
                workIntro[0].style.color = "#504a45";
            }
            if (workIntro[2].classList.contains("active")) {
                workIntro[2].classList.remove("active");
                workIntro[2].style.color = "#504a45";
            }

            gsap.from(".works-wrapper .intro p,.works-wrapper .image img", {
                opacity: 0,
                // duration : 1,
                delay: 0.3,
            })
        }
        if (ele.className == "exe" && !ele.classList.contains("active")) {
            workIntro[0].style.borderColor = "#504a45";
            workIntro[1].style.borderColor = "#504a45";
            ele.style.borderColor = "#fe340b";
            workPara.innerHTML = exeString;
            workPhoto.src = "./Resources/execution photo.webp";
            ele.style.color = "#fff";
            ele.classList.add("active");
            if (workIntro[0].classList.contains("active")) {
                workIntro[0].classList.remove("active");
                workIntro[0].style.color = "#504a45";
            }
            if (workIntro[1].classList.contains("active")) {
                workIntro[1].classList.remove("active");
                workIntro[1].style.color = "#504a45";
            }

            gsap.from(".works-wrapper .intro p,.works-wrapper .image img", {
                opacity: 0,
                // duration : 1,
                delay: 0.3,
            })
        }
    })
});

gsap.to(".works-wrapper .image img", {
    y: 200,
    scrollTrigger: {
        trigger: ".works-wrapper",
        scroller: "body",
        // markers : true,
        scrub: 2,
        start: "top 95%",
        end: "bottom 10%"
    }
});

var partnersContainer = document.querySelector(".partners");
var icon = document.querySelectorAll(".crsr i");

partnersContainer.addEventListener("mouseenter", () => {
    crsr.style.width = "3em"
    crsr.style.height = "3em"
    icon[0].style.fontSize = "0.8em"
    icon[1].style.fontSize = "0.8em"

})
partnersContainer.addEventListener("mouseleave", () => {
    crsr.style.width = "0px"
    crsr.style.height = "0px"
    icon[0].style.fontSize = "0px"
    icon[1].style.fontSize = "0px"
});
partnersContainer.addEventListener("mousemove", (e) => {
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"
});
// var lineParent = document.querySelectorAll("#footer .links a");


// lineParent.forEach((e)=>{
//     //CSS pseudo-element is not like a normal element it is a computed element so to get the style of this 
//     //you can use the getComputedStyle() method, this method will take two parameters one is the main element 
//     //and the second one is the pseudo-class.
//     var line = window.getComputedStyle(e,"::after");
//     e.addEventListener("mouseenter",()=>{
//         // to change pseudo element's style we have to do like this, after width is variable and 100% is value. to see css check line no. 486
//         e.style.setProperty('--afterwidth','100%')
//         e.style.setProperty('--afterleft','0')
//         e.style.setProperty('--afterright','unset')
//         })
//     e.addEventListener("mouseleave",()=>{
//         e.style.setProperty('--afterwidth','0')
//         e.style.setProperty('--afterright','0')
//         e.style.setProperty('--afterleft','unset')
//     })
// })

let projHeading = document.querySelectorAll(".proj h3");

projHeading.forEach((ele)=>{
    gsap.from(ele,{
        y : 100,
        scrollTrigger : {
            trigger : ele
        }
    })
    gsap.from(ele.nextElementSibling,{
        y : 100,
        scrollTrigger : {
            trigger : ele
        }
    })
    gsap.from(ele.parentNode.parentNode.nextElementSibling,{
        width : "10px",
        scrollTrigger : {
            trigger : ele
        }
    })
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 150,
    // centeredSlides: true,
  });

gsap.from(".page6 .fea , .page6 .swiper-wrapper",{
    y : 300,
    scrollTrigger : {
        trigger : ".page6",
        // markers : true,
        start : "top 85%",
        end : "top 75%",
        scroller : "body"
    }
});
let count = 0;
function scroll(){
    body.style.setProperty('--displayblock','block')
}
var loader = document.querySelector('#loader');
let body = document.querySelector('body');
let loaderH1 = document.querySelectorAll("#loader h1");
var sc = window.getComputedStyle(body,"::-webkit-scrollbar");
var tl = gsap.timeline();
tl.to(loaderH1[0],{
    opacity : 1
}).to(loaderH1[0],{
    opacity : 0
}).to(loaderH1[1],{
    opacity : 1
}).to(loaderH1[1],{
    opacity : 0
}).to(loaderH1[2],{
    opacity : 1
}).to(loaderH1[2],{
    opacity : 0
}).to(loader,{
    height : 0,
    duration : 0.1
}).call(scroll)


