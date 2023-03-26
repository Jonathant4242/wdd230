
function initMap() {
  var mapImg = document.createElement('img');
  mapImg.src = 'https://maps.googleapis.com/maps/api/staticmap?center=-34.18029061378806,-71.40025197543089&zoom=18&size=400x400&maptype=satellite&key=AIzaSyAODXu20Nych4V2u-svAD8O6IsFJzG9d5E';
  mapImg.classList.add('contact_map'); 
  document.getElementById('map').appendChild(mapImg);
}


// Path: chamber/scripts/map.js