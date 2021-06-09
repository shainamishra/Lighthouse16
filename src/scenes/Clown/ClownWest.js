class ClownWest extends Phaser.Scene {
    constructor() {
        super("clownWest");
    }

    preload(){
        this.load.image('daren', './assets/clown/daren.png');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'daren').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////

        //define keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    
    update() {
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("clownSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("clownNorth");
        };
    }
}