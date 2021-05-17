class IslandEast extends Phaser.Scene {
    constructor() {
        super("islandEast");
    }
    
    preload() {
        // images
        this.load.image('islandeast', './assets/islandEast');
        this.load.image('hitbox', './assets/HitBox2.png');

        // inventory
        this.load.image('inventory', './assets/Inventory.png');
        this.load.image('inventBG', './assets/inventoryInterior.png');
        this.load.image('x', './assets/x.png');

        // spritesheets

    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
        this.playBGM.play();
        */

        // place tile sprite
        this.islandeast = this.add.tileSprite(0, 0, 1280, 720, 'islandeast').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            console.log(pointer);
            console.log(gameObject);
            console.log(event);
        });
        
        //////////////////////////
        this.fishingpole = this.add.sprite(400,300, 'hitbox');
        this.fishingpole.setDisplaySize(300, 400);
        this.fishingpole.setInteractive({
            useHandCursor: true
        });
        this.fishingpole.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'The Reel is missing');
        this.fishingpole.interText.setFontSize(50);
        this.fishingpole.interText.setVisible(false);

        this.bucket = this.add.sprite(900,550, 'hitbox');
        this.bucket.setDisplaySize(100, 150);
        this.bucket.setInteractive({
            useHandCursor: true
        });
        this.bucket.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 50, 'There is a key in the bucket');
        this.bucket.interText.setFontSize(50);
        this.bucket.interText.setVisible(false);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory 
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        // box bg
        this.boxBG = this.add.sprite(650,350, 'inventBG');
        this.boxBG.setDisplaySize(1280, 720);
        this.boxBG.setVisible(false);

        // close
        this.closeInven = this.add.sprite(50, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(false);
        this.closeInven.setInteractive({
            useHandCursor: true
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        
    }

    update() {
        if(textTimerRod== 0){
            // if click on lighthouse
            this.fishingpole.on('pointerdown', function (pointer){
                this.interText.setVisible(true);
                textTimerRod = 1;
            });
        }

        // text on screen
        if(textTimerRod > 0 && textTimerRod < 150) {
            textTimerRod += 1;
        } 
        else if(textTimerRod >= 150){
            // hide text
            this.fishingpole.interText.setVisible(false);
            textTimerRod = 0;
        }
        
        if(textTimerBucket == 0){
            // if click on lighthouse
            this.bucket.on('pointerdown', function (pointer){
                this.interText.setVisible(true);
                textTimerBucket = 1;
            });
        }

        // text on screen
        if(textTimerBucket > 0 && textTimerBucket < 150) {
            textTimerBucket += 1;
        } 
        else if(textTimerBucket >= 150){
            // hide text
            this.bucket.interText.setVisible(false);
            textTimerBucket = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory
        // clicks inventory
        this.invent.on('pointerdown', function (pointer){
            console.log("click")
            inventory = true;
        });

        // inventory is open
        if(inventory == true){
            // hide inventory icon
            this.invent.setVisible(false);
            // show inventory bg
            this.boxBG.setVisible(true);
            // show inventory close button
            this.closeInven.setVisible(true);
        }

        // "x" to close inventory
        this.closeInven.on('pointerdown', function (pointer){
            console.log("close")
            inventory = false;
        });

        // inventory is closed
        if(inventory == false){
            // show inventory icon
            this.invent.setVisible(true);
            // hide inventory bg
            this.boxBG.setVisible(false);
            // hide inventory close button
            this.closeInven.setVisible(false);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress

        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandWest");
        };
    }
}