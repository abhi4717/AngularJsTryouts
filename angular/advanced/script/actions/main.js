var actionModule = angular.module('actionModule',[]);

actionModule.controller('actionController',['$scope','$http',function($scope,$http){
	$http.get('/data/steps.json').success(function(data){
		$scope.Steps = data;
	});
	
	$http.get('/data/actions.json'),success(function(data){
		$scope.actions = data;
	});
}])