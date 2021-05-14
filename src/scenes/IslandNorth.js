class IslandNorth extends Phaser.Scene {
    constructor() {
        super("islandnorthScene");
    }
    
    preload() {
        // images
        this.load.image('islandnorth', './assets/IslandNorth.PNG');
        this.load.image('hitbox', './assets/HitBox2.png');



    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
        this.playBGM.play();
        */
        // place tile sprite
        this.islandnorth = this.add.tileSprite(0, 0, 1280, 720, 'islandnorth').setOrigin(0, 0); 

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
        
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        
        //objects
        this.lighthouse = this.add.sprite(750,250, 'hitbox');
        this.lighthouse.setDisplaySize(300, 400);
        this.lighthouse.setInteractive({
            useHandCursor: true
        });
        this.cellar = this.add.sprite(100, 550, 'hitbox');
        this.cellar.setDisplaySize(300, 200);
        this.cellar.setInteractive({
            useHandCursor: true
        });
    }

    update() {
        // option to restart game
        /*
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("menuScene");
        }

        // makes background scroll 
        this.lab.tilePositionX += 15;
        */
    }
}