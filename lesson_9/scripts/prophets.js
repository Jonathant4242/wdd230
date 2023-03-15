const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets); - used to test data
  displayProphetData(data.prophets);
}

getProphetData(url);

function displayProphetData(prophets) {
  const cards = document.querySelector("div.cards"); // select the div with the class of cards

  prophets.forEach((prophet) => {
    let card = document.createElement("section"); // create a section element
    let h2 = document.createElement("h2"); // create an h2 element
    let birthdate = document.createElement("p"); // create a p element
    let birthplace = document.createElement("p"); // create a p element
    let death = document.createElement("p"); // create a p element
    let length = document.createElement("p"); // create a p element
    let order = document.createElement("p"); // create a p element
    let numofchildren = document.createElement("p"); // create a p element
    let image = document.createElement("img"); // create an img element
    let portrait = document.createElement("img"); // create an img element



    h2.textContent = `${prophet.name} ${prophet.lastname}`; // set the text content of the h2 element
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`; // set the text content of the p element
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`; // set the text content of the p element
    numofchildren.textContent = 'Children: ' + prophet.numofchildren; // set the text content of the p element
    length.textContent = 'Prophet Years: ' + prophet.length; // set the text content of the p element
    death.textContent = 'Date of Death: ' + prophet.death; // set the text content of the p element
    
    image.setAttribute("src", prophet.imageurl); // set the src attribute of the img element
    image.setAttribute("alt", `${prophet.name} ${prophet.lastname} - ${prophet.order}`); // set the alt attribute of the img element

    portrait.setAttribute("src", prophet.portraiturl); // set the src attribute of the img element
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`); // set the alt attribute of the img element
    portrait.setAttribute("loading", "lazy"); // set the loading attribute of the img element
    portrait.setAttribute("width", "340"); // set the width attribute of the img element
    portrait.setAttribute("height", "440"); // set the height attribute of the img element


    // I had to use the following code to make sure the images loaded before appending them to the section element or else the images would load the image and the alt text next to it.
    image.addEventListener("load", () => {
      card.appendChild(image); // append the img element to the section element
    });

    image.addEventListener("error", () => {
      card.appendChild(portrait); // append the portrait img element to the section element
    });

    card.appendChild(h2); // append the h2 element to the section element
    card.appendChild(birthdate); // append the p element to the section element
    card.appendChild(birthplace); // append the p element to the section element
    

    cards.appendChild(card); // append the section element to the div element with the class of cards
  });
}

// Path: lesson_9/scripts/prophets.js