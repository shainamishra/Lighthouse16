class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        // load assets
        this.load.image('start', './assets/start.png');
        this.load.audio('CrashingWaves', './assets/CrashingWave2.wav');
        this.load.audio('menu_music', './assets/theLighthouse.wav');
    }

    create() {
        // title
        this.title = this.add.tileSprite(0, 0, 1280, 720, 'start').setOrigin(0, 0);

        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        
        // music
        this.menuBGM = this.sound.add('menu_music', {volume: 0.2, loop: true});
        this.menuBGM.play();
        
        // change scenes
        this.input.keyboard.on('keydown-SPACE', () => {
			this.sound.play("CrashingWaves");
            this.scene.start("instructionScene"); 
		});
    }
}