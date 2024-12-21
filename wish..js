// script.js

// Add a twinkling effect to the star
const star = document.querySelector('.star');
setInterval(() => {
  star.style.transform = `rotate(${Math.random() * 360}deg)`;
}, 1000);


