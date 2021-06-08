class Lose extends Phaser.Scene {
    constructor() {
        super("endLose");
    }

    preload(){
        this.load.image('gameover', './assets/end/gameover.png');
        this.load.audio('cellar_music', './assets/sfx/theLighthouse_underwater.wav');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.cameras.main.fadeIn(1000, 0, 0, 0)

        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'gameover').setOrigin(0, 0); 

        // music
        this.loseBGM = this.sound.add('cellar_music', {volume: 0.2, loop: true});
        this.loseBGM.play();

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // variables
        inRitual = 0;
        level = 4;
        this.textTimer = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x0e152b).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x0e152b).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x0e152b).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x0e152b).setOrigin(0, 0);
    }
    
    update() {
        this.input.keyboard.on('keydown-SPACE', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                console.log('in')
                this.loseBGM.stop();
                this.scene.start("loadingNorth"); 
            }
        });
    }
}