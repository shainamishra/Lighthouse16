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
        this.load.image('painting', './assets/puzzle3/overlays/painting.png');
        this.load.image('ripPainting', './assets/puzzle3/overlays/rippedPainting.png');
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
        this.load.image('hammerhot', './assets/puzzle3/items/hammer.png');
        this.load.image('knifehot', './assets/puzzle3/items/knife.png');
        this.load.image('coin1hot', './assets/puzzle3/overlays/coin2.png');
        this.load.image('hand', './assets/puzzle3/items/minute hand.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.maineast = this.add.tileSprite(0, 0, 1280, 720, 'mainEast').setOrigin(0, 0); 

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
        // hot bar
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        this.drawer = this.add.sprite(650, 350,'drawer');

        // hammer hit
        this.hammer = this.add.sprite(500, 450, 'hitbox');
        this.hammer.setDisplaySize(100, 100);
        this.hammer.setInteractive({
            cursor: handPointer
        });
        this.hammer.interText = this.add.text(295, 520, 'You picked up the hammer');
        this.hammer.interText.setFontSize(50);
        this.hammer.interText.setVisible(false);
        // hammer image
        this.hammerIm = this.add.sprite(650,350, 'drawer_hammer');

        // frame overlay
        this.framedPainting = this.add.sprite(650, 350, 'farpaint');
        // full painting
        this.painting = this.add.sprite(650, 350, 'painting');
        this.painting.setVisible(false);
        this.painting.interText = this.add.text(borderUISize + borderPadding * 20 + 250, borderUISize + borderPadding * 2, '  A painting of an\nancient sea goddess');
        this.painting.interText.setFontSize(50);
        this.painting.interText.setVisible(false);
        // ripped painting
        this.ripPainting = this.add.sprite(650, 350, 'ripPainting');
        this.ripPainting.setVisible(false);
        this.ripPainting.interText = this.add.text(borderUISize + borderPadding * 20 + 250, borderUISize + borderPadding * 2, 'You cut the painting.\nThe minute hand was\ninside');
        this.ripPainting.interText.setFontSize(50);
        this.ripPainting.interText.setVisible(false);
        // painting hit
        this.paintingHit = this.add.sprite(650, 170, 'hitbox');
        this.paintingHit.setDisplaySize(860, 400);
        this.paintingHit.setInteractive({
            cursor: handPointer
        });
        
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
        this.textTimerHammer = 0;
        this.textTimerPainting = 0;
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
            if(this.textTimerHammer == 0){
                this.scene.switch("instructionScene");
                this.textTimerHammer = 1;
            }
        });
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // click on hammer
        if(this.textTimerHammer == 0){
            this.hammer.on('pointerdown', (pointer) => {
                this.hammer.interText.setVisible(true);
                this.hammer.setVisible(false);
                this.textTimerHammer = 1;
                hammerGot = 1;
            });
        }

        // text on screen
        if(this.textTimerHammer > 0 && this.textTimerHammer < 150) {
            this.textTimerHammer += 1;
            if(this.textTimerHammer == 2){
                this.sound.play("itemtake");
            }
        } 
        else if(this.textTimerHammer >= 150){
            // hide text
            this.hammer.interText.setVisible(false);
            this.textTimerHammer = 0;
        }
        
        if(this.textTimerPainting == 0){
            this.paintingHit.on('pointerdown', (pointer) => {
                this.hammer.interText.setVisible(false);
                this.hammer.setVisible(false);
                this.textTimerPainting = 1;
                this.knifeHot.setVisible(false);
                
                if(knifeGot == 0){
                    this.painting.setVisible(true);
                    this.painting.interText.setVisible(true);
                }
                if(knifeGot == 1){
                    this.ripPainting.setVisible(true);
                    this.ripPainting.interText.setVisible(true);
                }
            });
        }

        if(this.textTimerPainting > 0 && this.textTimerPainting < 150){
            this.textTimerPainting += 1;
            if(knifeGot == 1 && this.textTimerPainting == 2){
                if(pcoinGot ==0){
                    pcoinGot += 1;
                    this.sound.play("itemtake");
                }
                knifeGot == 0;
            }
        }
        else if(this.textTimerPainting >=150){
            this.painting.setVisible(false);
            this.ripPainting.setVisible(false);
            this.painting.interText.setVisible(false);
            this.ripPainting.interText.setVisible(false);
            this.textTimerPainting = 0;

            if(hammerGot == 0){
                this.hammer.setVisible(true);
                this.hammerIm.setVisible(true);
            }
        }
        
        // end state
        if(hammerGot == 1){
            this.hammerIm.setVisible(false);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("mainNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("mainSouth");
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