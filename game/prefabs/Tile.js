'use strict';

var spriteWidth = 76;
var spriteHiehgt = 87;


var Tile = function(game, x, y, f, color) {

    this.coordinates = {};
    this.coordinates.grid = {};
    this.coordinates.grid.x = x; 
    this.coordinates.grid.y = y;
    this.coordinates.grid.f = f;
    this.coordinates.world = {};

    this.initWolrdCoordinates();

    Phaser.Sprite.call(this, game, this.coordinates.world.x, this.coordinates.world.y, color, 0);

};

Tile.prototype = Object.create(Phaser.Sprite.prototype);
Tile.prototype.constructor = Tile;

Tile.prototype.update = function() {

  // write your prefab's specific update code here

};

Tile.prototype.initWolrdCoordinates = function () {

  this.coordinates.world.x =
  this.coordinates.world.y =

  if(this.coordinates.world.f === 1) this.flip();


};

module.exports = Tile;
