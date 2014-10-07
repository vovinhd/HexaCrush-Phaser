'use strict';

var spriteWidth = 76;
var spriteHiehgt = 87;


var Tile = function(game, x, y, f, color) {
    Phaser.Sprite.call(this, game, x, y, color, 0);


};

Tile.prototype = Object.create(Phaser.Sprite.prototype);
Tile.prototype.constructor = Tile;

Tile.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = Tile;
