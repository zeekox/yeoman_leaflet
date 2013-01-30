require.config({
  shim: {
  	'leaflet': {
      exports: 'L'
    }
  },

  paths: {
    jquery: 'vendor/jquery.min',
    leaflet: '../components/leaflet/dist/leaflet'
  }
});
 
require(['app'], function(app) {

});
