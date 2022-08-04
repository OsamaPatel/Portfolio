var x = document.getElementById('nav-li');
var y = document.getElementById('hambtn');
function showMe(){
    y.classList.toggle('fa-xmark');
    x.classList.toggle('show');
}

const navLink = document.querySelectorAll('#navli');

function linkAction(){
    const navMenu = document.getElementById('nav-li');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.style.display='none';
    y.classList.remove('fa-xmark');
    y.classList.add('fa-bars');

}

navLink.forEach(n => n.addEventListener('click', linkAction))