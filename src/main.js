let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    scene: [ Menu, Instruction, Spread1, Inventory, IslandNorth, IslandWest, IslandEast, IslandSouth, Spread2, CellarNorth, CellarWest, CellarEast, CellarSouth, Spread3, MainNorth, MainWest, MainEast, MainSouth, Spread4, LookoutNorth, LookoutWest, Scales, LookoutEast, LookoutSouth, Spread5, Inventory7, RitualNorth, RitualWest, RitualEast, RitualSouth],
  }

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keySPACE, keyW, keyA, keyS, keyD, keyI, key1, key2, key3, key4, key5, key6, key7, key8, key9;

// global variables
// puzzle 1
let level = 0;
let keyGot = 0;
let reelGot = 0;
let scopeGot = 0;
let found = false;
let combo = '';
let pos = 0;
let boltGot = 0;
let unlocked = 0;

// puzzle 2
let deskKey = 0;
let prevScene = '';
let switchGot = 0;
let lightState = 0;

// puzzle 3
let knifeGot = 0;
let hammerGot = 0;
let skullsmash = 0;
let scoinGot = 0;

// puzzle 4
let rag = 0;
let windowClean = 0;
let rock = 0;
let rope = 0;
let hatch = 0;
let weights = 0;
