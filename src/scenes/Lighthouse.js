class Lighthouse extends Phaser.Scene {
    constructor() {
        super("lighthouse");
    }

    preload() {
        // images
        this.load.image('newbg', './assets/Puzzle1.png');
        this.load.image('ph', './assets/cards/highPriestess.png');
        this.load.image('ph2', './assets/cards/death.png');
        this.load.image('ph3', './assets/cards/fool.png');
        this.load.image('ph4', './assets/cards/moon.png');
        this.load.image('ph5', './assets/cards/hermit.png');
        this.load.image('highPriestess', './assets/info/highPriestess.png');
        this.load.image('death', './assets/info/death.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
        this.playBGM.play();
        */

        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'newbg').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // hover testing nonsense
        
        this.ph = this.add.sprite(150, 340, 'ph');
        this.ph.setDisplaySize(210, 360);
        this.ph.setVisible(true);
        this.ph.setInteractive({
            useHandCursor: true
        });

        this.ph2 = this.add.sprite(400, 340, 'ph2');
        this.ph2.setDisplaySize(210, 360);
        this.ph2.setVisible(true);
        this.ph2.setInteractive({
            useHandCursor: true
        });

        this.ph3 = this.add.sprite(645, 340, 'ph3');
        this.ph3.setDisplaySize(210, 360);
        this.ph3.setVisible(true);
        this.ph3.setInteractive({
            useHandCursor: true
        });

        this.ph4 = this.add.sprite(890, 340, 'ph4');
        this.ph4.setDisplaySize(210, 360);
        this.ph4.setVisible(true);
        this.ph4.setInteractive({
            useHandCursor: true
        });

        this.ph5 = this.add.sprite(1130, 340, 'ph5');
        this.ph5.setDisplaySize(210, 360);
        this.ph5.setVisible(true);
        this.ph5.setInteractive({
            useHandCursor: true
        });

        this.hp = this.add.image(650, 350, 'highPriestess');
        this.hp.setDisplaySize(1280, 720);
        this.hp.setVisible(false);

        this.d = this.add.image(650, 350, 'death');
        this.d.setDisplaySize(1280, 720);
        this.d.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }

    update() {
        // if hover oh hp
        this.ph.on('pointerover', (pointer) => {
            this.hp.setVisible(true);
        });

        // if hover off hp
        this.ph.on('pointerout', (pointer) => {
            this.hp.setVisible(false);
        });

        // if hover on death
        this.ph2.on('pointerover', (pointer) => {
            this.d.setVisible(true);
        });

        // if hover off death
        this.ph2.on('pointerout', (pointer) => {
            this.d.setVisible(false);
        });

        // temp, back to outside
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("islandNorth");  
        }
    }
}