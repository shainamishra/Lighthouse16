class Instruction extends Phaser.Scene {
    constructor() {
        super("instructionScene");
    }
    
    preload() {
        // images
        this.load.image('instructions', './assets/instructions.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'instructions').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // change scenes
        this.input.keyboard.on('keydown-SPACE', () => {
			this.sound.play("CrashingWaves");
            this.scene.start("spread1"); 
		});

        // TAKE OUT THIS TIME, SHAINA!!!!!
        // change scenes
        this.input.keyboard.on('keydown-Z', () => {
            this.scene.start("spread1"); 
		});
        this.input.keyboard.on('keydown-X', () => {
            this.scene.start("spread2"); 
		});
        this.input.keyboard.on('keydown-C', () => {
            this.scene.start("spread3"); 
		});
        this.input.keyboard.on('keydown-V', () => {
            this.scene.start("spread4"); 
		});
        this.input.keyboard.on('keydown-B', () => {
            this.scene.start("ritualNorth"); 
		});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }
}