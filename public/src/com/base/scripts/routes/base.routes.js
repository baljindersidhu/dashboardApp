/**
 * 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').config(RouteConfig);
	
	RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RouteConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/StudentDashboard");
		
		$stateProvider.state('main',{
			url: '/main',
			templateUrl: '/public/src/com/base/partials/main.html'
		}).state('sd',{
			url: '/StudentDashboard',
			templateUrl: '/authenticated/dashboard/landing/partials/landingpage.html',
			controller: 'LandingPageController as vm'
		});
		
	}
})();