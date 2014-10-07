'use strict';

var Observer = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'Observer', frame);

  // initialize your prefab here
  
};

Observer.prototype = Object.create(Phaser.Sprite.prototype);
Observer.prototype.constructor = Observer;

Observer.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Observer;
