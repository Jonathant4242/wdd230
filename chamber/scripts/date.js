const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(now);

// display the full date in the header
datefield.innerHTML = `<em>${fulldate}</em>`;

// show the banner on Mondays or Tuesdays only
const dayOfWeek = now.getDay();
const banner = document.querySelector("#banner");

if (dayOfWeek === 1 || dayOfWeek === 2) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}