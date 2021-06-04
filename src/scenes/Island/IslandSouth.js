class IslandSouth extends Phaser.Scene {
    constructor() {
        super("islandSouth");
    }
    
    preload() {
        // images
        this.load.image('islandsouth', './assets/puzzle1/IslandSouth.PNG');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('gravebox', './assets/puzzle1/overlays/gravebox.png');
        this.load.image('graveboxEmpty', './assets/puzzle1/overlays/graveboxUsed.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // bg
        this.islandsouth = this.add.tileSprite(0, 0, 1280, 720, 'islandsouth').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // inventory box set up
        this.invent = this.add.sprite(60, 60, 'hitbox');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
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
            useHandCursor: true
        });
        // help image
        this.helpIm = this.add.image(660, 355, 'help');
        this.helpIm.setDisplaySize(1280, 720);
        this.helpIm.setVisible(true);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // graves
        this.graves = this.add.sprite(850, 250, 'hitbox');
        this.graves.setDisplaySize(600, 400);
        this.graves.setInteractive({
            useHandCursor: true
        });
        this.graves.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'Three graves with strange\ntext instead of names\nI wonder what they mean?');
        this.graves.interText.setFontSize(50);
        this.graves.interText.setVisible(false);

        // grave box
        this.gravebox = this.add.sprite(520, 400, 'hitbox');
        this.gravebox.setDisplaySize(90, 82);
        this.gravebox.setVisible(true);
        this.gravebox.setInteractive({
            useHandCursor: true
        });
        this.gravebox.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 150, 'A small locked box sits\ninfront of the graves');
        this.gravebox.interText.setFontSize(50);
        this.gravebox.interText.setVisible(false);

        // grave box closed
        this.graveboxClosed = this.add.sprite(650, 350, 'gravebox');
        this.graveboxClosed.setDisplaySize(1280, 720);
        this.graveboxClosed.setVisible(true);

        // grave box empty
        this.graveboxEmpty = this.add.sprite(650, 350, 'graveboxEmpty');
        this.graveboxEmpty.setDisplaySize(1280, 720);
        this.graveboxEmpty.setVisible(false);

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
            useHandCursor: true
        });
        this.keyHot.setVisible(false);

        this.reelHot = this.add.sprite(560, 660, 'reelHot');
        this.reelHot.setDisplaySize(75, 75);
        this.reelHot.setInteractive({
            useHandCursor: true
        });
        this.reelHot.setVisible(false);

        this.telescopeHot = this.add.sprite(655, 660, 'telescopeHot');
        this.telescopeHot.setDisplaySize(80, 80);
        this.telescopeHot.setInteractive({
            useHandCursor: true
        });
        this.telescopeHot.setVisible(false);

        this.boltcuttersHot = this.add.sprite(755, 659, 'boltcuttersHot');
        this.boltcuttersHot.setDisplaySize(70, 70);
        this.boltcuttersHot.setInteractive({
            useHandCursor: true
        });
        this.boltcuttersHot.setVisible(false);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerGraves = 0;
        this.textTimerGBox = 0;
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
            if(this.textTimerGraves == 0){
                this.scene.switch("instructionScene");
                this.textTimerGraves = 1;
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(this.textTimerGraves == 0){
            // if click on lighthouse
            this.graves.on('pointerdown', (pointer) => {
                this.graves.interText.setVisible(true);
                this.textTimerGraves = 1;
            });
        }

        // text on screen
        if(this.textTimerGraves > 0 && this.textTimerGraves < 150) {
            this.textTimerGraves += 1;
        } 
        else if(this.textTimerGraves >= 150){
            // hide text
            this.graves.interText.setVisible(false);
            this.textTimerGraves = 0;
        }

        if(this.textTimerGBox == 0 && keyGot == 0){
            // if click on lighthouse
            this.gravebox.on('pointerdown', (pointer) => {
                this.gravebox.interText.setVisible(true);
                this.textTimerGBox = 1;
            });
        }
        else if(this.textTimerGBox ==0 && keyGot == 1){
            this.gravebox.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 50, "A reel was inside");
            this.gravebox.interText.setFontSize(50);
            this.gravebox.interText.setVisible(false);
            this.gravebox.on('pointerdown', (pointer) => {
                this.graveboxClosed.setVisible(false);
                this.graveboxEmpty.setVisible(true);
                this.gravebox.interText.setVisible(true);
                this.textTimerGBox = 1;
                this.keyHot.setVisible(false);
                reelGot =1 ;
                keyGot =0;
            });
        }
        if(this.textTimerGBox == 1 && reelGot == 1){
            this.sound.play("itemtake");
        }
        // text on screen
        if(this.textTimerGBox> 0 && this.textTimerGBox < 150) {
            this.textTimerGBox += 1;
        } 
        else if(this.textTimerGBox >= 150){
            // hide text
            this.gravebox.interText.setVisible(false);
            this.textTimerGBox = 0;
        }

        // show open state
        if(keyGot == 1 && reelGot == 1){
            this.graveboxClosed.setVisible(false);
            this.graveboxEmpty.setVisible(true);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandWest");
        };
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
