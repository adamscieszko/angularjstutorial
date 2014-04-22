var app = angular.module("myApp", []);

app.controller('FirstCtrl', function ($scope) {
	$scope.model = { firstName: "Gabriel", lastName: "Schenker" };

	$scope.clickMe = function(name){
		alert("Hello " + name);
	};
});