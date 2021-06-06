let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    scene: [ Menu, Intro, Instruction, Spread1, Inventory, 
            IslandNorth, IslandWest, IslandEast, IslandSouth, 
            Spread2, CellarNorth, CellarWest, CellarEast, CellarSouth, 
            Spread3, MainNorth, MainWest, MainEast, MainSouth, Clock, 
            Spread4, LookoutNorth, LookoutWest, LookoutEast, LookoutSouth, Scales, 
            LoadingNorth, LoadingSouth, 
            Spread5, Inventory7, RitualNorth, Pentagram, Bookshelf, RitualWest, Closet, RitualEast, Cabinet, RitualSouth,
            Lose, Win, ClownNorth, ClownSouth, ClownEast, ClownWest],
  }

let game = new Phaser.Game(config);

//custom cursor
let handPointer = 'url(./assets/hand.png), pointer';

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keySPACE, keyW, keyA, keyS, keyD, keyI, key1, key2, key3, key4, key5, key6, key7, key8, key9;

// global variables
let prevScene = '';
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
let switchGot = 0;
let lightState = 0;
let disappear = 0;
// puzzle 3
let knifeGot = 0;
let hammerGot = 0;
let skullsmash = 0;
let scoinGot = 0;
let pcoinGot = 0;
let clockUnlock = 0;

// puzzle 4
let rag = 0;
let windowClean = 0;
let citrine = 0;
let rope = 0;
let hatch = 0;
let weights = 0;
let balanced = 0;

// puzzle 5
let inRitual = 0;
let note = 0;
// reuse knifeGot
let matches = 0;
// reuse lightState
// reuse deskKey
// reuse clockUnlock
let paper = 0;
// reuse unlocked
// reuse pos
// reuse combo
let candles = 0;
let chemical = 0;
let cards = 0;
let lit = 0;
let flame = 0;