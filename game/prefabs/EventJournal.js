'use strict';

var EventJournal = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'EventJournal', frame);

  // initialize your prefab here
  
};

EventJournal.prototype = Object.create(Phaser.Sprite.prototype);
EventJournal.prototype.constructor = EventJournal;

EventJournal.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = EventJournal;
