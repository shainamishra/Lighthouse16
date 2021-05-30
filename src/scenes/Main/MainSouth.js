class MainSouth extends Phaser.Scene {
    constructor() {
        super("mainSouth");
    }

    preload() {
        // images
        this.load.image('mainSouth', './assets/puzzle3/overlays/base.png');
        this.load.image('southinitial', './assets/puzzle3/overlays/skull and hatch.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('broke', './assets/puzzle3/overlays/broken skull.png');
        this.load.image('floorcoin', './assets/puzzle3/overlays/skull coin.png')
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
        this.initial = this.add.sprite(620, 375, 'southinitial');
        
        this.skull = this.add.sprite(975, 150, 'hitbox');
        this.skull.setDisplaySize(150, 200);
        this.skull.setInteractive({
            useHandCursor: true
        });
        this.skull.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'A...fake skull hangs here?');
        this.skull.interText.setFontSize(50);
        this.skull.interText.setVisible(false);

        this.smashed = this.add.sprite(620, 375, 'broke');

        this.scoin = this.add.sprite(620, 830, 'floorcoin');
        this.scoinbox = this.add.sprite(930, 650, 'hitbox');
        this.scoinbox.setDisplaySize(100,100);
        this.scoinbox.setInteractive({
            useHandCursor: true
        });
        this.scoinbox.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 250, 'A coin was in the skull');
        this.scoinbox.interText.setFontSize(50);
        this.scoinbox.interText.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerSkull = 0;
        this.textTimerCoin = 0;

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
            if(hammerGot == 1){
                this.skull.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'You smashed the jaw\n with the hammer');
                this.skull.interText.setFontSize(50);
                this.skull.interText.setVisible(false);
            }

            this.skull.on('pointerdown', (pointer) => {
            this.skull.interText.setVisible(true);
            this.textTimerSkull = 1;
            });
        
        }

        // text on screen
        if(this.textTimerSkull > 0 && this.textTimerSkull < 150) {
            this.textTimerSkull += 1;
            if(hammerGot ==1){
                skullsmash =1;
            }
        } 
        else if(this.textTimerSkull >= 150){
            // hide text
            this.skull.interText.setVisible(false);
            this.textTimerSkull = 0;
        }

        if(skullsmash == 1 && scoinGot == 0){
            this.smashed.setVisible(true);
            this.scoin.setVisible(true);
            this.scoinbox.setVisible(true);
        }
        else if(skullsmash == 1 && scoinGot == 1){
            this.smashed.setVisible(true);
            this.scoin.setVisible(false);
            this.scoinbox.setVisible(false);
        }
        else{
            this.smashed.setVisible(false);
            this.scoin.setVisible(false);
            this.scoinbox.setVisible(false);
        }

        if(this.textTimerCoin == 0){
            this.scoinbox.on('pointerdown', (pointer) => {
                this.scoinbox.interText.setVisible(true);
                this.textTimerCoin = 1;
                });
        }
        if(this.textTimerCoin > 0 && this.textTimerCoin <150){
            scoinGot = 1;
            this.textTimerCoin += 1;
        }
        else if(this.textTimerCoin >= 150){
            this.scoinbox.interText.setVisible(false);
            this.textTimerCoin = 0;
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