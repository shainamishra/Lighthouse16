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
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
        this.load.image('hammerhot', './assets/puzzle3/items/hammer.png');
        this.load.image('knifehot', './assets/puzzle3/items/knife.png');
        this.load.image('coin1hot', './assets/puzzle3/overlays/coin2.png');
        this.load.image('hand', './assets/puzzle3/items/minute hand.png');
        this.load.image('ladder', './assets/puzzle3/items/hatch ladder.png');
        this.load.audio('break', './assets/sfx/Breakapart.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.mainsouth = this.add.tileSprite(0, 0, 1280, 720, 'mainSouth').setOrigin(0, 0); 

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
            cursor: handPointer
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
            cursor: handPointer
        });
        // help image
        this.helpIm = this.add.image(660, 355, 'help');
        this.helpIm.setDisplaySize(1280, 720);
        this.helpIm.setVisible(true);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        this.initial = this.add.sprite(620, 375, 'southinitial');
        
        this.skull = this.add.sprite(975, 150, 'hitbox');
        this.skull.setDisplaySize(150, 200);
        this.skull.setInteractive({
            cursor: handPointer
        });
        this.skull.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'A...fake skull hangs here?');
        this.skull.interText.setFontSize(50);
        this.skull.interText.setVisible(false);

        this.smashed = this.add.sprite(620, 375, 'broke');
        
        this.ladder = this.add.sprite(620, 350, 'ladder');
        this.ladder.interText = this.add.text(600, 500, 'Press space to climb\nthe ladder');
        this.ladder.interText.setFontSize(50);
        this.ladder.interText.setVisible(false);
        this.ladder.setVisible(false);


        this.scoin = this.add.sprite(620, 830, 'floorcoin');
        this.scoinbox = this.add.sprite(930, 650, 'hitbox');
        this.scoinbox.setDisplaySize(100,100);
        this.scoinbox.setInteractive({
            cursor: handPointer
        });
        this.scoinbox.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 250, 'A coin was in the skull');
        this.scoinbox.interText.setFontSize(50);
        this.scoinbox.interText.setVisible(false);

        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);

        this.hammerHot = this.add.sprite(460, 659, 'hammerhot');
        this.hammerHot.setDisplaySize(60, 60);
        this.hammerHot.setInteractive({
            cursor: handPointer
        });
        this.hammerHot.setVisible(false);

        this.knifeHot = this.add.sprite(560, 660, 'knifehot');
        this.knifeHot.setDisplaySize(65, 65);
        this.knifeHot.setInteractive({
            cursor: handPointer
        });
        this.knifeHot.setVisible(false);

        this.scoinHot = this.add.sprite(655, 660, 'coin1hot');
        this.scoinHot.setDisplaySize(80, 80);
        this.scoinHot.setInteractive({
            cursor: handPointer
        });
        this.scoinHot.setVisible(false);

        this.handHot = this.add.sprite(755, 659, 'hand');
        this.handHot.setDisplaySize(70, 70);
        this.handHot.setInteractive({
            cursor: handPointer
        });
        this.handHot.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerSkull = 0;
        this.textTimerCoin = 0;
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

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimerSkull == 0){
                this.scene.switch("instructionScene");
                this.textTimerSkull = 1;
            }
        });


        // end states
        if(this.textTimerSkull == 0){
            if(hammerGot == 1){
                this.skull.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'You smashed the jaw\n with the hammer');
                this.skull.interText.setFontSize(50);
                this.skull.interText.setVisible(false);
            }

            this.skull.on('pointerdown', (pointer) => {
            this.skull.interText.setVisible(true);
            if(hammerGot == 1 && skullsmash == 0){
                this.sound.play("break", {volume: 0.2});
            }
            this.textTimerSkull = 1;
            });
        
        }

        // text on screen
        if(this.textTimerSkull > 0 && this.textTimerSkull < 150) {
            this.textTimerSkull += 1;
            if(hammerGot ==1){
                this.hammerHot.setVisible(false)
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
            this.hammerHot.setVisible(false)
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
            if(scoinGot ==0){
                scoinGot = 1;
            }
            this.textTimerCoin += 1;
            if(this.textTimerCoin == 2){
                this.sound.play("itemtake");
            }
        }
        else if(this.textTimerCoin >= 150){
            this.scoinbox.interText.setVisible(false);
            this.textTimerCoin = 0;
        }


        if(clockUnlock ==1){
            this.ladder.setVisible(true);
            this.ladder.interText.setVisible(true);
            if(Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.sound.get('clockbgm').stop();
                this.scene.start("spread4");
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("mainEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("mainWest");
        };
    }
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);
            if(hammerGot == 1 && scoinGot == 0){
                this.hammerHot.setVisible(true);
            }
            if(knifeGot == 1 && pcoinGot == 0){
                this.knifeHot.setVisible(true);
            }
            if(scoinGot == 1){
                this.scoinHot.setVisible(true);
                this.hammerHot.setVisible(false);
            }
            if(pcoinGot == 1){
                this.handHot.setVisible(true);
                this.knifeHot.setVisible(false);
            }
        }
        else{
            this.hotbar.setVisible(false);
            this.hammerHot.setVisible(false);
            this.knifeHot.setVisible(false);
            this.scoinHot.setVisible(false);
            this.handHot.setVisible(false);
        
        }
    }
}