class IslandEast extends Phaser.Scene {
    constructor() {
        super("islandEast");
    }
    
    preload() {
        // images
        this.load.image('islandeast', './assets/puzzle1/IslandEast.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('bucket', './assets/puzzle1/overlays/bucket.png');
        this.load.image('bucketEmpty', './assets/puzzle1/overlays/bucketUsed.png');
        this.load.image('rodEmpty', './assets/puzzle1/overlays/rodCagenoItem.png');
        this.load.image('reel', './assets/puzzle1/overlays/reelUsed.png');
        this.load.image('rocks', './assets/puzzle1/IslandEastScope.png');
        this.load.image('rod', './assets/puzzle1/overlays/rodEmpty.png');
        this.load.image('rodCage', './assets/puzzle1/overlays/rodCage.png');
        this.load.image('rodEmpty', './assets/puzzle1/overlays/rodCagenoItem.png');
        
        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.islandeast = this.add.tileSprite(0, 0, 1280, 720, 'islandeast').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // inventory box set up
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // rod
        this.rod = this.add.sprite(650, 350, 'rod');
        this.rod.setDisplaySize(1280, 720);
        this.rod.setVisible(true);

        // rodCage
        this.rodCage = this.add.sprite(650, 350, 'rodCage');
        this.rodCage.setDisplaySize(1280, 720);
        this.rodCage.setVisible(false);

        // rodEmpty
        this.rodEmpty = this.add.sprite(650, 350, 'rodEmpty');
        this.rodEmpty.setDisplaySize(1280, 720);
        this.rodEmpty.setVisible(false);

        // reel
        this.reel = this.add.sprite(650, 350, 'reel');
        this.reel.setDisplaySize(1280, 720);
        this.reel.setVisible(false);

        // fishingpole
        this.fishingpole = this.add.sprite(460,300, 'hitbox');
        this.fishingpole.setDisplaySize(220, 400);
        this.fishingpole.setInteractive({
            useHandCursor: true
        });
        this.fishingpole.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'The reel is missing\nfrom the fishing pole');
        this.fishingpole.interText.setFontSize(50);
        this.fishingpole.interText.setVisible(false);

        // bucket
        this.bucket = this.add.sprite(250, 440, 'hitbox');
        this.bucket.setDisplaySize(100, 110);
        this.bucket.setInteractive({
            useHandCursor: true
        });
        this.bucket.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'There is a key in the bucket');
        this.bucket.interText.setFontSize(50);
        this.bucket.interText.setVisible(false);

        // bucket image
        this.bucketUp = this.add.sprite(650, 350, 'bucket');
        this.bucketUp.setDisplaySize(1280, 720);
        this.bucketUp.setVisible(true);

        // bucket used
        this.bucketEm = this.add.sprite(650, 350, 'bucketEmpty');
        this.bucketEm.setDisplaySize(1280, 720);
        this.bucketEm.setVisible(false);

        // rock
        this.pillars = this.add.sprite(930, 250, 'hitbox');
        this.pillars.setDisplaySize(300, 100);
        this.pillars.setInteractive({
            useHandCursor: true
        });
        this.pillars.interText = this.add.text(700, 300, 'You cant see much \n  past the fog');
        this.pillars.interText.setFontSize(50);
        this.pillars.interText.setVisible(false);

        // scope thru
        this.rocks = this.add.sprite(650, 350, 'rocks');
        this.rocks.setDisplaySize(1280, 720);
        this.rocks.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.keyHot = this.add.sprite(460, 659, 'keyHot');
        this.keyHot.setDisplaySize(60, 60);
        this.keyHot.setInteractive({
            useHandCursor: true
        });
        this.keyHot.setVisible(false);

        this.reelHot = this.add.sprite(560, 660, 'reelHot');
        this.reelHot.setDisplaySize(75, 75);
        this.reelHot.setInteractive({
            useHandCursor: true
        });
        this.reelHot.setVisible(false);

        this.telescopeHot = this.add.sprite(655, 660, 'telescopeHot');
        this.telescopeHot.setDisplaySize(80, 80);
        this.telescopeHot.setInteractive({
            useHandCursor: true
        });
        this.telescopeHot.setVisible(false);

