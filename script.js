const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", ()=>{
    preloader.classList.add("remove");
});


//add open & close button from html
const close_btn  = document.querySelector(".close-btn");
const open_btn = document.querySelector(".open-btn");

//add navbar and overlay class or data
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");


// function call when open_btn click 
const open_navbar = function(){
   navbar.classList.add("active");
   overlay.classList.add("active");
}

// function call when close_btn click 
const close_navbar = function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

//when btn click then function call
open_btn.addEventListener("click",()=> open_navbar());
close_btn.addEventListener("click",()=> close_navbar());


header = document.querySelector("[data-header]");

window.addEventListener("scroll", ()=>{
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

