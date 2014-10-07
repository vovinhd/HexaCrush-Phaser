(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'hexacrush');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":5,"./states/gameover":6,"./states/menu":7,"./states/play":8,"./states/preload":9}],2:[function(require,module,exports){
'use strict';

var ColorEnum = Object.freeze(
    {
        BLACK : 'tri-black',
        BLUE : 'tri-blue',
        GREEN : 'tri-green',
        PURPLE : 'tri-purple',
        RED: 'tri-red',
        YELLOW: 'tri-yellow'
    }
);

module.exports = ColorEnum;

},{}],3:[function(require,module,exports){
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

    this.grid = createArray(this.width,this.height,2);
    for (var x in this.grid) {
        for (var y in x) {
            for (var f in y) {
                this.grid[x][y][f] = new Tile();
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

},{"./ColorEnum":2,"./tile":4}],4:[function(require,module,exports){
'use strict';

var Tile = function(game, x, y, color) {
    Phaser.Sprite.call(this, game, x, y, color, 0);


};

Tile.prototype = Object.create(Phaser.Sprite.prototype);
Tile.prototype.constructor = Tile;

Tile.prototype.update = function() {

  // write your prefab's specific update code here

};

module.exports = Tile;

},{}],5:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],6:[function(require,module,exports){

'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],7:[function(require,module,exports){

'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);

    this.sprite.angle = -20;
    this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};

module.exports = Menu;

},{}],8:[function(require,module,exports){

  'use strict';

  var GameState = require('../prefabs/GameState');

  function Play() {}
  Play.prototype = {
    create: function() {

        this.gameState = new GameState(this, null, width, height);



    },
    update: function() { 

    },

  };

  module.exports = Play;

},{"../prefabs/GameState":3}],9:[function(require,module,exports){

'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('yeoman', 'assets/yeoman-logo.png');
    this.load.image('border', 'assets/assets-border.png');
    this.load.image('menu', 'assets/assets-menu.png');
    this.load.image('menu-pressed', 'assets/assets-menu-pressed.png');
    this.load.image('timer-bg', 'assets/assets-timer-bg.png');
    this.load.image('timer-fg', 'assets/assets-timer-fg.png');
    this.load.image('tri-black', 'assets/assets-tri-black.png');
    this.load.image('tri-blue', 'assets/assets-tri-blue.png');
    this.load.image('tri-green', 'assets/assets-tri-green.png');
    this.load.image('tri-purple', 'assets/assets-tri-purple.png');
    this.load.image('tri-red', 'assets/assets-tri-red.png');
    this.load.image('tri-yellow', 'assets/assets-tri-yellow.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('play');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}]},{},[1])