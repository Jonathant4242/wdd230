
//Selecting all the images with data-src attribute.
let imagesToLoad = document.querySelectorAll('img[data-src]');

//loading the images removing the attrbute data-src
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
// Parameters for the image to load on the window.
const imgOptions = {threshold: 1,
    rootMargin: "0px 0px -100px 0px"};

// IF is to check if the intersectionObserver is supported. ELSE load the image. 
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target); //instructs the IntersectionObserver
        }
      });
    }, imgOptions); //imageOptions providing the permators for IntersectionObserver
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {     //IntersectionObserver isn't supported then it will just load the the images
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  };