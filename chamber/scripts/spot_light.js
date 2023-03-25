
const dataUrl = 'https://jonathant4242.github.io/wdd230/chamber/data.json';

async function getBusinessInformation() {
  const response = await fetch(dataUrl);
  const data = await response.json();
  const shuffledBusinesses = shuffleArray(data.businessInfo);
  const filteredBusinesses = shuffledBusinesses.filter(business => business.name); // filter out businesses that don't have a name key
  displayBusinessInformationCards(filteredBusinesses);
}

getBusinessInformation();
// This function takes an array as an argument and shuffles original array.
function shuffleArray(array) {
  // Make a copy of the original array.
  const shuffledArray = [...array];
  // Loop through the array backwards starting from the second-to-last element.
  for (let i = shuffledArray.length - 1; i > 0; i--) {
  // Pick a random index between 0 and i (inclusive).
  const j = Math.floor(Math.random() * (i + 1));
  // Swap the current element with the randomly chosen element.
  [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
  }


function displayBusinessInformationCards(businesses, displayAll) {
  const spotDiv = document.querySelector('div.spotlight');
  let goldCount = 0;
  let silverCount = 0;
  let businessCount = 0;

  // filter out businesses that don't have a name key
  const filteredBusinesses = businesses.filter(business => business.name);

  // create spotlight for each business in the array
  // keys: name, imageurl, membershipLevel, url
  filteredBusinesses.forEach((business, index) => {
    if (businessCount >= 3 && !displayAll) {
      return; // exit forEach loop once 3 businesses are displayed
    }

    // check if the business has a name key
      // create spotlight element
    if (business.membershipLevel === "Gold" && goldCount < 2) {
      if (business.name) { 
        // check if the business has a name key
        // create spotlight element
        let spotlight = createSpotlightElement(business, goldCount + 1);
        if (spotlight) {
          spotDiv.appendChild(spotlight);
          goldCount++;
          businessCount++;
        }
      }
      // check if the business has a name key
      // create spotlight element
    } else if (business.membershipLevel === "Silver" && silverCount < 1) {
      if (business.name) { 
        let spotlight = createSpotlightElement(business, goldCount + silverCount + 1);
        if (spotlight) {
          spotDiv.appendChild(spotlight);
          silverCount++;
          businessCount++;
        }
      }
    }
  });

  // check if the business to display is within the range of businesses being displayed
  // skip already displayed businesses
  if (displayAll) {
    filteredBusinesses.forEach((business, index) => {
      if (index < 3) {
        return; // skip already displayed businesses
      }
      let spotlightIndex = goldCount + silverCount + index + 1;
      let spotlight = createSpotlightElement(business, spotlightIndex);
      if (spotlight) {
        spotDiv.appendChild(spotlight);
      }
    });
  } else if (businesses.length > 3) {
    let button = document.createElement('button');
    button.textContent = "Show More";
    button.classList.add("show-more-button");
    button.addEventListener("click", function() {
      displayBusinessInformationCards(filteredBusinesses, true);
      button.remove();
    });
    spotDiv.appendChild(button);
  }
}
// if the business object does not have a name key, return null
function createSpotlightElement(business, spotlightIndex) {
    if (!business.name) {
      return null; 
    }
  
    let spotlight = document.createElement('section');
    let img = document.createElement('img');
    let spotlightBody = document.createElement('div');
    let spotlightTitle = document.createElement('h5');
    let spotlightMembership = document.createElement('p');
    let spotlightLink = document.createElement('a');
  
    // add classes to the elements created above to style them
    spotlight.classList.add('spotlight', `spotlight_${spotlightIndex}`);
    img.src = business.imageurl;
    img.alt = business.name;
    img.classList.add('spotlight-img-top');
    spotlightTitle.textContent = business.name;
    spotlightTitle.classList.add('spotlight-title');
    spotlightMembership.textContent = `Membership Level: ${business.membershipLevel}`;
    spotlightMembership.classList.add('spotlight-text');
    spotlightLink.href = business.url;
  
    // append the elements to the spotlight
    spotlightBody.appendChild(spotlightTitle);
    spotlightBody.appendChild(spotlightMembership);
    spotlightBody.appendChild(spotlightLink);
    spotlight.appendChild(img);
    spotlight.appendChild(spotlightBody);
  
    // add the link to the bottom of the card
    spotlightLink.href = business.url;
    spotlightLink.textContent = "Visit My Site";
    spotlightLink.classList.add("spotlight-link");
  
    return spotlight;
  }
  function displayBusinessInformationCards(business, businessIndexToDisplay) {
    const spotDiv = document.querySelector('div.spotlight');
    let goldCount = 0;
    let silverCount = 0;
    let businessCount = 0;

    // create spotlight for each business in the array
    // keys: name, imageurl, membershipLevel, url
    // 3 businesses are displayed
    business.forEach((business, index) => {
        if (businessCount >= 3) {
            return; 
        }

        // check if the business has a name key
        // create spotlight element
        if (business.membershipLevel === "Gold" && goldCount < 2) {
            if (business.name) { 
                let spotlight = createSpotlightElement(business, goldCount + 1);
                if (spotlight) {
                    spotDiv.appendChild(spotlight);
                    goldCount++;
                    businessCount++;
                }
            }
        } 
        // check if the business has a name key
        // create spotlight element
        else if (business.membershipLevel === "Silver" && silverCount < 1) {
            if (business.name) { 
                let spotlight = createSpotlightElement(business, goldCount + silverCount + 1);
                if (spotlight) {
                    spotDiv.appendChild(spotlight);
                    silverCount++;
                    businessCount++;
                }
            }
        }
    });
    // check if the business to display is within the range of businesses being displayed
if (businessIndexToDisplay < businessCount) {
    let spotlightIndex = goldCount + silverCount + businessIndexToDisplay + 1;
  
    // check if the business object has a name key
    if (business[businessIndexToDisplay].name) {
      let spotlight = createSpotlightElement(business[businessIndexToDisplay], spotlightIndex);
      spotDiv.appendChild(spotlight);
    }
  }
}