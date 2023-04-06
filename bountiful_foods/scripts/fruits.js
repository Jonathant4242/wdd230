const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitData(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data);//- used to test data passed from the json file
  displayFruitData(data);
  displaySelectableFruitList(data);
  return data;
}

async function displaySelectableFruitList(data) {
  try {
    const fruitList = data.fruits;
    const listContainer = document.getElementById('fruit-list');
    listContainer.innerHTML = '';

    for (let i = 0; i < fruitList.length; i++) {
      const fruit = fruitList[i];
      const listItem = document.createElement('li');
      listItem.textContent = `${fruit.name} - ${fruit.color}`;
      listContainer.appendChild(listItem);
    }
  } catch (error) {
    console.log(error);
  }
}

getFruitData(url);

// displayFruitData function is used to display the data from the json file in a table

function displayFruitData(data) {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  // add the table headers
  const headers = [ 'Ingredient', 'Genus','Family', 'Carbohydrates', 'Protein', 'Fat', 'Calories', 'Sugar'];
  headers.forEach(header => {
    const cell = headerRow.insertCell();
    cell.textContent = header;
  });
  // loop through the data and add a row for each fruit
  data.forEach(fruit => {
    const row = table.insertRow();
    const {name, genus, family, nutritions} = fruit;
    const values = [name, genus, family, nutritions.carbohydrates, nutritions.protein, nutritions.fat, nutritions.calories, nutritions.sugar];
    values.forEach(value => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });
  // add the table to the page
  const fruitSelect = document.getElementById('fruit-table');
  fruitSelect.appendChild(table);
}

// displaySelectableFruitList function is used to display the data from the json file in a list selectable by the user
function displaySelectableFruitList(data) {
  const fruitList = document.getElementById('fruit-list');
  let checkedCount = 0;
  // loop through the data and add a row for each fruit
  data.forEach(fruit => {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'fruit';
    input.value = fruit.name;
    input.id = fruit.name;
    
    const label = document.createElement('label');
    label.htmlFor = fruit.name;
    label.textContent = fruit.name;
    // add the fruit name to the label
    const div = document.createElement('div');
    div.appendChild(input);
    div.appendChild(label);
    // add the fruit name to the list
    fruitList.appendChild(div);
    // add an event listener to the input
    input.addEventListener('click', () => {
      if (input.checked) {
        checkedCount++;
// increment the checkedCount variable when the checkbox is checked
countSpan.textContent = checkedCount;
} else {
checkedCount--;
// decrement the checkedCount variable when the checkbox is unchecked
countSpan.textContent = checkedCount;
}
});
});


  // add the list to the page
  const cartItems = document.getElementById('cart-items');
  const cartButton = document.getElementById('populate-cart');
  const fruitRadios = document.querySelectorAll('input[name="fruit"]');
  // add an event listener to the button
  cartButton.addEventListener('click', () => {
    cartItems.innerHTML = '';
    let count = 0;
    fruitRadios.forEach(fruitRadio => {
      // add to cart if checked and less than 3 items
      if (fruitRadio.checked && count < 3) {
        const input = document.createElement('p');
        const label = document.createElement('label');
        label.textContent = fruitRadio.value;
        label.insertBefore(input, label.firstChild);
        cartItems.appendChild(label);
        count++;
      }
    });
  });    
}
// getSelectedFruits function is used to get the selected fruits from the form to generate a compete promot to the user.
// It returns an array of the selected fruits
// It also checks to make sure the user has selected 3 or less fruits
// If the user has selected more than 3 fruits, it will uncheck the last fruit selected

function getSelectedFruits() {
  const selectedFruits = [];
  const fruitRadios = document.querySelectorAll('input[name="fruit"]:checked');
  fruitRadios.forEach(fruitRadio => {
    if (selectedFruits.length < 3) {
      selectedFruits.push(fruitRadio.value);
    }
  });
  return selectedFruits;
}
// get the selected fruits from the form
const selectedFruits = getSelectedFruits();

// calculateTotalNutrition function is used to calculate the total nutrition for the selected fruits
// It returns an object with the total nutrition for the selected fruits
function calculateTotalNutrition(selectedFruits, data) {
  let totalNutrition = {
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    sugar: 0,
    calories: 0
  };

  selectedFruits.forEach(fruitName => {
    const fruit = data.find(fruit => fruit.name === fruitName);
    totalNutrition.carbohydrates += fruit.nutritions.carbohydrates;
    totalNutrition.protein += fruit.nutritions.protein;
    totalNutrition.fat += fruit.nutritions.fat;
    totalNutrition.sugar += fruit.nutritions.sugar;
    totalNutrition.calories += fruit.nutritions.calories;
  });

  return totalNutrition;
}


// calculate the total nutrition for the selected fruits using the Data array
const totalNutrition = calculateTotalNutrition(selectedFruits, data);

console.log(totalNutrition);

// submit button event listener
const form = document.getElementById('fruit-order-form');
const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the form inputs
  const firstName = document.getElementById('first_name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone_number').value;
  const selectedFruits = getSelectedFruits();
  const instructions = document.getElementById('special-instructions').value;

  // get the order date
  const orderDate = new Date().toLocaleDateString();

  // calculate the total nutrition for the selected fruits
  const totalNutrition = calculateTotalNutrition(selectedFruits);

  // generate the formatted output
  const output = `
    <h2>Order Summary</h2>
    <p><strong>Name:</strong> ${firstName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Selected Fruits:</strong> ${selectedFruits.join(', ')}</p>
    <p><strong>Special Instructions:</strong> ${instructions}</p>
    <p><strong>Order Date:</strong> ${orderDate}</p>
    <p><strong>Total Nutrition:</strong></p>
    <ul>
      <li>Carbohydrates: ${totalNutrition.carbohydrates}g</li>
      <li>Protein: ${totalNutrition.protein}g</li>
      <li>Fat: ${totalNutrition.fat}g</li>
      <li>Sugar: ${totalNutrition.sugar}g</li>
      <li>Calories: ${totalNutrition.calories}cal</li>
    </ul>
  `;

  // display the output
  const outputArea = document.getElementById('output-area');
  outputArea.innerHTML = output;
});