class Intro extends Phaser.Scene {
    constructor() {
        super("Intro");
    }
    
    preload() {
        // images
        this.load.image('blkbg', './assets/blkbg.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //text fades in n out and when it gets to the end go to island north
        //text in the corner: press space to skip faster?
    }

    update(){
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //i guess if the player smashes the spacebar add time to the timer so it goes by faster?
    }
}