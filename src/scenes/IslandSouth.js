class IslandSouth extends Phaser.Scene {
    constructor() {
        super("islandSouth");
    }
    
    preload() {
        // images
        this.load.image('islandsouth', './assets/IslandSouth.PNG');


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
            cosolde.log(event);
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
      
    }

    update() {
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress

        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandnorthScene");
        };
    }
}