import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Games = new Mongo.Collection('games');

Meteor.methods({
	'games.create' (num) {
    	// Make sure the user is logged in before inserting a task
    	if (!Meteor.userId()) {
    		//alert("Please sign in");
      		throw new Meteor.Error('not-authorized');
    	}
    	Games.insert({
      		num: num,
      		createdAt: new Date(),
      		owner: Meteor.userId(),
      		username: Meteor.user().username,
      		players: [Meteor.userId()],
      		started: 0,
    	});
	},
	'games.remove' (gameId) {
    	Games.remove(gameId);
  	},
  	'games.join' (gameId){
  		//Please sign in
  		if (!Meteor.userId()){
  			throw new Meteor.Error('not-authorized');
  		}
  		Games.update({ _id: gameId }, { $push: { players: Meteor.userId() } });
  	},
});