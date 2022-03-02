// Variables
const burgerMenu = document.getElementById('navbar-toggler');
const burgerIcon = document.getElementById('navbar-icon'); 
let burgerBoolean = true;
const arrowIcon = document.querySelector('.first-arrow');
const arrowIconTwo = document.querySelector('.second-arrow');
const arrowIconThree = document.querySelector('.third-arrow');
const firstLink = document.querySelector('.first-link');
const secondLink = document.querySelector('.second-link');
const thirdLink = document.querySelector('.third-link');
let arrowBoolean = true;

// Change arrow position up to down
function changeArrowPosition(){
    firstLink.addEventListener("click", () => {
        if (arrowBoolean === true){
            arrowIcon.style.transform = "rotate(180deg)";
            arrowBoolean = false;
        } else if(arrowBoolean === false){
            arrowIcon.style.transform = "rotate(0deg)";
            arrowBoolean = true;
        }
    });
    secondLink.addEventListener("click", () => {
        if (arrowBoolean === true){
            arrowIconTwo.style.transform = "rotate(180deg)";
            arrowBoolean = false;
        } else if(arrowBoolean === false){
            arrowIcon.style.transform = "rotate(0deg)";
            arrowBoolean = true;
        }
    });
    thirdLink.addEventListener("click", () => {
        if (arrowBoolean === true){
            arrowIconThree.style.transform = "rotate(180deg)";
            arrowBoolean = false;
        } else if(arrowBoolean === false){
            arrowIcon.style.transform = "rotate(0deg)";
            arrowBoolean = true;
        }
    });
};

function resetArrowPositionIfOutside(){
    document.addEventListener('click', function(event) {
        var isClickInside = firstLink.contains(event.target);
        if (!isClickInside){
            arrowIcon.style.transform = "rotate(0deg)";
            arrowBoolean = true;
        }
    });

    document.addEventListener('click', function(event) {
        var isClickInside = secondLink.contains(event.target);
        if (!isClickInside) {
            arrowIconTwo.style.transform = "rotate(0deg)";
            arrowBoolean = true;
        }
    });

    document.addEventListener('click', function(event) {
        var isClickInside = thirdLink.contains(event.target);
        if (!isClickInside) {
            arrowIconThree.style.transform = "rotate(0deg)";
            arrowBoolean = true;
        }
    });
};

changeArrowPosition();
resetArrowPositionIfOutside();


// Change Burger Icon to cross
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