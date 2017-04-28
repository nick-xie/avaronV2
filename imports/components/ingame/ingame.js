import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './ingame.html';
import { Meteor } from 'meteor/meteor';
import { Games } from '../../api/games.js';

class inGameCtrl {
  constructor($scope, $stateParams) {
      $scope.viewModel(this);
      var self = this;
      self.roomNum = $stateParams.roomNum;
      const roomNum=self.roomNum
      $('#gameheader').text("Game Number " + roomNum);
  }
}

export default angular.module('ingame', [
  angularMeteor
])
  .component('ingame', {
    templateUrl: 'imports/components/ingame/ingame.html',
    controller: ['$scope', '$stateParams', inGameCtrl]
  });