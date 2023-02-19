// Toggle icon in navbar
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar')

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// For Active section display

let sections= document.querySelectorAll('section')
let navlinks= document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top= window.scrollY;
        let offset=  sec.offsetTop -150;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });
        };
    });
    // Sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);

    // Remove toggle icon and navbar when clicked

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


// Scroll Reveal

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration:1500,
    delay: 100
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.my-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p , .about-content',{ origin: 'right' });


//Typed Js

const typed = new Typed('.multiple-text',{
    strings: ['Web Developer', 'CyberSecurity Engineer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});





    
