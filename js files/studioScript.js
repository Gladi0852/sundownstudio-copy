gsap.registerPlugin(ScrollTrigger);
let nav = document.querySelector("nav");
let footer = document.querySelector("#footer");
let crsr = document.querySelector(".crsr");
var partnersContainer = document.querySelector(".partners");
var icon = document.querySelectorAll(".crsr i");
let heading = document.querySelectorAll(".page2 h1");
let desc = document.querySelectorAll(".left-content h5");
let container = document.querySelectorAll(".right-content .container");
let swiperSection = document.querySelector(".swiper-section");

// ---------------fetching navbar-------------------

fetch('./navbar.html').then(res=>res.text()).then(data=>{
    nav.innerHTML = data
})

// ----------------fetching footer------------------

let footerPage = async()=>{
    let footerData = await fetch('./footer.html');
    return footerData.text();
}

let footerData = await footerPage();
footer.innerHTML = footerData

footer.style.height = document.querySelector("footer").offsetHeight + 290 + "px"

// --------------------Events------------------

window.addEventListener('resize',()=>{
    footer.style.height = document.querySelector("footer").offsetHeight + "px"
});

partnersContainer.addEventListener("mouseenter", () => {
    crsr.style.width = "3em"
    crsr.style.height = "3em"
    icon[0].style.fontSize = "0.8em"
    icon[1].style.fontSize = "0.8em"

});

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
// ---------gsap-----------------

gsap.to(".page1 .header2 .photo img",{
    y : 20,
    scrollTrigger : {
        trigger : ".page1 .header2 .photo",
        scrub : 1,
        scroller : "body",
        // markers : true,
        start : "top 82%",
        end : "bottom 10%"
    }
})
var tl = gsap.timeline();
tl.from(".header h1",{
    yPercent : 100,
    opacity : 0,
    duration : 0.5,
    delay : 0.5
}).from(".header2",{
    y : 200,
    opacity : 0,
    duration : 1.5
})
gsap.from(".anime1",{
    opacity : 0,
    duration : 2,
    delay : 0.5
})


heading.forEach(ele=>{
    gsap.from(ele,{
        opacity : 0,
        yPercent : 100,
        duration : 1,
        scrollTrigger : {
            trigger : ele.parentNode,
            scroller : "body",
            // markers : true,
            start : "top 40%"
        }
    })
});

desc.forEach(ele=>{
    gsap.from(ele,{
        opacity : 0,
        y : 200,
        duration : 1,
        scrollTrigger : {
            trigger : ele.parentNode,
            scroller : "body",
            // markers : true,
            start : "top 70%"
        }
    })
});

container.forEach(ele=>{
    console.log(ele.nextElementSibling)
    gsap.from(ele.children,{
        opacity : 0,
        y : 200,
        duration : 0.5,
        scrollTrigger : {
            trigger : ele,
            scroller : "body",
            // markers : true,
            start : "top 70%"
        }
    });
    gsap.from(ele.nextElementSibling,{
        width : 0,
        opacity : 0,
        duration : 1,
        scrollTrigger : {
            trigger : ele,
            scroller : "body",
            // markers : true,
            start : "top 70%"
        }
    })
});

gsap.from(swiperSection,{
    opacity : 0,
    // y : 100,
    // when using "y" my custom cursor gets dislocated from actual cursor
    duration : 0.5,
    scrollTrigger : {
        trigger : swiperSection,
        scroller : "body",
        // markers : true,
        start : "top 60%"
    }
})
// ----------------swiper-------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 150,
    // centeredSlides: true,
  });