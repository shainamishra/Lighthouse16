class Spread6 extends Phaser.Scene {
    constructor() {
        super("spread6");
    }

    preload() {
        // images
        this.load.image('towerInfo', './assets/info/tower.png');
        this.load.image('instruct2', './assets/transitions/finalInstruct.png');
        this.load.audio('winBGM', './assets/sfx/the_16th_card.m4a');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg6').setOrigin(0, 0); 

        // music
        this.winBGM = this.sound.add('winBGM', {volume: 0.2, loop: true});
        this.winBGM.play();
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // hover testing nonsense
        this.one = this.add.sprite(640, 340, 'cardHit');
        this.one.setDisplaySize(320, 660);
        this.one.setVisible(true);
        this.one.setInteractive({
            cursor: handPointer
        });

        this.info1 = this.add.image(650, 350, 'towerInfo');
        this.info1.setDisplaySize(1280, 720);
        this.info1.setVisible(false);

        this.instruct = this.add.image(650, 362, 'instruct2');
        this.instruct.setDisplaySize(1280, 720);
        this.instruct.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // set variables
        level = 6;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x291745).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x291745).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x291745).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x291745).setOrigin(0, 0);
    }

    update() {
        /*
        // if hover oh card1
        this.one.on('pointerover', (pointer) => {
            this.instruct.setVisible(false);
            this.info1.setVisible(true);
        });
        // if hover off card1
        this.one.on('pointerout', (pointer) => {
            this.instruct.setVisible(true);
            this.info1.setVisible(false);
        });
        */

        // move to puzzle 3
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("endWin");  
        }
    }
}