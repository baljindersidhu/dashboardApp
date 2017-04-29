/**
 * ===========================
 * define state for assessment
 * ===========================
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').config(RoutesConfiguration);
	
	RoutesConfiguration.$inject = ['$StateFileUrl', '$stateProvider', '$urlRouterProvider'];
	function RoutesConfiguration($StateFileUrl, $stateProvider, $urlRouterProvider){
		/** =========================
		 * State Configuration Object
		 * ==========================
		 */
		var stateConfig = {
			url: '/shipment',
			controller: 'ShipmentController as vm',
			templateUrl: $StateFileUrl + '/shipment/partials/shipment.html'
		};
		
		$stateProvider.state('sd.shipment', stateConfig);
	}
})();