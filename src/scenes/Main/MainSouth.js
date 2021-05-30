class MainSouth extends Phaser.Scene {
    constructor() {
        super("mainSouth");
    }

    preload() {
        // images
        this.load.image('mainSouth', './assets/puzzle3/overlays/base.png');
        this.load.image('southinitial', './assets/puzzle3/overlays/skull and hatch.png');
        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.mainsouth = this.add.tileSprite(0, 0, 1280, 720, 'mainSouth').setOrigin(0, 0); 

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
        this.initial = this.add.sprite(300, 150, 'southinitial');
        
        this.skull = this.add.sprite(975, 150, 'hitbox');
        this.skull.setDisplaySize(150, 200);
        this.skull.setInteractive({
            useHandCursor: true
        });
        this.skull.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'A...fake skull hangs here?');
        this.skull.interText.setFontSize(50);
        this.skull.interText.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerSkull = 0;

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
        // end states
        if(this.textTimerSkull == 0){
            this.skull.on('pointerdown', (pointer) => {
                this.skull.interText.setVisible(true);
                this.textTimerSkull = 1;
            });
        }

        // text on screen
        if(this.textTimerSkull > 0 && this.textTimerSkull < 150) {
            this.textTimerSkull += 1;
        } 
        else if(this.textTimerSkull >= 150){
            // hide text
            this.skull.interText.setVisible(false);
            this.textTimerSkull = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("mainEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("mainWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("mainNorth");
        };
    }
}