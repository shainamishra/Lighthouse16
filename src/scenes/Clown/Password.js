class Password extends Phaser.Scene {
    constructor() {
        super("password");
    }

    preload(){
        this.load.image('hi', './assets/blkbg.png');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bruhhh = this.add.tileSprite(0, 0, 1280, 720, 'hi').setOrigin(0, 0); 

        //add text: enter password, itll be found at the top of the tower .... something something reference humbug story book
        //text enter box
        //enter the clown room? yes -> chantels room if no ->go back to instructions
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
    }
    
    update() {

    }
}