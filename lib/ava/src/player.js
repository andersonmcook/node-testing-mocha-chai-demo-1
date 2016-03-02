'use strict';

// can set a default value in arguments with Babel
function Player(name, energyLevel = 10) {
  this._id = 0;
  this.name = name;
  this.energyLevel = energyLevel;
}

module.exports = (init) => new Player(init.name, init.energyLevel);
