'use strict';

var EventQueue = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'EventQueue', frame);

  // initialize your prefab here
  
};

EventQueue.prototype = Object.create(Phaser.Sprite.prototype);
EventQueue.prototype.constructor = EventQueue;

EventQueue.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = EventQueue;
