class LookoutSouth extends Phaser.Scene {
    constructor() {
        super("lookoutSouth");
    }

    preload() {
        // images
        this.load.image('lookoutSouth', './assets/puzzle4/diagrams.png');
        this.load.image('lightSouth', './assets/puzzle4/overlays/light_over_diagrams.png');
        this.load.image('rope', './assets/puzzle4/overlays/rope_overlay.png');

        // penfulum parts
        this.load.image('pendulum_top', './assets/puzzle4/overlays/pendulum_top.png');
        this.load.image('pendulum_rope', './assets/puzzle4/overlays/pendulum_rope.png');
        this.load.image('pendulum_rock', './assets/puzzle4/overlays/pendulum_rock.png');

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
        this.ropeHit.interText = this.add.text(350, 550, 'You took the rope.');
        this.ropeHit.interText.setFontSize(50);
        this.ropeHit.interText.setVisible(false);
        this.ropeHit.setVisible(true);

        // pendulum top
        this.top = this.add.image(875, 340, 'pendulum_top');
        this.top.setDisplaySize(1280, 720);
        this.top.setVisible(false);
        // pendulum rope
        this.penRope = this.add.image(875, 340, 'pendulum_rope');
        this.penRope.setDisplaySize(1280, 720);
        this.penRope.setVisible(false);
        // pendulum rock
        this.penRock = this.add.image(880, 340, 'pendulum_rock');
        this.penRock.setDisplaySize(1280, 720);
        this.penRock.setVisible(false);
        // pendulum rock hit box
        this.penRockHit = this.add.image(880, 400, 'hitbox');
        this.penRockHit.setDisplaySize(35, 80);
        this.penRockHit.setInteractive({
            useHandCursor: true
        });
        this.penRockHit.setVisible(true);

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
        this.ragHot= this.add.sprite(460, 660, 'ragHot');
        this.ragHot.setDisplaySize(50, 50);
        this.ragHot.setVisible(false);

        this.ropeHot = this.add.sprite(560, 660, 'ropeHot');
        this.ropeHot.setDisplaySize(50, 50);
        this.ropeHot.setVisible(false);

        this.citrineHot = this.add.sprite(660, 659, 'citrineHot');
        this.citrineHot.setDisplaySize(50, 50);
        this.citrineHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x8a8a8a).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x8a8a8a).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x8a8a8a).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x8a8a8a).setOrigin(0, 0);
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
        this.penRockHit.on('pointerdown', (pointer) => {
            console.log("pendulum")
            // start animation
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
        if(rock == 1 && rope == 1){
            this.top.setVisible(true);
            this.penRope.setVisible(true);
            this.penRock.setVisible(true);
            this.penRockHit.setVisible(true);
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("lookoutEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("lookoutWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("lookoutNorth");
        };
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (rag == 1){
                this.ragHot.setVisible(true);
            }

            if (rock == 1){
                this.citrineHot.setVisible(true);
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