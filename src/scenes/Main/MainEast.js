class MainEast extends Phaser.Scene {
    constructor() {
        super("mainEast");
    }

    preload() {
        // images
        this.load.image('mainEast', './assets/puzzle3/overlays/base.png');
        this.load.image('drawer', './assets/puzzle3/overlays/drawer.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('drawer_hammer', './assets/puzzle3/overlays/drawerhammer.png');
        this.load.image('farpaint', './assets/puzzle3/overlays/framed painting.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.maineast = this.add.tileSprite(0, 0, 1280, 720, 'mainEast').setOrigin(0, 0); 

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
        // lights off CN
        this.painting = this.add.sprite(650, 350, 'farpaint');
        this.drawer = this.add.sprite(650,350,'drawer');

        this.hammer = this.add.sprite(500, 450, 'hitbox');
        this.hammer.setDisplaySize(100, 100);
        this.hammer.setInteractive({
            useHandCursor: true
        });
        this.hammer.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'You picked up the hammer');
        this.hammer.interText.setFontSize(50);
        this.hammer.interText.setVisible(false);


        this.hammerIm = this.add.sprite(650,350, 'drawer_hammer');
        this.hammerIm.setVisible(true);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerHammer = 0;

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


        // end states
        if(this.textTimerHammer == 0){
            this.hammer.on('pointerdown', (pointer) => {
                this.hammer.interText.setVisible(true);
                this.textTimerHammer = 1;
            });
        }
        // text on screen
        if(this.textTimerHammer > 0 && this.textTimerHammer < 150) {
            this.textTimerHammer += 1;
        } 
        else if(this.textTimerHammer >= 150){
            // hide text
            this.hammer.interText.setVisible(false);
            this.textTimerHammer = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("mainNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("mainSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("mainWest");
        };
    }
}