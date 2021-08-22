"use strict";

//make navbar transparent when scroll is on the top

const navbar=document.querySelector("#navbar");
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add("navbar--dark");
    }
    else{
        navbar.classList.remove("navbar--dark");
    }
});



//Navbar toggle button for small screen
const navbarToggleBtn=document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click",()=>{
    navbarMenu.classList.toggle("open");
    /*console.log("click");*/
});



//Make hoeme slowy fade to transparent as the window scroll down
const home=document.querySelector("#home");
const homeHeight=home.getBoundingClientRect().height;

document.addEventListener("scroll",()=>{
    home.style.opacity=1-window.scrollY/homeHeight;
});

/*Show arrow up button when scrolling down*/
const arrowUp=document.querySelector(".arrow-up");
document.addEventListener("scroll",()=>{
    if(window.scrollY>homeHeight/2){
        arrowUp.classList.add("visible");
    }
    else{
        arrowUp.classList.remove("visible");
    }
});

/*Handle click on the arrow up button*/
arrowUp.addEventListener("click",()=>{
    scrollIntoView("#home");
})


/*멤버*/

const workBtnContainer=document.querySelector(".members__categories");
const projectContainer=document.querySelector(".members__elements");
const projects=document.querySelectorAll(".element");
workBtnContainer.addEventListener("click",(e)=>{
    const filter=e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null){
        return;
    }

    //Remove selection from the previous time and select the new one
    const active=document.querySelector('.category__btn.selected');
    active.classList.remove("selected");

    const target=
    e.target.nodeName==="BUTTON"? e.target:e.target.parentNode;
    target.classList.add('selected');

    //console.log(filter);
    projectContainer.classList.add("anim-out");


    setTimeout(()=>{


        projects.forEach((project)=>{
            if(filter==="*"||project.dataset.type.includes(filter)){
                project.classList.remove("invisible");
            }
            else{
                project.classList.add("invisible");
            }
        });

        projectContainer.classList.remove("anim-out");
    },300)

})




//https://www.youtube.com/watch?v=RsPWEmfOQdU



const sections=document.querySelectorAll("section");
const navLi=document.querySelectorAll("nav .navbar__menu li");
//console.log(navLi);

window.addEventListener("scroll",()=>{
    let current='';
    //console.log(pageYOffset);
    sections.forEach(section=>{
        const sectionTop=section.offsetTop;
        //console.log(sectionTop);
        const sectionHeight=section.clientHeight;
        if (pageYOffset>=(sectionTop-10)){
            current=section.getAttribute("id");
        }


    })
    //console.log(current);

    navLi.forEach(li=>{

        li.classList.remove("active");
        //console.log(li.dataset.link);
        const data_link=li.dataset.link;
        //console.log(data_link);
        if(data_link.includes(current)){
            //console.log(data_link);
            li.classList.add("active");

        }
    })
});


function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    //console.log(scrollTo);
    scrollTo.scrollIntoView(
        {block:"start",
        behavior:"smooth"});
}

//Handle scrolling when tapping on the navbar menu
const navbarMenu=document.querySelector(".navbar__menu");
//const navbaractive=document.querySelector(".navbar__menu__item.active");
window.addEventListener("click",(event)=>{
    const target=event.target;
    //console.log("target : ",target);

    const link=target.dataset.link;
    //console.log("linK : ",link);
    if (link==null){
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link)
    


});