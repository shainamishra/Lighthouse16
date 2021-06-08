class IslandNorth extends Phaser.Scene {
    constructor() {
        super("islandNorth");
    }

    preload() {
        // images
        this.load.image('islandnorth', './assets/puzzle1/IslandNorth.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('cellarUnlocked', './assets/puzzle1/overlays/cellarUnlocked.png');
        this.load.audio('break', './assets/sfx/Breakapart.wav');

        // audio
        this.load.audio('chain', './assets/sfx/chain.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.islandnorth = this.add.tileSprite(0, 0, 1280, 720, 'islandnorth').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.chain = this.sound.add('chain', {volume: 0.2});

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
        // lighthouse
        this.lighthouse = this.add.sprite(750,250, 'hitbox');
        this.lighthouse.setDisplaySize(300, 400);
        this.lighthouse.setInteractive({
            cursor: handPointer
        });
        this.lighthouse.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'The door to the \nlighthouse is locked');
        this.lighthouse.interText.setFontSize(50);
        this.lighthouse.interText.setVisible(false);

        // cellar
        this.cellar = this.add.sprite(100, 550, 'hitbox');
        this.cellar.setDisplaySize(300, 200);
        this.cellar.setInteractive({
            cursor: handPointer
        });
        this.cellar.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, '  There are chains\nblocking the cellar');
        this.cellar.interText.setFontSize(50);
        this.cellar.interText.setVisible(false);  

        // cellar unlocked
        this.cellOpen = this.add.image(640, 360, 'cellarUnlocked');
        this.cellOpen.setDisplaySize(1280, 720);
        this.cellOpen.setVisible(false);
        this.cellOpen.interText = this.add.text(100, borderUISize + borderPadding * 2 + 100, 'Press space\n to enter\nthe cellar');
        this.cellOpen.interText.setFontSize(50);
        this.cellOpen.interText.setVisible(false); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.keyHot = this.add.sprite(460, 659, 'keyHot');
        this.keyHot.setDisplaySize(60, 60);
        this.keyHot.setInteractive({
            cursor: handPointer
        });
        this.keyHot.setVisible(false);

        this.reelHot = this.add.sprite(560, 660, 'reelHot');
        this.reelHot.setDisplaySize(75, 75);
        this.reelHot.setInteractive({
            cursor: handPointer
        });
        this.reelHot.setVisible(false);

        this.telescopeHot = this.add.sprite(655, 660, 'telescopeHot');
        this.telescopeHot.setDisplaySize(80, 80);
        this.telescopeHot.setInteractive({
            cursor: handPointer
        });
        this.telescopeHot.setVisible(false);

        this.boltcuttersHot = this.add.sprite(755, 659, 'boltcuttersHot');
        this.boltcuttersHot.setDisplaySize(70, 70);
        this.boltcuttersHot.setInteractive({
            cursor: handPointer
        });
        this.boltcuttersHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerLight = 0;
        this.textTimerCell = 0;
        this.cellerOpen = false;
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);

        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimerLight == 0){
                this.scene.switch("instructionScene");
                this.textTimerLight = 1;
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // lighthouse text
        // if lighthouse text is not on screen 
        if(this.textTimerLight == 0){
            // if click on lighthouse
            this.lighthouse.on('pointerdown', (pointer) => {
                this.lighthouse.interText.setVisible(true);
                this.textTimerLight = 1;
            });
        }

        // text on screen
        if(this.textTimerLight > 0 && this.textTimerLight < 150) {
            this.textTimerLight += 1;
        } 
        else if(this.textTimerLight >= 150){
            // hide text
            this.lighthouse.interText.setVisible(false);
            this.textTimerLight = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cellar text
        // if cellar text is not on screen 
        if(this.textTimerCell == 0){
            // if click on cellar
            if(boltGot == 0){
                this.cellar.on('pointerdown', (pointer) => {
                    this.cellar.interText.setVisible(true);
                    this.textTimerCell = 1;
                });
            }
            else if(boltGot == 1){
                this.cellar.on('pointerdown', (pointer) => {
                    this.chain.play();
                    this.cellOpen.setVisible(true);
                    this.textTimerCell = 1;
                    this.cellerOpen = true;
                    unlocked = 2;
                });
            }
        }

        // text on screen
        if(this.textTimerCell > 0 && this.textTimerCell < 150) {
            this.textTimerCell += 1;
        } 
        else if(this.textTimerCell >= 150){
            // hide text
            this.cellar.interText.setVisible(false);
            this.textTimerCell = 0;
        }
        
        // show open state
        if(boltGot == 1 && unlocked == 2){
            this.cellOpen.setVisible(true);
            this.cellOpen.interText.setVisible(true); 
            if(Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.sound.get('menu_music').stop();
                this.scene.start("spread2");
            };
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandEast");
        };

        // delete this
        /*
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.sound.get('menu_music').stop();
            this.scene.start("spread2");
        };
        */
    }

    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (keyGot == 1){
                this.keyHot.setVisible(true);
            }

            if (reelGot == 1){
                this.reelHot.setVisible(true);
            }

            if (scopeGot == 2){
                this.telescopeHot.setVisible(true);
            }

            if (boltGot == 1){
                this.boltcuttersHot.setVisible(true);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.keyHot.setVisible(false);
            this.reelHot.setVisible(false);
            this.telescopeHot.setVisible(false);
            this.boltcuttersHot.setVisible(false);
        }
    }
}