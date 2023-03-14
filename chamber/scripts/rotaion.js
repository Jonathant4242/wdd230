// Get the section elements
const sections = document.querySelectorAll('section');

// Define the current index for each section
let currentNonProfitIndex = 0;
let currentBronzeIndex = 0;
let currentSilverIndex = 0;

// Define the time interval in milliseconds
const interval = 5000;

// Define a function to rotate the non-profit membership level
function rotateNonProfit() {
  // Get the non-profit div
  const nonProfitDiv = sections[0].querySelector('#non_p_detail');
  // Get the number of non-profit membership levels
  const numNonProfitLevels = nonProfitDiv.children.length;
  // Hide all non-profit membership levels
  for (let i = 0; i < numNonProfitLevels; i++) {
    nonProfitDiv.children[i].style.display = 'none';
  }
  // Show the current non-profit membership level
  nonProfitDiv.children[currentNonProfitIndex].style.display = 'block';
  // Increment the current index, looping back to 0 if necessary
  currentNonProfitIndex = (currentNonProfitIndex + 1) % numNonProfitLevels;
}

// Define a function to rotate the bronze membership level
function rotateBronze() {
  // Get the bronze div
  const bronzeDiv = sections[1].querySelector('#bronze_detail');
  // Get the number of bronze membership levels
  const numBronzeLevels = bronzeDiv.children.length;
  // Hide all bronze membership levels
  for (let i = 0; i < numBronzeLevels; i++) {
    bronzeDiv.children[i].style.display = 'none';
  }
  // Show the current bronze membership level
  bronzeDiv.children[currentBronzeIndex].style.display = 'block';
  // Increment the current index, looping back to 0 if necessary
  currentBronzeIndex = (currentBronzeIndex + 1) % numBronzeLevels;
}

// Define a function to rotate the silver membership level
function rotateSilver() {
  // Get the silver div
  const silverDiv = sections[2].querySelector('#silver_detail');
  // Get the number of silver membership levels
  const numSilverLevels = silverDiv.children.length;
  // Hide all silver membership levels
  for (let i = 0; i < numSilverLevels; i++) {
    silverDiv.children[i].style.display = 'none';
  }
  // Show the current silver membership level
  silverDiv.children[currentSilverIndex].style.display = 'block';
  // Increment the current index, looping back to 0 if necessary
  currentSilverIndex = (currentSilverIndex + 1) % numSilverLevels;
}

// Define a function to start the rotation
function startRotation() {
  // Rotate the non-profit membership level every interval
  setInterval(rotateNonProfit, interval);
  // Rotate the bronze membership level every interval
  setInterval(rotateBronze, interval);
  // Rotate the silver membership level every interval
  setInterval(rotateSilver, interval);
}

// Call the startRotation function to begin rotating the membership levels
startRotation();


// 
// figure it out. 
// 

// Rotate membership levels in section 1
let section1 = document.querySelector('#section1');
let section1Memberships = section1.querySelectorAll('.membership');

let currentSection1MembershipIndex = 0;

function rotateSection1Memberships() {
  section1Memberships[currentSection1MembershipIndex].classList.remove('active');
  currentSection1MembershipIndex++;
  if (currentSection1MembershipIndex >= section1Memberships.length) {
    currentSection1MembershipIndex = 0;
  }
  section1Memberships[currentSection1MembershipIndex].classList.add('active');
}

setInterval(rotateSection1Memberships, 3000);


// Rotate membership levels in section 2
let section2 = document.querySelector('#section2');
let section2Memberships = section2.querySelectorAll('.membership');

let currentSection2MembershipIndex = 0;

function rotateSection2Memberships() {
  section2Memberships[currentSection2MembershipIndex].classList.remove('active');
  currentSection2MembershipIndex++;
  if (currentSection2MembershipIndex >= section2Memberships.length) {
    currentSection2MembershipIndex = 0;
  }
  section2Memberships[currentSection2MembershipIndex].classList.add('active');
}

setInterval(rotateSection2Memberships, 3000);


// Rotate gold membership level in section 3
let section3 = document.querySelector('#section3');
let goldMembership = section3.querySelector('#gold_detail');

setInterval(() => {
  if (goldMembership.classList.contains('active')) {
    goldMembership.classList.remove('active');
  } else {
    goldMembership.classList.add('active');
  }
}, 3000);
