const body = document.querySelector('body');
const nav = document.getElementById('header');
const navbarBrand = document.getElementById('navbarBrand');
const toggle = document.getElementById('toggleDark');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.transition = '0.2s linear';
        body.style.background = 'white';
        body.style.color = 'black';
        nav.style.background = '#ddd';
        navbarBrand.style.color = 'black';
    }else{
        body.style.transition = '0.2s linear';
        body.style.background = 'black';
        body.style.color = 'white';
        nav.style.background = '#333';
        navbarBrand.style.color = 'white';
    }
});