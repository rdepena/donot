(function () {
	"use strict";

	var app = angular.module('dontdo', ['itemListService']);

}());;(function () {
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
}());;(function (){
	"use strict";

	var service = angular.module('itemListService', []);

	service.factory('itemList', function (){
		var _this = this;

		var itemList = [];

		_this.get = function() {
			return itemList;
		};

		_this.add = function (listItem) {
			itemList.push(listItem);
		};

		return _this;
	});

}());