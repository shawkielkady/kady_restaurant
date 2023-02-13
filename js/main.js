let searchbtn= document.querySelector(".searchi");
let searchbox=document.querySelector(".searchbox");
let closebox=document.querySelector(".closebox");
searchbtn.onclick= function(){
searchbox.classList.add("active");
}
closebox.onclick= function(){
    searchbox.classList.remove("active");
    }
var slide=Array.from(document.querySelectorAll(".slider .landing")); 
console.log(slide)
var indexvalue=2;
var slidecount=slide.length;
var nextbtn=document.querySelector(".fa-angle-right");
var prevtbtn=document.querySelector(".fa-angle-left")
var bullets=Array.from(document.querySelectorAll(".bullets li")); 
nextbtn.onclick=nextslide;
prevtbtn.onclick=prvslide;
checker();

function nextslide(){
  if(indexvalue==3){
    indexvalue--;
  }
 /* if(nextbtn.classList.contains("disabled")){
  }*/
  else{
    indexvalue++;  
      checker();
      }
}
function prvslide(){
  if(indexvalue==1){
  indexvalue++;
  }
  
  /*if(prevtbtn.classList.contains("disabled")){
        
  }*/
  else{
  indexvalue--;  
  checker();
}}
function checker(){
  removeactive();
  //set active class oncurrent slide
  slide[indexvalue-1].classList.add("active");
  //set active class on bullets 
  bullets[indexvalue-1].classList.add("active");


}
function removeactive(){
  slide.forEach(function(slide){
    slide.classList.remove("active")
  });
  bullets.forEach(function(bull){
    bull.classList.remove("active")
  });
}
var logo=document.querySelector(".logo");
let nav = document.querySelector(".nav");
let close = document.querySelector(".close");

logo.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};
var stat=document.querySelector(".stat");
var box=document.querySelectorAll(".stat .box")
var num=document.querySelectorAll(".stat .box .number");
var started=false;
window.onscroll=function(){
  if(window.scrollY>=stat.offsetTop){
    if(!started){
      num.forEach((num)=>{
        startcount(num)
      })
      started=true;

    }

  }
}
console.log(box.length);
function startcount(ele){
  let goal=ele.dataset.goal;
  let counter=setInterval(() => {
    ele.textContent++;
    if(ele.textContent==goal){
      clearInterval(counter);
    }
  }, 2);
}