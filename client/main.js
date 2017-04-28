import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import avaron from '../imports/components/avaron/avaron';
import ingame from '../imports/components/ingame/ingame';
import '../imports/startup/accounts-config.js';

angular.module('game-lobby', [
  angularMeteor,
  avaron.name,
  ingame.name,
  uiRouter,
  'accounts.ui'
]);

angular.module('game-lobby').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
	function($urlRouterProvider, $stateProvider, $locationProvider){
		
		$locationProvider.html5Mode(true);

  		$stateProvider
    		.state('lobby', {
      			url: "/",
      			template: '<avaron></avaron>'
    		})
    	$stateProvider
    		.state('ingame', {
      			url: "/:roomNum",
      			template: '<ingame></ingame>'
    		});

    	$urlRouterProvider.otherwise("/");
}]);

function onReady() {
  angular.bootstrap(document, ['game-lobby']);
}
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}