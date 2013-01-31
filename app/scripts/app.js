define([
  'leaflet',
  'jquery'
],

function(L, $) {

	var center = [47.363511,7.35706];
	
	var map = L.map('map').setView(center, 13);

	var latlngs = [new L.LatLng(47.363511,7.35706), new L.LatLng(47.363511,7.35806), new L.LatLng(47.373511,7.35806) ]
	var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

	var landscapeTile = 'http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png';

	var cycleMapTile = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';

	var openstreetmap = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';


	L.tileLayer(landscapeTile, {
		attribution: '&copy; OpenStreetMap contributors'
	}).addTo(map);


$.getJSON('json/ch1086.002.json', function(data) {
  var items = [];
 
  $.each(data, function(lat, lon) {
    items.push('<li id="' + lat + '">' + lon + '</li>');
  });
 
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('body');
});
	
});
