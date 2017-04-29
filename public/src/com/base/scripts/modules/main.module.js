/**
 * 
 */

(function(){
	
	// main app module
	angular.module('DashboardApp', ['ui.router', 'ngMaterial', 'ngMessages', 'AssignmentApp', 'ShipmentApp']);
	
	/**
	 * ==========================================
	 * Constant: Base File Path for Private files
	 * ==========================================
	 */
	var $StateFileUrl = '/authenticated/dashboard/states';
	angular.module('DashboardApp').constant('$StateFileUrl', $StateFileUrl);
})();