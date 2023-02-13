let sectionn =document.querySelector(".ourskills");
let spprog= document.querySelectorAll(".prog span");
window.onscroll=function() {
    if(window.scrollY>=sectionn.offsetTop){
        console.log("reached");
    }
};