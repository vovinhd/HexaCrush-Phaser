'use strict';

var EngineEvent = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'EngineEvent', frame);

  // initialize your prefab here
  
};

EngineEvent.prototype = Object.create(Phaser.Sprite.prototype);
EngineEvent.prototype.constructor = EngineEvent;

EngineEvent.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = EngineEvent;
