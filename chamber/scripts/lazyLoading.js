 //Selecting all the images with data-src attribute.
let loadPictures = document.querySelectorAll('img[data-src]');

//loading the images removing the attrbute data-src
const loadImg = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
// Parameters for the image to load on the window.
const imgPerameters = {threshold: 1,
    rootMargin: "0px 0px -100px 0px"};

// IF is to check if the intersectionObserver is supported, give permators. ELSE load the image. 
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if(item.isIntersecting) {
          loadImg(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgPerameters);
    loadPictures.forEach((img) => {
      observer.observe(img);
    });
  } else {     
    loadPictures.forEach((img) => {
      loadImg(img);
    });
  };