class Lighthouse extends Phaser.Scene {
    constructor() {
        super("lighthouse");
    }
    
    preload() {
        // images
        this.load.image('bg', './assets/bg.png');
        this.load.image('inventory', './assets/Inventory.png');
        this.load.image('inventBG', './assets/inventory_interior.png');
        this.load.image('x', './assets/x.png');

        // obstacles


        // spritesheets

    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
        this.playBGM.play();
        */

        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

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
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }

    update() {
        // clicks inventory
        this.invent.on('pointerdown', function (pointer){
            //console.log("click")
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

        // temp, back to outside
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("islandNorth");  
        }
    }
}