class LookoutSouth extends Phaser.Scene {
    constructor() {
        super("lookoutSouth");
    }

    preload() {
        // images
        this.load.image('lookoutSouth', './assets/puzzle4/diagrams.png');
        this.load.image('lightSouth', './assets/puzzle4/overlays/light_over_diagrams.png');
        this.load.image('rope', './assets/puzzle4/overlays/rope_overlay.png');

        // pendulum parts
        this.load.image('pendulum', './assets/puzzle4/overlays/pendulum.png');
        this.load.image('pendulum_top', './assets/puzzle4/overlays/pendulum_top.png');
        this.load.spritesheet('swing', './assets/puzzle4/overlays/pendulumAnim.png', {frameWidth: 250, frameHeight: 264, startFrame: 0, endFrame: 7});

        // hitbox
        this.load.image('hitbox', './assets/HitBox2.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'lookoutSouth').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.itemTake = this.sound.add('itemtake', {volume: 0.5});

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
            useHandCursor: true
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
            useHandCursor: true
        });
        // help image
        this.helpIm = this.add.image(660, 355, 'help');
        this.helpIm.setDisplaySize(1280, 720);
        this.helpIm.setVisible(true);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // rope
        this.rope = this.add.image(640, 360, 'rope');
        this.rope.setDisplaySize(1280, 720);
        this.rope.setVisible(true);
        // rope hitbox
        this.ropeHit = this.add.sprite(1025, 625, 'hitbox');
        this.ropeHit.setDisplaySize(200, 100);
        this.ropeHit.setInteractive({
            useHandCursor: true
        });
        this.ropeHit.interText = this.add.text(440, 500, 'You took the rope');
        this.ropeHit.interText.setFontSize(50);
        this.ropeHit.interText.setVisible(false);
        this.ropeHit.setVisible(true);

        // pendulum
        this.pendulum = this.add.sprite(870, 326, 'pendulum');
        this.pendulum.setDisplaySize(1280, 720);
        this.pendulum.setVisible(false);
        // pendulum hit box
        this.penHit = this.add.image(875, 265, 'hitbox');
        this.penHit.setDisplaySize(40, 320);
        this.penHit.setInteractive({
            useHandCursor: true
        });
        this.penHit.setVisible(false);

        // pen anim
        this.anims.create({
            key: 'swing',
            frames: this.anims.generateFrameNumbers('swing', { start: 0, end: 6, first: 0}),
            frameRate: 5,
            repeat: -1
        });

        // light
        this.lightSouth = this.add.image(640, 360, 'lightSouth');
        this.lightSouth.setDisplaySize(1280, 720);
        this.lightSouth.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.ragHot= this.add.image(460, 660, 'ragHot');
        this.ragHot.setDisplaySize(50, 50);
        this.ragHot.setVisible(false);

        this.ropeHot = this.add.image(560, 660, 'ropeHot');
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
        this.animOn = 0;

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

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimer == 0){
                this.scene.switch("instructionScene");
                this.textTimer = 1;
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // rope
        this.ropeHit.on('pointerdown', (pointer) => {
            rope = 1;
            this.itemTake.play();
            this.rope.setVisible(false);
            this.ropeHit.interText.setVisible(true);
            this.textTimer = 1;
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // pendulum anim
        this.penHit.on('pointerdown', (pointer) => {
            this.animOn = 1;
            this.add.sprite(875, 220, 'hitbox').play('swing');
            this.pendulum.setVisible(false);
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 150){
            // hide text
            this.ropeHit.interText.setVisible(false);
            this.textTimer = 0;
        }

        // end states
        if(rope == 1){
            this.rope.setVisible(false);
        }
        if(windowClean == 1){
            this.lightSouth.setVisible(true);
        }
        if(citrine == 1 && rope == 1){
            this.penHit.setVisible(true);
            if(this.animOn == 0){
                this.pendulum.setVisible(true);
            }
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("lookoutEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("lookoutWest");
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