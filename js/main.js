let header = document.querySelector("header");
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = "#333"; 
    } else {
        header.style.backgroundColor = "unset"; 
    }
});

let pics = document.querySelectorAll('.pic');
let All = document.querySelector(".liOne");
let graphic = document.querySelector(".liTwo");
let graphicPhoto = document.querySelectorAll("#graphic");
let web = document.querySelector(".liThree");
let webPhoto = document.querySelectorAll(".web");
let branding = document.querySelector(".liFour");
let brandingPhoto = document.querySelectorAll(".branding");
All.onclick = function(){
  pics.forEach(function(ele){
    ele.style.display = "block";
  })
}
graphic.onclick = function(){
  pics.forEach(function(ele){
    ele.style.display = "none";
  })
 graphicPhoto.forEach(function(ele){
  ele.style.display = "block";
 })
}
web.onclick = function(){
  pics.forEach(function(ele){
    ele.style.display = "none";
  })
   webPhoto.forEach(function(ele){
    ele.style.display= "block";
   })
}
branding.onclick = function(){
  pics.forEach(function(ele){
    ele.style.display = "none";
  })
   brandingPhoto.forEach(function(ele){
    ele.style.display= "block";
   })
}



let firstInput = document.querySelector(".inOne");
let secondInput = document.querySelector(".inTwo");
let thridInput = document.querySelector(".inThree");
let fourInput = document.querySelector(".inFour");
let firstP = document.querySelector(".fp");
let secondP = document.querySelector(".sp");
let thridP = document.querySelector(".tp");
let fourP = document.querySelector(".up");
let myButton = document.querySelector(".button");
myButton.addEventListener("click" , function(){
  if(firstInput.value === ""){
    firstP.style.display = "block";
  }
  if(secondInput.value === ""){
    secondP.style.display = "block";
  }
  if(thridInput.value === ""){
    thridP.style.display = "block";
  }
  if(fourInput.value === ""){
    fourP.style.display = "block";
  }
})


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  iconColor: 'red',
  color : 'red',
  title: "Signed in successfully"
});


var options = {
  strings: ["developer", "designer"],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1000,
  startDelay: 500,
  loop: true
};

var typed = new Typed("#typed-output", options);
