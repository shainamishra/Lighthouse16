class Lose extends Phaser.Scene {
    constructor() {
        super("endLose");
    }

    preload(){
        // images
        this.load.image('gameover', './assets/end/gameover.png');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'gameover').setOrigin(0, 0); 

        // music
        this.cellarBGM = this.sound.add('cellar_music', {volume: 0.1, loop: true});
        this.cellarBGM.play();

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
    }
    
    update() {
        //return to puzzle 5 loading room to try again
    }
}