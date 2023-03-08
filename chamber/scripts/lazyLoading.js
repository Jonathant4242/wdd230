// Selecting all the images with data-src attribute.
let loadPictures = document.querySelectorAll('img[data-src]');

// Loading the images, setting placeholder image as src and removing the data-src attribute
const loadImg = (image) => {
  // Set the placeholder image as the src attribute
  image.setAttribute('src', 'http://placekitten.com/300/300');
  // Set the actual image as the src attribute once it's loaded
  const imgSrc = image.getAttribute('data-src');
  const img = new Image();
  img.onload = () => {
    image.setAttribute('src', imgSrc);
    image.removeAttribute('data-src');
  };
  img.src = imgSrc;
};

// Parameters for the image to load on the window.
const imgParameters = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px"
};

// If is to check if the intersectionObserver is supported, give parameters. Else load the image. 
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImg(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgParameters);
  loadPictures.forEach((img) => {
    observer.observe(img);
  });
} else {     
  loadPictures.forEach((img) => {
    loadImg(img);
  });
}
