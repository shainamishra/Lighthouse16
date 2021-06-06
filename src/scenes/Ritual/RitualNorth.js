class RitualNorth extends Phaser.Scene {
    constructor() {
        super("ritualNorth");
    }

    preload() {
        // images
        this.load.image('ritualNorth', './assets/puzzle5/ritualNorth_circle.png');
        this.load.image('knife', './assets/puzzle5/overlays/ritualNorth_knife.png');
        this.load.image('matches', './assets/puzzle5/overlays/ritualNorth_matches.png');
        this.load.image('darkRitual', './assets/puzzle2/overlays/lightsOff.png');
        this.load.image('hitbox', './assets/HitBox2.png');

        // hotbar
        this.load.image('hotbarRitual', './assets/hotbar.png');
        this.load.image('knifeRitual', './assets/puzzle5/items/hotbar_knife.png');
        this.load.image('matchesRitual', './assets/puzzle5/items/hotbar_matches.png');
        this.load.image('keyRitual', './assets/puzzle5/items/hotbar_key.png');
        this.load.image('candleHot', './assets/puzzle5/items/hotbar_candles.png');

        // chemicals
        this.load.image('bleachHot', './assets/puzzle5/items/hotbar_bleach.png');
        this.load.image('fertilizerHot', './assets/puzzle5/items/hotbar_fertilizer.png');
        this.load.image('insecticideHot', './assets/puzzle5/items/hotbar_insecticide.png');
        this.load.image('saltHot', './assets/puzzle5/items/hotbar_salt.png');

        // candle + fire
        this.load.image('firecandles', './assets/puzzle5/overlays/ritualNorth_candles.png');
        this.load.image('fireNormal', './assets/puzzle5/overlays/ritualNorth_candles_normal.png');
        this.load.image('fireGreen', './assets/puzzle5/overlays/ritualNorth_candles_green.png');
        this.load.image('firePurple', './assets/puzzle5/overlays/ritualNorth_candles_purple.png');
        this.load.image('fireYellow', './assets/puzzle5/overlays/ritualNorth_candles_yellow.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'ritualNorth').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory box set up
        this.invent = this.add.sprite(60, 60, 'hitbox');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            cursor: handPointer
        });
        // invent image
        this.inventIm = this.add.image(630, 350, 'inventory');
        this.inventIm.setDisplaySize(1280, 720);
        this.inventIm.setVisible(true);
        
        prevScene = this.scene.key;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // help icon set up
        this.help = this.add.sprite(1223, 60, 'hitbox');
        this.help.setDisplaySize(85, 85);
        this.help.setInteractive({
            cursor: handPointer
        });
        // help image
        this.helpIm = this.add.image(660, 355, 'help');
        this.helpIm.setDisplaySize(1280, 720);
        this.helpIm.setVisible(true);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // bookshelf hitbox
        this.bookshelf = this.add.sprite(955, 155, 'hitbox');
        this.bookshelf.setDisplaySize(560, 150);
        this.bookshelf.setInteractive({
            cursor: handPointer
        });
        this.bookshelf.setVisible(true);

        // ritual hitbox
        this.ritual = this.add.sprite(530, 540, 'hitbox');
        this.ritual.setDisplaySize(930, 150);
        this.ritual.setInteractive({
            cursor: handPointer
        });
        this.ritual.setVisible(true);

        // match hitbox
        this.matches = this.add.sprite(1090, 390, 'hitbox');
        this.matches.setDisplaySize(150, 50);
        this.matches.setInteractive({
            cursor: handPointer
        });
        this.matches.setVisible(true);
        // match image
        this.matchesIm = this.add.image(640, 360, 'matches');
        this.matchesIm.setDisplaySize(1280, 720);
        this.matchesIm.setVisible(true);

        // knife hit
        this.knife = this.add.sprite(875, 390, 'hitbox');
        this.knife.setDisplaySize(235, 50);
        this.knife.setInteractive({
            cursor: handPointer
        });
        this.knife.setVisible(true);
        // knife image
        this.knifeIm = this.add.image(640, 360, 'knife');
        this.knifeIm.setDisplaySize(1280, 720);
        this.knifeIm.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // candle + fire
        this.candles = this.add.image(640, 360, 'firecandles');
        this.candles.setDisplaySize(1280, 720);
        this.candles.setVisible(false);
        // normal
        this.fireNormal = this.add.image(640, 360, 'fireNormal');
        this.fireNormal.setDisplaySize(1280, 720);
        this.fireNormal.setVisible(false);
        // green
        this.fireGreen = this.add.image(640, 360, 'fireGreen');
        this.fireGreen.setDisplaySize(1280, 720);
        this.fireGreen.setVisible(false);
        // purple
        this.firePurple = this.add.image(640, 360, 'firePurple');
        this.firePurple.setDisplaySize(1280, 720);
        this.firePurple.setVisible(false);
        // yellow
        this.fireYellow = this.add.image(640, 360, 'fireYellow');
        this.fireYellow.setDisplaySize(1280, 720);
        this.fireYellow.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbarRitual');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.matchesHot = this.add.sprite(460, 659, 'matchesRitual');
        this.matchesHot.setDisplaySize(80, 40);
        this.matchesHot.setVisible(false);

        this.knifeHot = this.add.sprite(560, 660, 'knifeRitual');
        this.knifeHot.setDisplaySize(100, 65);
        this.knifeHot.setVisible(false);
        
        this.keyHot = this.add.sprite(660, 659, 'keyRitual');
        this.keyHot.setDisplaySize(70, 60);
        this.keyHot.setVisible(false);

        this.candleHot = this.add.sprite(753, 654, 'candleHot');
        this.candleHot.setDisplaySize(70, 60);
        this.candleHot.setVisible(false);

        // chemicals
        this.bleachHot = this.add.sprite(845, 659, 'bleachHot');
        this.bleachHot.setDisplaySize(48, 54);
        this.bleachHot.setVisible(false);

        this.fertilizerHot = this.add.sprite(845, 660, 'fertilizerHot');
        this.fertilizerHot.setDisplaySize(39, 54);
        this.fertilizerHot.setVisible(false);

        this.insecticideHot = this.add.sprite(845, 659, 'insecticideHot');
        this.insecticideHot.setDisplaySize(28, 60);
        this.insecticideHot.setVisible(false);

        this.saltHot = this.add.sprite(845, 659, 'saltHot');
        this.saltHot.setDisplaySize(36, 60);
        this.saltHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'darkRitual');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        inRitual = 1;
        this.textTimer = 0;
        this.timeVar = 150;
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox7");
        });

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimer == 0){
                this.scene.switch("instructionScene");
                this.textTimer = 1;
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // knife
        this.knife.on('pointerdown', (pointer) => {
            // hide knife
            this.knife.setVisible(false);
            this.knifeIm.setVisible(false);
            this.textTimer = 1;
            this.timeVar = 100;
            knifeGot = 1;
        });

        // matches
        this.matches.on('pointerdown', (pointer) => {
            // hide matches
            this.matches.setVisible(false);
            this.matchesIm.setVisible(false);
            this.textTimer = 1;
            this.timeVar = 100;
            matches = 1;
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene switch
        // book shelf
        this.bookshelf.on('pointerdown', (pointer) => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.timeVar = 50;
                this.scene.switch("ritualBookshelf");
            }
        });

        // ritual
        this.ritual.on('pointerdown', (pointer) => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.timeVar = 50;
                this.scene.switch("ritualPentagram");
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < this.timeVar) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= this.timeVar) {
            this.textTimer = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 1){
            // lights are off 
            this.dark.setVisible(true);
        } else if(lightState == 2){
            // lights are on
            this.dark.setVisible(false);
        } 

        if(knifeGot == 1){
            this.knife.setVisible(false);
            this.knifeIm.setVisible(false);
        }
        if(matches == 1){
            this.matches.setVisible(false);
            this.matchesIm.setVisible(false);
        }

        if(candles > 1){
            this.candles.setVisible(true);
            this.candleHot.setVisible(false);
        }
        if(lit == 1){
            if(chemical == 0){
                this.fireNormal.setVisible(true);
            } else if(chemical == 1){
                this.fireGreen.setVisible(true);
            } else if(chemical == 2){
                this.firePurple.setVisible(true);
            } else if(chemical == 3){
                this.fireNormal.setVisible(true);
            } else if(chemical == 4){
                this.fireYellow.setVisible(true);
            }
        } else if(lit == 2){
            this.fireNormal.setVisible(true);
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("ritualWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("ritualEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start("endLose");
        };
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (knifeGot == 1){
                this.knifeHot.setVisible(true);
            }

            if (matches == 1){
                this.matchesHot.setVisible(true);
            }

            if (deskKey == 1){
                this.keyHot.setVisible(true);
            }
            
            if (candles == 1){
                this.candleHot.setVisible(true);
            }

            if (chemical == 1){
                this.fertilizerHot.setVisible(true);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(false);
            } else if (chemical == 2){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(true);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(false);
            } else if (chemical == 3){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(true);
                this.saltHot.setVisible(false);
            } else if (chemical == 4){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(true);
            } 

        }
        else {
            this.hotbar.setVisible(false);
            this.knifeHot.setVisible(false);
            this.matchesHot.setVisible(false);
            this.keyHot.setVisible(false);
            this.candleHot.setVisible(false);

            // chemicals
            this.fertilizerHot.setVisible(false);
            this.insecticideHot.setVisible(false);
            this.bleachHot.setVisible(false);
            this.saltHot.setVisible(false);
        }
    }
}