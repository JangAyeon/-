"use strict";



//Handle scrolling when tapping on the navbar menu

const navbarMenu=document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click",(event)=>{
    const target=event.target;
    const link=target.dataset.link;
    if (link==null){
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
});

//Navbar toggle button for small screen
const navbarToggleBtn=document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click",()=>{
    navbarMenu.classList.toggle("open");
    console.log("click");
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


/*Projects*/

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

function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});

}