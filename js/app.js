/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let nav_list = document.getElementById("navbar__list");
const landing_sections = document.getElementsByClassName("landing__container");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(element) {
    //  Get it's position in the viewport of the given element(any element)
    var boundings = element.getBoundingClientRect();
    return (
        boundings.top >= 0 &&
        boundings.left >= 0 &&
        boundings.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        boundings.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// first we check the number of sections from the landing__container class as it is same for every section
// we find the number of sections using length method

var no_sections = landing_sections.length;
// console.log(no_sections);
for(var i = 1; i <= no_sections; i++){
    //
    nav_list.innerHTML +=  "<li style='padding:1vw;' class='navbar' id='navsection"+i+"'><a style='text-decoration:none; color:white;' href='#section"+i+"'>Section "+i+"</a></li>";
}


// Add class 'active' to section when near top of viewport

function activate(element) {
  var result =  isInViewport(element);

    if(result){
        element.parentElement.classList.add("your-active-class");
    }else{
        element.parentElement.classList.remove("your-active-class");
    }
    
}
  


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// already added directly into the nav_list(li and a tags)
// give background to navigation bar header

var header = document.querySelector(".page__header");
header.style.cssText = "background-color:#03113F;"
// Scroll to section on link click

let anchorlinks = document.querySelectorAll('a[href^="#"]')

for(let element of anchorlinks){
    element.addEventListener("click",(ele)=>{
        // clearing existing color of the nav item

        // clicking each section in nav bar
        ele.preventDefault();
        // get the hash of this element
        var hash = element.getAttribute("href");
        // select the element according to the hash
        var sec = document.querySelector(hash);
        // scrolling to the hash location
        sec.scrollIntoView({
            behavior:"smooth"
        });

    });


}


// Set sections as active

window.onscroll = function(){
    var sections = document.querySelectorAll(".landing__container")
    for(let a of sections){
        activate(a);
        console.log(a);
    }
}
