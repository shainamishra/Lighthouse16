class LookoutSouth extends Phaser.Scene {
    constructor() {
        super("lookoutSouth");
    }

    preload() {
        // images
        this.load.image('lookoutSouth', './assets/puzzle4/diagrams.png');
        this.load.image('lightSouth', './assets/puzzle4/overlays/light_over_diagrams.png');
        //this.load.image('rope', './assets/puzzle4/overlays/rope.png');

        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'lookoutSouth').setOrigin(0, 0); 

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
        this.ropeHit = this.add.sprite(1025, 625, 'hitbox');
        this.ropeHit.setDisplaySize(200, 100);
        this.ropeHit.setInteractive({
            useHandCursor: true
        });
        this.ropeHit.interText = this.add.text(350, 550, 'You took the rope.');
        this.ropeHit.interText.setFontSize(50);
        this.ropeHit.interText.setVisible(false);
        this.ropeHit.setVisible(true);

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
        // god forsaken variables
        

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // rope
        this.ropeHit.on('pointerdown', (pointer) => {
            rope = 1;
            //this.rope.setVisible(false);
            this.ropeHit.interText.setVisible(true);
            this.textTimer = 1;
        });


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 150){
            // hide text
            //this.rope.setVisible(false);
            this.textTimer = 0;
        }

        // end states
        if(rope == 1){
            //this.rope.setVisible(false);
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
}