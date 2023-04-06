
function initMap() {
  var mapImg = document.createElement('img');
  mapImg.src = 'https://maps.googleapis.com/maps/api/staticmap?center=33.158093,-117.350594&zoom=15&size=400x400&maptype=satellite&key=AIzaSyAODXu20Nych4V2u-svAD8O6IsFJzG9d5E';
  mapImg.classList.add('contact_map'); 
  document.getElementById('map').appendChild(mapImg);
}
