
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
