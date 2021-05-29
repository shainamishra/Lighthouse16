class LookoutNorth extends Phaser.Scene {
    constructor() {
        super("lookoutNorth");
    }

    preload() {
        // images
        this.load.image('lookoutNorth', './assets/puzzle4/starchart.png');
        this.load.image('pendulum_top', './assets/puzzle4/overlays/pendulum_top.png');
        this.load.image('pendulum_rope', './assets/puzzle4/overlays/pendulum_rope.png');
        this.load.image('pendulum_rock', './assets/puzzle4/overlays/pendulum_rock.png');
        this.load.image('pendulum', './assets/puzzle4/overlays/pendulum.png');
        this.load.image('lightNorth', './assets/puzzle4/overlays/light_over_chart.png');

        this.load.image('hitbox', './assets/HitBox.png');
    }

    create() {

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'lookoutNorth').setOrigin(0, 0); 

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
        // pendulum top
        this.top = this.add.image(640, 360, 'pendulum_top');
        this.top.setDisplaySize(1280, 720);
        this.top.setVisible(true);

        // pendulum rope
        this.penRope = this.add.image(640, 360, 'pendulum_rope');
        this.penRope.setDisplaySize(1280, 720);
        this.penRope.setVisible(false);

        // pendulum rock
        this.penRock = this.add.image(640, 360, 'pendulum_rock');
        this.penRock.setDisplaySize(1280, 720);
        this.penRock.setVisible(false);
        // pendulum rock hit box
        this.penRockHit = this.add.image(640, 410, 'hitbox');
        this.penRockHit.setDisplaySize(35, 80);
        this.penRockHit.setInteractive({
            useHandCursor: true
        });
        this.penRockHit.setVisible(false);

        // pendulum
        this.pendulum = this.add.image(640, 360, 'pendulum');
        this.pendulum.setDisplaySize(1280, 720);
        this.pendulum.setVisible(false);

        // light
        this.lightNorth = this.add.image(640, 360, 'lightNorth');
        this.lightNorth.setDisplaySize(1280, 720);
        this.lightNorth.setVisible(false);

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
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // pendulum anim
        this.penRockHit.on('pointerdown', (pointer) => {
            console.log("pendulum")
            // start animation
        });


        // end states
        if(windowClean == 1){
            this.lightNorth.setVisible(true);
        }
        if(rope == 1){
            this.penRope.setVisible(true);
        }
        if(rock == 1 && rope == 1){
            this.penRock.setVisible(true);
            this.penRockHit.setVisible(true);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("lookoutWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("lookoutEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("lookoutSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start("spread5");
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