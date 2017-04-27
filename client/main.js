import angular from 'angular';
import angularMeteor from 'angular-meteor';
import avaron from '../imports/components/avaron/avaron';
import ingame from '../imports/components/ingame/ingame';
import '../imports/startup/accounts-config.js';

angular.module('game-lobby', [
  angularMeteor,
  avaron.name,
  ingame.name,
  'accounts.ui'
]);

// angular.module('game-lobby').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
// 	function($urlRouterProvider, $stateProvider, $locationProvider){
		
// 		$locationProvider.html5Mode(true);

//   		$stateProvider
//     		.state('home', {
//       			url: "/",
//       			templateUrl: "imports/components/avaron/avaron.html"
//     		});

//     	$urlRouterProvider.otherwise("/");
// }]);

function onReady() {
  angular.bootstrap(document, ['game-lobby']);
}
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}