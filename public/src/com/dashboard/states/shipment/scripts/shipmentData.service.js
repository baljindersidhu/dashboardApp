/**
 *==================================================
 * ShipmentDataService provides data
 * necessary for tracking down Shipments
 */

(function() {
	'use strict';

	angular.module('ShipmentApp').factory('ShipmentDataService', ShipmentDataService);

	ShipmentDataService.$inject = [ '$http' ]
	function ShipmentDataService($http) {
		function _shipmentDataService() {
			return {
				getCountries : function() {
					return $http.get('/shipment/countries');
				},
				getStates : function(country) {
					return $http.get(encodeURIComponent('/shipment/states?country='+country));
				}
			};
		}

		var factory = function() {
			return new _shipmentDataService();
		}

		return factory();
	}
})();