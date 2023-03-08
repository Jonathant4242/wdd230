//Selecting all the images with data-src attribute.
let loadPictures = document.querySelectorAll('img[data-src]');

//loading the images removing the attribute data-src
const loadImg = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// Set the initial `src` attribute value for all images to the placeholder image URL.
loadPictures.forEach((img) => {
  img.setAttribute('src', 'http://placekitten.com/300/300');
});

// Parameters for the image to load on the window.
const imgPerameters = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px"
};

// Check if the IntersectionObserver API is supported by the browser.
if ('IntersectionObserver' in window) {
  // Create a new IntersectionObserver instance.
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImg(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgPerameters);

  // Observe all images with a `data-src` attribute.
  loadPictures.forEach((img) => {
    observer.observe(img);
  });
} else {
  // If the IntersectionObserver API is not supported, load all images immediately.
  loadPictures.forEach((img) => {
    loadImg(img);
  });
}
