
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
