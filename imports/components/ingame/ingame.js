import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './ingame.html';
import { Meteor } from 'meteor/meteor';
import { Games } from '../../api/games.js';

class inGameCtrl {
  constructor($scope) {
      $scope.viewModel(this);
  }
}

export default angular.module('ingame', [
  angularMeteor
])
  .component('ingame', {
    templateUrl: 'imports/components/ingame/ingame.html',
    controller: ['$scope', inGameCtrl]
  });