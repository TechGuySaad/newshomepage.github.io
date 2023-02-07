


let menu_collection = document.getElementsByClassName("inactive-btn");
let inactive_menu_button = menu_collection[0];
// console.log(v);
inactive_menu_button.addEventListener("click", () => {
   var  responsive_menu = document.getElementsByClassName("responsive-menu");
   responsive_menu[0].style.visibility = "visible"; 
    console.log("hi");
});



let responsive_collection = document.getElementsByClassName("active-btn");

let cross_menu_button = responsive_collection[0];
// console.log(cross_menu_button)

cross_menu_button.addEventListener("click", () => {

    var  responsive_menu = document.getElementsByClassName("responsive-menu");
   responsive_menu[0].style.visibility = "hidden"; 

});
