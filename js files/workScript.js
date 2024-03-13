gsap.registerPlugin(ScrollTrigger);
let navbar = document.querySelector('nav');
fetch('./navbar.html').then(res=>res.text()).then(data=>{navbar.innerHTML = data});

let mainSection = document.querySelector('#main')
let animePage = document.querySelector('#anime-page')

let projTabs = document.querySelectorAll(".tab");

function changeHeight(){
    console.log("hello")
    for(let i=2; i<=projTabs.length; i=i+2){
        projTabs[i-1].style.height = "14.8em"
    }
    for(let i=1; i<=projTabs.length; i=i+4){
        projTabs[i-1].style.height = "11.5em"
    }
    for(let i=3; i<=projTabs.length; i=i+4){
        projTabs[i-1].style.height = "7.8em"
    }
    animePage.style.height = mainSection.offsetHeight + "px";
}
window.addEventListener('load',changeHeight());
window.addEventListener('resize',()=>{
    animePage.style.height = mainSection.offsetHeight + "px";
});
// changeHeight();
// ScrollReveal().reveal('.tab , .page1-content h1 , #sticky .type-tab',{
//     distance : '500px',
//     duration : 2000
// })
// if use window.onload on some element then on that element gsap or scrollreveal does not work properly
projTabs.forEach(ele=>{
    gsap.from(ele,{
        y : 200,
        duration : 2,
        opacity : 0,
        scrollTrigger : {
            trigger : ele,
            scroller : "body",
            // markers : true,
            start : "top 95%",
            end : "30% 85%"
        }
    })
})
gsap.from('.page1-content h1',{
    yPercent : 300,
    duration : 2,
    opacity : 0,
})
gsap.from('#sticky .type-tab',{
    y : 300,
    duration : 2,
    opacity : 0,
})




