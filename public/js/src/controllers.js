(function () {
	"use strict";

	var app = angular.module('dontdo');

	app.controller('HelloWorldCtrl', ['$scope', function ($scope) {
		$scope.message = "Hello World";
	}]);

	app.controller('ListCtrl', ['$scope', 'itemList', function ($scope, itemList) {
		var model = {};
		model.itemList = itemList.get();
		$scope.model = model;
	}]);

	app.controller('addListItemCtrl', ["$scope", 'itemList', function ($scope, itemList) {
		var model = {};
		$scope.model = model;
		$scope.addItem = function () {
			itemList.add(model.itemName);
			model.itemName = '';
		};
		console.log(itemList.get());
	}]);
}());