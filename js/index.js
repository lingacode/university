//Sticky Navbar
window.onscroll = function(){myFunction()};
var navbar_header = document.querySelector(".header2");
var stk = navbar_header.offsetTop;

function myFunction(){
    if(window.pageYOffset > stk){
        navbar_header.classList.add("sticky");
    }
    else{
        navbar_header.classList.remove("sticky");
    }
}