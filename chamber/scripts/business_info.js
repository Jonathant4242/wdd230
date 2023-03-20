// Path: chamber/scripts/business_info.js

const dataUrl = 'https://jonathant4242.github.io/wdd230/chamber/data.json';

async function getBusinessInformation() {
  const response = await fetch(dataUrl);
  const data = await response.json();
  displayBusinessInformationCards(data.businessInfo);
}

getBusinessInformation();
// creat the cards and table for the business information
function displayBusinessInformationCards(business) {
  const cardsDiv = document.querySelector('div.cards');
  const tableDiv = document.querySelector('div.table');

  // create cards for each business in the array
  // keys: name, address, phone, description, membershipLevel, url, imageurl
  business.forEach((business) => {
    let card = document.createElement('section');
    let img = document.createElement('img');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardAddress = document.createElement('p');
    let cardPhone = document.createElement('p');
    let cardDescription = document.createElement('p');
    let cardMembership = document.createElement('p');
    let cardLink = document.createElement('a');

    // add classes to the elements created above to style them
    card.classList.add('card');
    img.src = business.imageurl;
    img.alt = business.name;
    img.classList.add('card-img-top');
    cardTitle.textContent = business.name;
    cardTitle.classList.add('card-title');
    cardAddress.textContent = business.address;
    cardAddress.classList.add('card-text');
    cardPhone.textContent = business.phone;
    cardPhone.classList.add('card-text');
    cardDescription.textContent = business.description;
    cardDescription.classList.add('card-text');
    cardMembership.textContent = `Membership Level: ${business.membershipLevel}`;
    cardMembership.classList.add('card-text');
    cardLink.href = business.url;
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.textContent = 'Click HereVisit Website';

    // append the elements to the card
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardAddress);
    cardBody.appendChild(cardPhone);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardMembership);
    cardBody.appendChild(cardLink);

    // append the card to the cardsDiv
    card.appendChild(img);
    card.appendChild(cardBody);
    cardsDiv.appendChild(card);
  });

  // create table for the business information
  const table = document.createElement('table');
  table.classList.add('table');
  table.classList.add('table-striped');
  table.classList.add('table-hover');

  // create table header
  const tableHeader = document.createElement('thead');
  tableHeader.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Description</th>
      <th>Membership Level</th>
      <th>Website</th>
    </tr>
  `;
  // create table body
  const tableBody = document.createElement('tbody');
  tableBody.innerHTML = `
    ${business.map((business) => {
      return `
        <tr>
            <td>${business.name}</td>
            <td>${business.address}</td>
            <td>${business.phone}</td>
            <td>${business.description}</td>
            <td>${business.membershipLevel}</td>
            <td><a href="${business.url}">Click Here To Visit ${business.name}'s Web Site</a></td>
        </tr>
      `;
    }).join('')}
  `;
  // append the table header and body to the table
  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  tableDiv.appendChild(table);

  tableDiv.style.display = 'none'; // hide tableDiv by default
}

// toggle between cards and table view
const toggleButton = document.querySelector('button#toggle-button');
toggleButton.addEventListener('click', () => {
  const cardsDiv = document.querySelector('div.cards');
  const tableDiv = document.querySelector('div.table');
  
  // toggle between cardsDiv and tableDiv display styles when button is clicked 
  if (cardsDiv.style.display !== 'none') {
    cardsDiv.style.display = 'none'; // hide cardsDiv
    tableDiv.style.display = 'flex'; //
    } else {
    cardsDiv.style.display = 'grid'; // show cardsDiv
    tableDiv.style.display = 'none'; // hide tableDiv
    }
});

// Path: chamber/scripts/business_info.js
