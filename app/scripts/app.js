define([
  'leaflet'
],

function(L) {

	var center = [47.363511,7.35706];
	
	var map = L.map('map').setView(center, 13);

	var marker = L.marker(center).addTo(map);

	var landscapeTile = 'http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png';

	var cycleMapTile = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';

	var openstreetmap = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';


	L.tileLayer(landscapeTile, {
		attribution: '&copy; OpenStreetMap contributors'
	}).addTo(map);
	
});
