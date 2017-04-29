/**
 * Side Nav Buttons Action Service 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').factory('SideNavActionFactory', SideNavActionFactory);
	
	SideNavActionFactory.$inject = ['LoginService', '$state', '$window'];
	function SideNavActionFactory(LoginService, $state, $window){
		var _sideNavActionFactory = function(){
			var self 			= this;
			self.action			= action;
			self.actionHandlers = {
			                         'dashboard'  : dashboardActionHandler,
			                         'assessment' : assessmentActionHandler,
			                         'assignment' : assignmentActionHandler,
			                         'sales'	  : salesActionHandler,
			                         'shipment'	  : shipmentActionHandler,
			                         'events'     : eventsActionHandler,
			                         'messages'   : messagesActionHandler,
			                         'settings'   : settingsActionHandler,
			                         'logout'     : logoutActionHandler
			};
			
			// ******************************
		    // Internal methods
		    // ******************************
			
			function action(actionName, callback){
				if(callback && typeof callback === "function")
					callback();
				if(actionName && Object.keys(self.actionHandlers).indexOf(actionName) !== -1){
					self.actionHandlers[actionName]();
				}
			}
			
			function dashboardActionHandler(){
				$state.go('sd.dashboard');
			}
			
			function assessmentActionHandler(){
				$state.go('sd.assessment')
			}
			
			function assignmentActionHandler(){
				$state.go('sd.assignment')
			}
			
			function salesActionHandler(){
				$state.go('sd.sales')
			}
			
			function shipmentActionHandler(){
				$state.go('sd.shipment')
			}
			
			function eventsActionHandler(){
				$state.go('sd.events')
			}
			
			function messagesActionHandler(){
				$state.go('sd.messages')
			}
			
			function settingsActionHandler(){
				$state.go('sd.settings')
			}
			
			function logoutActionHandler(){
				var logout = LoginService.performLogout();
				logout.then(function(){
					$window.location.reload()
				});
			}

		};
		
		var factory = function(){
			return new _sideNavActionFactory();
		};
		
		return factory();
	}
})();