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
            if(level == 0){
                this.sound.play("CrashingWaves");
                this.scene.start("spread1"); 
            }
		});

        // TAKE OUT THIS TIME, SHAINA!!!!!
        // delete
        this.input.keyboard.on('keydown-Z', () => {
            this.scene.start("loadingNorth"); 
		});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // close
        this.closeInven = this.add.sprite(50, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(false);
        this.closeInven.setInteractive({
            useHandCursor: true
        });
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }

    update(){
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // "x" to close inventory
        if(level > 0){
            this.closeInven.setVisible(true);
            this.closeInven.on('pointerdown', () => {
                this.scene.stop("instructionScene");
                this.scene.wake(prevScene);
            });
        }
    }
}