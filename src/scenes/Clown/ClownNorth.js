class ClownNorth extends Phaser.Scene {
    constructor() {
        super("clownNorth");
    }

    preload(){
        this.load.image('chantel', './assets/clown/chantel.png');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'chantel').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);

        //define keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    
    update() {
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("clownWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("clownEast");
        };
        //how to return to main menu from the clown room? leave instructions on how to leave as well :)
    }
}