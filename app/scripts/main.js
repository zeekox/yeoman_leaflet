require.config({
  shim: {
  	'leaflet': {
      exports: 'L'
    }
  },

  paths: {
    jquery: '../components/jquery/jquery.min',
    leaflet: '../components/leaflet/dist/leaflet'
  }
});
 
require(['app'], function(app) {

});
