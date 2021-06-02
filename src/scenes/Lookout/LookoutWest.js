class LookoutWest extends Phaser.Scene {
    constructor() {
        super("lookoutWest");
    }

    preload() {
        // images
        this.load.image('lookoutWest', './assets/puzzle4/blank_wall.png');
        this.load.image('rag', './assets/puzzle4/overlays/rag.png');
        this.load.image('outline', './assets/puzzle4/overlays/secret_outline.png');
        this.load.image('scales', './assets/puzzle4/overlays/scales.png');
        this.load.image('westLight', './assets/puzzle4/overlays/blank_wall_light.png');
        this.load.image('ladder', './assets/puzzle4/overlays/ladder.png');

        // hitbox
        this.load.image('hitbox', './assets/HitBox2.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'lookoutWest').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.itemTake = this.sound.add('itemtake', {volume: 0.5});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
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
        // rag
        this.rag = this.add.image(640, 350, 'rag');
        this.rag.setDisplaySize(1280, 720);
        this.rag.setVisible(true);
        // rag hitbox
        this.ragHit = this.add.sprite(270, 650, 'hitbox');
        this.ragHit.setDisplaySize(250, 100);
        this.ragHit.setInteractive({
            useHandCursor: true
        });
        this.ragHit.interText = this.add.text(400, 500, 'You took the rag');
        this.ragHit.interText.setFontSize(50);
        this.ragHit.interText.setVisible(false);
        this.ragHit.setVisible(true);

        // hatch hitbox
        this.hatch = this.add.sprite(600, 235, 'hitbox');
        this.hatch.setDisplaySize(230, 156);
        this.hatch.setVisible(false);
        this.hatch.setInteractive({
            useHandCursor: true
        });

        // scales
        this.scales = this.add.image(640, 350, 'scales');
        this.scales.setDisplaySize(1280, 720);
        this.scales.setVisible(false);

        // secret outline
        this.outline = this.add.image(640, 350, 'outline');
        this.outline.setDisplaySize(1280, 720);
        this.outline.setVisible(false);
        this.outline.interText = this.add.text(200, 550, 'You opened a hatch in the wall');
        this.outline.interText.setFontSize(50);
        this.outline.interText.setVisible(false);

        // ladder image
        this.ladder = this.add.image(640, 360, 'ladder');
        this.ladder.setDisplaySize(1280, 720);
        this.ladder.setVisible(false);
        this.ladder.interText = this.add.text(350, 400, '   Press space to\nenter the light room');
        this.ladder.interText.setFontSize(50);
        this.ladder.interText.setVisible(false);

        // window light
        this.light = this.add.image(640, 360, 'westLight');
        this.light.setDisplaySize(1280, 720);
        this.light.alpha = 0.5;
        this.light.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.ragHot= this.add.sprite(460, 660, 'ragHot');
        this.ragHot.setDisplaySize(50, 50);
        this.ragHot.setVisible(false);

        this.ropeHot = this.add.sprite(560, 660, 'ropeHot');
        this.ropeHot.setDisplaySize(50, 50);
        this.ropeHot.setVisible(false);

        this.citrineHot = this.add.sprite(660, 659, 'citrineHot');
        this.citrineHot.setDisplaySize(50, 50);
        this.citrineHot.setVisible(false);

        this.rockHot = this.add.sprite(660, 659, 'rockHot');
        this.rockHot.setDisplaySize(50, 50);
        this.rockHot.setVisible(false);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.hotOn = true;
        this.textTimer = 0;
        this.textTimerHatch = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // rag
        this.ragHit.on('pointerdown', (pointer) => {
            rag = 1;
            this.itemTake.play();
            this.rag.setVisible(false);
            this.ragHit.interText.setVisible(true);
            this.textTimer = 1;
        });

        // hatch
        // delete this
        /*
        rag = 1;
        hatch = 1;
        windowClean = 1;
        weights = 1;
        citrine = 1;
        */
        this.hatch.on('pointerdown', (pointer) => {
            if (hatch == 0){
                this.scales.setVisible(true);
                this.outline.interText.setVisible(true);
                this.textTimer = 1;
                hatch = 1;
                this.itemTake.play();
            }
            if(hatch == 1 && this.textTimerHatch == 0 && this.textTimer == 0){
                // open scales image
                this.textTimerHatch = 1;
                this.scene.switch("lookoutScales");
            }
        });

        if(balanced == 1){
            this.ladder.setVisible(true);
            this.ladder.interText.setVisible(true);

            if(Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.sound.get('lookout_music').stop();
                //this.scene.start("spread5");
                this.scene.start("loadingNorth");
            };
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 150){
            // hide text
            this.ragHit.interText.setVisible(false);
            this.outline.interText.setVisible(false);
            this.textTimer = 0;
        } 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hatch text timers
        if(this.textTimerHatch > 0 && this.textTimerHatch < 50) {
            this.textTimerHatch += 1;
        } 
        else if(this.textTimerHatch >= 50){
            // hide text
            this.textTimerHatch = 0;
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(rag == 1){
            this.rag.setVisible(false);
            this.ragHit.setVisible(false);
        }
        if(windowClean == 1){
            this.light.setVisible(true);
            this.outline.setVisible(true);
            this.hatch.setVisible(true);
        }
        if(hatch == 1){
            this.scales.setVisible(true);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("lookoutSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("lookoutNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("lookoutEast");
        };
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (rag == 1){
                this.ragHot.setVisible(true);
            }

            if (citrine == 1 && weights == 0){
                this.citrineHot.setVisible(true);
            }
            else if (weights == 1){
                this.citrineHot.setVisible(false);
                this.rockHot.setVisible(true);
            }

            if (rope == 1){
                this.ropeHot.setVisible(true);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.ragHot.setVisible(false);
            this.citrineHot.setVisible(false);
            this.ropeHot.setVisible(false);
        }
    }
}