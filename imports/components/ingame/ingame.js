import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './ingame.html';
import { Meteor } from 'meteor/meteor';
import { Games } from '../../api/games.js';

class inGameCtrl {
  constructor($scope, $stateParams) {
      $scope.viewModel(this);
      var self = this;
      self.roomId = $stateParams.roomId;
      const roomId= self.roomId;
      $('#gameheader').text("Game Room: " + Games.findOne(""+roomId).num);
      //alert(g.players.length);
      this.helpers({
        curGame() {
        	return Games.findOne(""+roomId);
        },
        players(){
        	return Games.findOne(""+roomId).players;
        },
        currentUser() {
        	return Meteor.user();
        }
      })
  }
  toggle(){
  	$('#list').slideToggle();
  }
  startGame(){
  	$('#list').slideToggle();
  }
}

export default angular.module('ingame', [
  angularMeteor
])
  .component('ingame', {
    templateUrl: 'imports/components/ingame/ingame.html',
    controller: ['$scope', '$stateParams', inGameCtrl]
  });