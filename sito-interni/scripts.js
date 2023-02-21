// Toggle Menu
document.querySelector('.menu-trigger').addEventListener("click", function() {
  document.body.classList.toggle('menu-open');
});

// Scroll Elements
window.addEventListener("scroll", function(){
  console.log(window.scrollY);
  if(window.scrollY > 300 ){
    document.body.classList.add('scrolled-down');
  } else{
    document.body.classList.remove('scrolled-down');
  }
});


//gsap animation

gsap.to(".logo", { top: 30, opacity: 1, duration: 1, ease: Power3.easeOut }); // duration
gsap.to(".hero__title ", { x: -100, duration: 3, delay: 0.3, ease: Power3.easeOut }); // ease
gsap.from(".hero", { scale: 0.7, opacity:0, duration: 4, ease: Power3.easeOut}); //from


let tl = gsap.timeline({  ease: Power3.easeOut });

tl
.from(".menu li", { opacity:0, y:20,duration:1.5, stagger: 0.2 })
.from(".fade-in", { opacity: 0, y:20, duration:2 }, "-=2")


// let message = "hey ciao sono il messaggio!"; // stringa
// let scrollPositon = 301; // numero
//
// console.log(message);
// console.log(scrollPositon);
//
// if(scrollPositon > 300){
//   console.log("ho scrollato più di 300 px");
// } else {
//   console.log("ho scrollato menu di 300 px");
// }
//
//
// function messaggioBenvenuto(nomeUtente){
//   console.log("ciao sono felice di vederti! " + nomeUtente);
// }
//
// messaggioBenvenuto("Andrea");
// messaggioBenvenuto("Filippo");
//
//
// let logoSite = document.querySelector('.logo');
// logoSite.style.border = "1px solid red";















// end file
