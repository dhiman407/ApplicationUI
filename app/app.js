'use strict';

// Declare app level module which depends on views, and components
var DgSecureApp = angular.module('DgSecureApp', [
  'ui.router',
  'ngRoute',
  'ngAnimate'
]).
config(function($stateProvider,$routeProvider) {


	$stateProvider
	
	.state('home', {
		url:'/home',
		templateUrl:'app/components/home/home.html',
		controller:'HomeCtrl'
	})


	.state('login',{
		url:'/login',
		templateUrl:'app/components/login/login.html',
		controller:'LoginCtrl'
	})

	$routeProvider.otherwise({redirectTo: '/login'}); 
	
		

})
.run(function($rootScope,$location){
	$rootScope.dgControllerUrl = $location.protocol()+"://" + $location.host() +":" +$location.port()+"/dgcontroller/"; 
	$rootScope.dgUIUrl = $location.protocol()+"://" + $location.host() +":" +$location.port()+"/dgUI/"; 
	$rootScope.dgControlUrl = $location.protocol()+"://" + $location.host() +":" +$location.port()+"/dgControl/"; 
})
.controller('AppCtrl',['$scope','$location',function($scope,$location){

	$scope.loginRouting = function(){
		if($location.path() != "/login"){
			return true;
		}else{
			return false;
		}
	};
}]);