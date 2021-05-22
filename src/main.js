let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    scene: [ Menu, Instruction, IslandNorth, IslandWest, IslandEast, IslandSouth, Lighthouse, End ],
  }

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keySPACE, keyW, keyA, keyS, keyD, keyI;

// global variables
let keyGot = 0;
let reelGot = 0;
let scopeGot = 0;