        this.boltcuttersHot = this.add.sprite(755, 659, 'boltcuttersHot');
        this.boltcuttersHot.setDisplaySize(70, 70);
        this.boltcuttersHot.setInteractive({
            cursor: 'url(./assets/manDoorHandHookCarDoor.png), pointer' 
        });
        this.boltcuttersHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerRod = 0;
        this.textTimerBucket = 0;
        this.textTimerDock = 0;
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        
    }

    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);
        
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });
        
        if(this.textTimerRod == 0 && reelGot == 0){
            this.fishingpole.on('pointerdown', (pointer) => {
                this.fishingpole.interText.setVisible(true);
                this.textTimerRod = 1;
            });
        }
        else if(this.textTimerRod == 0 && reelGot == 1 && scopeGot == 0){
            this.fishingpole.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'The fishingpole brings \n     up a cage');
            this.fishingpole.interText.setFontSize(50);
            this.fishingpole.interText.setVisible(false);
            this.fishingpole.on('pointerdown', (pointer) => {
                this.fishingpole.interText.setVisible(true);
                this.reel.setVisible(true);
                this.rod.setVisible(false);
                this.rodCage.setVisible(true);
                this.textTimerRod = 1;
                scopeGot = 1;
            });
        }
        if(this.textTimerRod == 0 && reelGot == 1 && scopeGot == 1){
                this.fishingpole.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'There was a telescope \n inside the cage');
                this.fishingpole.interText.setFontSize(50);
                this.fishingpole.interText.setVisible(false);
            this.fishingpole.on('pointerdown', (pointer) => {
                this.fishingpole.interText.setVisible(true);
                this.rod.setVisible(false);
                this.rodCage.setVisible(false);
                this.rodEmpty.setVisible(true);
                this.textTimerRod = 1;
                found = true;
                scopeGot = 2;
            });
        }

        if(this.textTimerRod == 1 && scopeGot == 1){
            this.sound.play("itemtake");
        }

        // text on screen
        if(this.textTimerRod > 0 && this.textTimerRod < 150) {
            this.textTimerRod += 1;
        } 
        else if(this.textTimerRod >= 100){
            // hide text
            this.fishingpole.interText.setVisible(false);
            this.textTimerRod = 0;
        }

        if(this.textTimerBucket == 0){
            // if click on bucket
            this.bucket.on('pointerdown', (pointer) => {

                this.bucket.interText.setVisible(true);
                this.bucketUp.setVisible(false);
                this.bucketEm.setVisible(true);
                this.textTimerBucket = 1;
                keyGot = 1;
            });
        }
        if(this.textTimerBucket == 1 && keyGot == 1){
            this.sound.play("itemtake");
        }
        // text on screen
        if(this.textTimerBucket > 0 && this.textTimerBucket < 150) {
            this.textTimerBucket += 1;
        } 
        else if(this.textTimerBucket >= 150){
            // hide text
            this.bucket.interText.setVisible(false);
            this.textTimerBucket = 0;
        }
        
        if(keyGot ==1){
            this.bucketUp.setVisible(false);
            this.bucketEm.setVisible(true);
        }
        
       
        if(this.textTimerDock == 0 && scopeGot == 0){
            // if click on dock
        
            this.pillars.on('pointerdown', (pointer) => {

                this.pillars.interText.setVisible(true);
                //console.log('there is nothing here');
                //this.interText.setText('There is nothing else here');
                this.textTimerDock = 1;
            });
        }
        else if(this.textTimerDock == 0 && scopeGot > 0){
            this.pillars.interText = this.add.text(320, 70, 'There are two large stone \n pillars standing out in the sea');
            this.pillars.interText.setFontSize(50);
            this.pillars.interText.setVisible(false);
            this.pillars.on('pointerdown', (pointer) => {
                this.fishingpole.interText.setVisible(false);
                this.pillars.interText.setVisible(true);
                this.rocks.setVisible(true);
                this.textTimerDock = 1;
                this.hotOn = false;
            });
        }
        // text on screen
        if(this.textTimerDock > 0 && this.textTimerDock < 300 && scopeGot == 0) {
            this.textTimerDock += 1;
        } 
        else if(this.textTimerDock > 0 && this.textTimerDock < 300 && scopeGot > 0){
            if (this.input.on('pointerdown', (pointer) => {
                this.textTimerDock = 301;
            }));
        }
        else if(this.textTimerDock >= 300){
            // hide text
            this.pillars.interText.setVisible(false);
            this.hotbar.setVisible(true);
            this.textTimerDock = 0;
            this.hotOn = true;
            if(scopeGot > 0){
                this.rocks.setVisible(false);
            }
        }
        
        // show open state
        if(found == true){
            //show reel, show empty cage, hide rod
            this.rod.setVisible(false);
            this.rodEmpty.setVisible(true);
            this.reel.setVisible(true);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandWest");
        };
    }

    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (keyGot == 1){
                this.keyHot.setVisible(true);
            }

            if (reelGot == 1){
                this.reelHot.setVisible(true);
            }

            if (scopeGot == 2){
                this.telescopeHot.setVisible(true);
            }

            if (boltGot == 1){
                this.boltcuttersHot.setVisible(true);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.keyHot.setVisible(false);
            this.reelHot.setVisible(false);
            this.telescopeHot.setVisible(false);
            this.boltcuttersHot.setVisible(false);
        }
    }
}
