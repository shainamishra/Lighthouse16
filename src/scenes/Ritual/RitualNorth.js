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
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // bookshelf hitbox
        this.bookshelf = this.add.sprite(955, 155, 'hitbox');
        this.bookshelf.setDisplaySize(560, 150);
        this.bookshelf.setInteractive({
            useHandCursor: true
        });
        this.bookshelf.setVisible(true);

        // ritual hitbox
        this.ritual = this.add.sprite(530, 540, 'hitbox');
        this.ritual.setDisplaySize(930, 150);
        this.ritual.setInteractive({
            useHandCursor: true
        });
        this.ritual.setVisible(true);

        // match hitbox
        this.matches = this.add.sprite(1090, 390, 'hitbox');
        this.matches.setDisplaySize(150, 50);
        this.matches.setInteractive({
            useHandCursor: true
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
            useHandCursor: true
        });
        this.knife.setVisible(true);
        // knife image
        this.knifeIm = this.add.image(640, 360, 'knife');
        this.knifeIm.setDisplaySize(1280, 720);
        this.knifeIm.setVisible(true);

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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // knife
        this.knife.on('pointerdown', (pointer) => {
            // hide knife
            this.knife.setVisible(false);
            this.knifeIm.setVisible(false);
            this.textTimer = 1;
            this.timeVar = 150;
            knifeGot = 1;
        });

        // matches
        this.matches.on('pointerdown', (pointer) => {
            // hide matches
            this.matches.setVisible(false);
            this.matchesIm.setVisible(false);
            this.textTimer = 1;
            this.timeVar = 150;
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
        else if(this.textTimer >= this.timeVar){
            // hide text
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
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("ritualWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("ritualEast");
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

        }
        else {
            this.hotbar.setVisible(false);
            this.knifeHot.setVisible(false);
            this.matchesHot.setVisible(false);
            this.keyHot.setVisible(false);
        }
    }
}