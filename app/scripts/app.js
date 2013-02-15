define([
		'angular',
		'ngResource',
		'controllers/list'
	],

	function(angular, ngResource, listController) {

		var ngMainModule = 'project';

		angular.module(ngMainModule, ['mongolab']).
		config(function($routeProvider) {
			$routeProvider.
			when('/', {controller:listController.list, templateUrl:'list.html'}).
			when('/edit/:projectId', {controller:listController.edit, templateUrl:'detail.html'}).
			otherwise({redirectTo:'/'});
		});

		// This is a module for cloud persistance in mongolab - https://mongolab.com
		angular.module('mongolab', ['ngResource']).
		factory('Project', function($resource) {
			var Project = $resource('https://api.mongolab.com/api/1/databases' +
					'/angularjs/collections/projects/:id',
				{ apiKey: '4f847ad3e4b08a2eed5f3b54' }, {
					update: { method: 'PUT' }
				}
			);

			Project.prototype.update = function(cb) {
				return Project.update({id: this._id.$oid},
					angular.extend({}, this, {_id:undefined}), cb);
			};

			Project.prototype.destroy = function(cb) {
				return Project.remove({id: this._id.$oid}, cb);
			};

			return Project;
		});

		return {
			mainModule: ngMainModule
		};

});


