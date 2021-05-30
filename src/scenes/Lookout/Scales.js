class Scales extends Phaser.Scene {
    constructor() {
        super("lookoutScales");
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.scalesBG = this.add.tileSprite(0, 0, 1280, 720, 'scales_hole').setOrigin(0, 0); 

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
        // objects
        // scales even
        this.even = this.add.image(640, 350, 'even');
        this.even.setDisplaySize(1280, 720);
        this.even.setVisible(true);
        // scales uneven
        this.even = this.add.image(640, 350, 'even');
        this.even.setDisplaySize(1280, 720);
        this.even.setVisible(false);

        /*
        this.windowHit = this.add.sprite(625, 260, 'hitbox');
        this.windowHit.setDisplaySize(475, 475);
        this.windowHit.setInteractive({
            useHandCursor: true
        });
        this.windowHit.interText = this.add.text(350, 550, 'The window is dirty.');
        this.windowHit.interText.setFontSize(50);
        this.windowHit.interText.setVisible(false);
        this.windowHit.setVisible(true);
        */

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory box set up
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // close
        this.closeInven = this.add.sprite(1220, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(true);
        this.closeInven.setInteractive({
            useHandCursor: true
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // go back to lookOut
        this.closeInven.on('pointerdown', (pointer) => {
            this.scene.stop("lookoutScales");
            this.scene.wake("lookoutWest");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 
        
        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 150){
            // hide text
            this.windowHit.interText.setVisible(false);
            this.clean.interText.setVisible(false);
            this.rock.interText.setVisible(false);
            this.textTimer = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        /*
        if (rag == 1 && windowClean == 1 && rock == 0) {
            this.rock.setVisible(true);
            this.clean.setVisible(true);
        }
        
        if (windowClean == 1 & rock == 1) {
            this.rock.setVisible(false);
            this.clean.setVisible(true);
        }
        */

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.stop("lookoutScales");
            this.scene.wake("lookoutWest");
        };
    }
}