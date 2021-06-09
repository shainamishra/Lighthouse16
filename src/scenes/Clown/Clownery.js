class Clownery extends Phaser.Scene {
    constructor() {
        super("clownery");
    }
    preload(){
        this.load.audio('circus', './assets/sfx/the_mf_circus.m4a');
        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //set up
        this.pwbg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 
        
        this.welcome = this.add.text(borderUISize + borderPadding * 20 -150, borderUISize + borderPadding * 2 + 200, "You've unlocked the clown room!\n    Press space to proceed."); 
        this.welcome.setFontSize(45);

        this.clownBGM = this.sound.add('circus', {volume: 0.1, loop: true});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define key and var
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    
    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.sound.get('menu_music').destroy();
            this.clownBGM.play();
            this.scene.start("clownNorth");
        }
    }
}