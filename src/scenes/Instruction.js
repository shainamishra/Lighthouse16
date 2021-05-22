class Instruction extends Phaser.Scene {
    constructor() {
        super("instructionScene");
    }
    
    preload() {
        // images
        this.load.image('bg', './assets/bg.png');


        // obstacles


        // spritesheets

    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // change scenes
        this.input.keyboard.on('keydown-SPACE', () => {
			this.sound.play("CrashingWaves");
            this.scene.start("islandNorth"); 
		});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 10, 'WASD for movement').setFontSize(50);
        this.add.text(borderUISize + borderPadding * 15, borderUISize + borderPadding * 20, 'Left click to interact').setFontSize(50);
    }
}