define([
  'leaflet'
],

function(L) {

	
	var map = L.map('map').setView([51.505, -0.09], 13);

	var marker = L.marker([51.5, -0.09]).addTo(map);
	
	L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; 2013 OpenStreetMap contributors'
	}).addTo(map);
	
});
