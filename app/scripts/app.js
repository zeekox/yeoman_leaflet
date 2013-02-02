define([
  'leaflet',
  'jquery'
],

function(L, $) {

	var map = L.map('map');


	var latlngs = [];

	$.getJSON('json/ch1086.002.json', function(data) {
		
		$.each(data, function(i, latlng) {
			latlngs.push(new L.LatLng(latlng.lat, latlng.lng));
		});

		map.setView(latlngs[0], 13);
	
	});

	var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

	var landscapeTile = 'http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png';

	var cycleMapTile = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';

	var openstreetmap = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';


	L.tileLayer(landscapeTile, {
		attribution: '&copy; OpenStreetMap contributors'
	}).addTo(map);
	
});
