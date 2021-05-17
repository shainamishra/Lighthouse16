class IslandSouth extends Phaser.Scene {
    constructor() {
        super("islandSouth");
    }
    
    preload() {
        // images
        this.load.image('islandsouth', './assets/IslandSouth.PNG');
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
        this.islandsouth = this.add.tileSprite(0, 0, 1280, 720, 'islandsouth').setOrigin(0, 0); 

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
        
        ////////////////////////////////////////////////////
        this.graves = this.add.sprite(850, 250, 'hitbox');
        this.graves.setDisplaySize(600, 400);
        this.graves.setInteractive({
            useHandCursor: true
        });
        this.graves.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'Strange text instead of names');
        this.graves.interText.setFontSize(50);
        this.graves.interText.setVisible(false);

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
        if(textTimerGraves == 0){
            // if click on lighthouse
            this.graves.on('pointerdown', function (pointer){
                this.interText.setVisible(true);
                textTimerGraves = 1;
            });
        }

        // text on screen
        if(textTimerGraves > 0 && textTimerGraves < 150) {
            textTimerGraves += 1;
        } 
        else if(textTimerGraves >= 150){
            // hide text
            this.graves.interText.setVisible(false);
            textTimerGraves = 0;
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
            this.scene.start("islandEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandNorth");
        };
    }
}