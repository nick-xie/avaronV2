import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './avaron.html';
import { Meteor } from 'meteor/meteor';
import { Games } from '../../api/games.js';

class GameLobbyCtrl {
  constructor($scope) {
      $scope.viewModel(this);
   
      this.helpers({
        games() {
          return Games.find({}, {
                    sort: {
                      createdAt: -1
                    }
          });
        },
        currentUser() {
          return Meteor.user();
        }
      })
  }
  createGame() {
      //alert("hat");
      var num;
      var g=Games.findOne({}, {sort: {createdAt: -1 }});
      if(g==undefined){
        num=0;
      }else{
        num=g.num;
      }
      // Insert a task into the collection
      Meteor.call('games.create', num+1);
  }
  removeGame(game){
    Meteor.call('games.remove', game._id);
  }
  joinGame(game){
    Meteor.call('games.join', game._id);
  }
}
 
export default angular.module('avaron', [
  angularMeteor
])
  .component('avaron', {
    templateUrl: 'imports/components/avaron/avaron.html',
    controller: ['$scope', GameLobbyCtrl]
  });