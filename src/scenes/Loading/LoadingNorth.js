class LoadingNorth extends Phaser.Scene {
    constructor() {
        super("loadingNorth");
    }

    preload() {
        // images
        this.load.image('betweenHatch', './assets/loadingRoom/betweenHatch.png');
        this.load.image('betweenLadder', './assets/loadingRoom/betweenLadder.png');
        this.load.image('betweenRoom', './assets/loadingRoom/betweenRoom.png');
        this.load.image('spreadEmpty', './assets/loadingRoom/finalSpreadEmpty.png');
        this.load.image('spread', './assets/loadingRoom/finalSpread.png');

        // hitbox
        this.load.image('hitbox', './assets/HitBox2.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.loadingNorth = this.add.tileSprite(0, 0, 1280, 720, 'betweenRoom').setOrigin(0, 0); 

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

        // overlays
        // clean window
        this.clean = this.add.image(640, 360, 'clean');
        this.clean.setDisplaySize(1280, 720);
        this.clean.interText = this.add.text(350, 550, 'You cleaned the window.');
        this.clean.interText.setFontSize(50);
        this.clean.interText.setVisible(false);
        this.clean.setVisible(false);
        */

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory box set up
        this.invent = this.add.sprite(60, 60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x6d465f).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 
        if(this.textTimer == 0){
            //this.windowHit.on('pointerdown', (pointer) => {
            //});
        }

        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 150){
            this.textTimer = 0;
            // hide text
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        /*
        if (rag == 1 && windowClean == 1 && citrine == 0) {
            this.rock.setVisible(true);
            this.clean.setVisible(true);
        }
        
        if (windowClean == 1 & citrine == 1) {
            this.rock.setVisible(false);
            this.clean.setVisible(true);
        }
        */


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("loadingSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("loadingSouth");
        };
    }
}