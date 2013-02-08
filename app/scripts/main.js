require.config({
		shim: {
			'leaflet': {
				exports: 'L'
			},
			'angular': {
				exports: 'angular',
				deps: ['jquery']
		}},

		paths: {
			jquery: '../components/jquery/jquery.min',
			leaflet: '../components/leaflet/dist/leaflet',
			underscore: '../components/underscore/underscore',
			angular: '../components/angular/angular'
		}

});

require(['app'], function(app) {
		app.bootstrap();

});
