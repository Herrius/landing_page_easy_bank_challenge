const btnHamburguer= document.querySelector('#btnHamburguer');
const header =document.querySelector('.header');
const overlay=document.querySelector('.overlay')
const fadeElement=document.querySelectorAll('.has-fade');
const body=document.querySelector('body');

btnHamburguer.addEventListener('click',function(){
    console.log('click hamburguer');
    if(header.classList.contains('open')){ //Close de hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElement.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }
    else{//Open de hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElement.forEach(function(element){
            element.classList.remove('fade-out'); 
            element.classList.add('fade-in'); 
        });
    }
});