let about = document.querySelector('.abo');
let work = document.querySelector('.wo');
let contact = document.querySelector('.cont');
let aboutSec = document.querySelector('.about');
let workSec = document.querySelector('.project');
let contactSec = document.querySelector('.contact');

about.addEventListener("click",(e)=>{
    e.preventDefault();
    aboutSec.scrollIntoView({behavior: 'smooth'});
})

work.addEventListener("click",(e)=>{
    e.preventDefault();
    workSec.scrollIntoView({behavior: 'smooth'});
})

contact.addEventListener("click",(e)=>{
    e.preventDefault();
    contactSec.scrollIntoView({behavior: 'smooth'});
})