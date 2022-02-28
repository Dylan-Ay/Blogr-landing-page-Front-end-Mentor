// Variables
const burgerMenu = document.getElementById('navbar-toggler');
const burgerIcon = document.getElementById('navbar-icon');
let burgerBoolean = true;

function changeBurgerIcon(){
    burgerMenu.addEventListener("click", () => { 
        if (burgerBoolean === false){
            burgerIcon.style.backgroundImage = "url('images/icon-hamburger.svg')";
            burgerBoolean = true;
        } else{
            burgerIcon.style.backgroundImage = "url('images/icon-close.svg')";
            burgerBoolean = false;
        }
      });
};

changeBurgerIcon();