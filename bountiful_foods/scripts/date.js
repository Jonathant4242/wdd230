const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

// display the full date in the header
datefield.innerHTML = `<em>${fulldate}</em>`;

// add different <p> tags for each day of the week
const dayOfWeek = now.getDay();
const content = document.querySelector("#content");

switch (dayOfWeek) {
  case 0:
    content.innerHTML = "<p>It's Sunday! Our Truck is at Home Come Check Out Our Store In Huntington Beach</p>";
    break;
  case 1:
    content.innerHTML = "<p>It's Monday! Our Truck is Located in Newport Beach</p>";
    break;
  case 2:
    content.innerHTML = "<p>It's Tuesday! Our Truck is Located in San Celemente</p>";
    break;
  case 3:
    content.innerHTML = "<p>It's Wednesday! Our Truck is at Home Come Check Out Our Store In Huntington Beach</p>";
    break;
  case 4:
    content.innerHTML = "<p>It's Thursday! Our Truck is Located in Newport Beach</p>";
    break;
  case 5:
    content.innerHTML = "<p>It's Friday! Our Truck is Located in San Celemente<</p>";
    break;
  case 6:
    content.innerHTML = "<p>It's Saturday! Check Our Truck Tracker It's On The Move</p>";
    break;
  default:
    content.innerHTML = "<p>Find Our Truck!</p>";
}

// Path: bountiful_foods/scripts/date.js
