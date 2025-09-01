// document.addEventListener('DOMContentLoaded', () => {
//   const image = document.getElementById("charBox");
//   let currentVisible = null; 

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         image.src = entry.target.dataset.img;
//       } 
//     });
//   }, { threshold: 1 });

//   document.querySelectorAll('.manChar').forEach(el => {
//     observer.observe(el);
//   });
// });