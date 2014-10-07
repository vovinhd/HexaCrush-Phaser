'use strict';

var Tile = require('./tile');
var ColorEnum = require('./ColorEnum');

var spriteWidth = 76;
var spriteHiehgt = 87;

var GameState = function(game, parent, width, height) {
    Phaser.Group.call(this, game, parent);
    this.width = width;
    this.height = height;
    this.populateGrid();
};

GameState.prototype.populateGrid = function () {

    this.grid = createArray(this.width, this.height, 2);
    for (var x in this.grid) {
        for (var y in x) {
            for (var f in y) {
                this.grid[x][y][f] = new Tile(x, y, f, this.randomColoredTile());
                this.add(this.grid[x][y][f]);
            }
        }
    }
};

GameState.prototype.randomColoredTile = function() {

    var color = this.game.rnd.integerInRange(0,5);

    switch(color){
        case 0:
            return ColorEnum.BLACK;
        case 1:
            return ColorEnum.BLUE;
        case 2:
            return ColorEnum.GREEN;
        case 3:
            return ColorEnum.PURPLE;
        case 4:
            return ColorEnum.RED;
        case 5:
            return ColorEnum.YELLOW;
        default:
            return ColorEnum.BLACK;
    }

};

GameState.prototype = Object.create(Phaser.Group.prototype);
GameState.prototype.constructor = GameState;

GameState.prototype.update = function() {

  // write your prefab's specific update code here

};


// stolen from
// http://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}


module.exports = GameState;
