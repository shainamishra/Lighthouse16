class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        // load assets
 
    }

    create() {
        /*
        // title
        this.title = this.add.tileSprite(0, 0, 3840, 480, 'menu').setOrigin(0, 0);

        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x5e5e5e).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x5e5e5e).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x5e5e5e).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x5e5e5e).setOrigin(0, 0);
        
        //music
        this.menuBGM = this.sound.add('menu_music', {volume: 0.4, loop: true});
        this.menuBGM.play();

        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        */
    }

    update() {
        /*
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            game.settings = {
              obSpeed: 15,
            }  
            
            this.menuBGM.stop();
            this.sound.play('possible_spider');
            this.scene.start("labScene");  
        }

        //will remove this, kept for now to test
        if (Phaser.Input.Keyboard.JustDown(keyA)) {
            game.settings = {
              obSpeed: 20,   
            }
            this.menuBGM.stop();
            this.sound.play('possible_spider');
            this.scene.start("level2Scene");  
        }
        */
    }
}