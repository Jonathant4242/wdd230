 // Define an array of image sources to cycle through
 const images = ['evening-reflections-newport-beach-pier-cliff-wassmann.jpg', 'pexels-dmitry-smolyanitsky-15229015 (3).jpg'];

 // Set the index of the current image to display
 let currentImageIndex = 0;

 // Function to switch to the next image
 function switchImage() {
   currentImageIndex = (currentImageIndex + 1) % images.length;
   const pictureEl = document.querySelector('picture');
   pictureEl.querySelector('source').srcset = images[currentImageIndex];
   pictureEl.querySelector('img').src = images[currentImageIndex];
 }

 // Call the switchImage function every 45 seconds
 setInterval(switchImage, 45000);

