class MainWest extends Phaser.Scene {
    constructor() {
        super("mainWest");
    }

    preload() {
        // images
        this.load.image('mainWest', './assets/puzzle3/overlays/base.png');
        this.load.image('table knife', './assets/puzzle3/overlays/table knife.png')
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('table', './assets/puzzle3/overlays/dining table.png');
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
        this.load.image('hammerhot', './assets/puzzle3/items/hammer.png');
        this.load.image('knifehot', './assets/puzzle3/items/knife.png');
        this.load.image('coin1hot', './assets/puzzle3/overlays/coin1.png');
        this.load.image('coin2hot', './assets/puzzle3/overlays/coin2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.mainwest = this.add.tileSprite(0, 0, 1280, 720, 'mainWest').setOrigin(0, 0); 

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
        this.tableIm = this.add.sprite(350,350, 'table');

        this.knife = this.add.sprite(470, 460, 'hitbox');
        this.knife.setDisplaySize(100, 100);
        this.knife.setInteractive({
            useHandCursor: true
        });
        this.knife.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'You picked up the knife');
        this.knife.interText.setFontSize(50);
        this.knife.interText.setVisible(false);
        
        this.knifeIm = this.add.sprite(350, 350, 'table knife');
        this.knifeIm.setVisible(true);
        
        this.food = this.add.sprite(700, 460, 'hitbox');
        this.food.setDisplaySize(250,100);
        this.food.setInteractive({
            useHandCursor: true
        });
        this.food.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'Ugh. The food has long rotted');
        this.food.interText.setFontSize(50);
        this.food.interText.setVisible(false);

        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);

        this.hammerHot = this.add.sprite(460, 659, 'hammerhot');
        this.hammerHot.setDisplaySize(60, 60);
        this.hammerHot.setInteractive({
            useHandCursor: true
        });
        this.hammerHot.setVisible(false);

        this.knifeHot = this.add.sprite(560, 660, 'knifehot');
        this.knifeHot.setDisplaySize(65, 65);
        this.knifeHot.setInteractive({
            useHandCursor: true
        });
        this.knifeHot.setVisible(true);

        this.scoinHot = this.add.sprite(655, 660, 'coin1hot');
        this.scoinHot.setDisplaySize(80, 80);
        this.scoinHot.setInteractive({
            useHandCursor: true
        });
        this.scoinHot.setVisible(false);

        this.pcoinHot = this.add.sprite(755, 659, 'coin2hot');
        this.pcoinHot.setDisplaySize(70, 70);
        this.pcoinHot.setInteractive({
            useHandCursor: true
        });
        this.pcoinHot.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerKnife =0;
        this.textTimerFood =0;
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
        // end states
        if(this.textTimerKnife == 0){
            this.knife.on('pointerdown', (pointer) => {
                this.knife.interText.setVisible(true);
                this.textTimerKnife = 1;
                knifeGot = 1
            });
        }

        // text on screen
        if(this.textTimerKnife> 0 && this.textTimerKnife < 150) {
            this.textTimerKnife += 1;
            if(this.textTimerKnife == 2){
                this.sound.play("itemtake");
            }
        } 
        else if(this.textTimerKnife >= 150){
            // hide text
            this.knife.interText.setVisible(false);
            this.textTimerKnife = 0;
        }
        if(knifeGot == 1){
            this.knifeIm.setVisible(false);
        }

        if(this.textTimerFood == 0){
            this.food.on('pointerdown', (pointer) => {
                this.food.interText.setVisible(true);
                this.textTimerFood = 1;
            });
        }

        // text on screen
        if(this.textTimerFood> 0 && this.textTimerFood < 150) {
            this.textTimerFood += 1;
        } 
        else if(this.textTimerFood >= 150){
            // hide text
            this.food.interText.setVisible(false);
            this.textTimerFood = 0;
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("mainSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("mainNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("mainEast");
        };
    }
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);
            if(hammerGot == 1){
                this.hammerHot.setVisible(true);
            }
            if(knifeGot == 1){
                this.knifeHot.setVisible(true);
            }
            if(scoinGot == 1){
                this.scoinHot.setVisible(true);
            }
            if(pcoinGot == 1){
                this.pcoinHot.setVisible(true);
            }
        }
        else{
            this.hotbar.setVisible(false);
            this.hammerHot.setVisible(false);
            this.knifeHot.setVisible(false);
            this.scoinHot.setVisible(false);
            this.pcoinHot.setVisible(false);
        
        }
    }
}