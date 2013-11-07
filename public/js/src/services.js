(function (){
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