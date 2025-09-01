document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById("charBox");
//   const defaultImage = "img/chars.gif"
  let currentVisible = null; 

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        image.src = entry.target.dataset.img;
      } 
    //   else if (!document.querySelector('.manChar:is(:is(:hover, :focus, :focus-within, :target, :active)')){
    //   image.src = defaultImage;
    //   }
    });
  }, { threshold: 1 });

  document.querySelectorAll('.manChar').forEach(el => {
    observer.observe(el);
  });
});


