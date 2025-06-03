const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
    
  });
};
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
    
  });
};
var typed = new Typed('#element', {
  strings: ['Web Designer.', 'Frontend Developer.'],
  typeSpeed: 50,
  loop:true,
});
const scrollContainer = document.getElementById('scrollContainer');
let scrollInterval;

function autoScroll() {
    scrollContainer.scrollTop += 1;
    if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
        scrollContainer.scrollTop = 0;
    }
}

scrollContainer.addEventListener('mouseover', () => {
    scrollInterval = setInterval(autoScroll, 5); // Adjust the interval as needed
});

scrollContainer.addEventListener('mouseout', () => {
    clearInterval(scrollInterval);
});



gsap.from("#navbar li",
  {
    y:-100,
    stagger:0.3,
    duration:1,
   
  }
);
gsap.from("#Header a",
  {
    y:-100,

    duration:1,
   
  }
);
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
