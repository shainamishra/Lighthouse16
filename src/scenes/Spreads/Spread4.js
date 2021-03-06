class Spread4 extends Phaser.Scene {
    constructor() {
        super("spread4");
    }

    preload() {
        // images
        
        // hot bar items
        this.load.image('ragHot', './assets/puzzle4/items/rag.png');
        this.load.image('ropeHot', './assets/puzzle4/items/rope.png');
        this.load.image('citrineHot', './assets/puzzle4/items/citrine.png');
        this.load.image('rockHot', './assets/puzzle4/items/rockHot.png');
        
        // audio
        this.load.audio('lookout_music', './assets/sfx/Musicbox.wav');
        this.load.audio('wrong', './assets/sfx/Wrong.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg4').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // music
        this.lookoutBGM = this.sound.add('lookout_music', {volume: 0.1, loop: true});
        this.lookoutBGM.play();

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // hover testing nonsense
        
        this.one = this.add.sprite(190, 340, 'cardHit');
        this.one.setDisplaySize(240, 420);
        this.one.setVisible(true);
        this.one.setInteractive({
            cursor: handPointer
        });

        this.info1 = this.add.image(650, 350, 'info1-4');
        this.info1.setDisplaySize(1280, 720);
        this.info1.setVisible(false);

        this.two = this.add.sprite(485, 340, 'cardHit');
        this.two.setDisplaySize(240, 420);
        this.two.setVisible(true);
        this.two.setInteractive({
            cursor: handPointer
        });

        this.info2 = this.add.image(650, 350, 'info2-4');
        this.info2.setDisplaySize(1280, 720);
        this.info2.setVisible(false);

        this.three = this.add.sprite(795, 340, 'cardHit');
        this.three.setDisplaySize(240, 420);
        this.three.setVisible(true);
        this.three.setInteractive({
            cursor: handPointer
        });

        this.info3 = this.add.image(650, 350, 'info3-4');
        this.info3.setDisplaySize(1280, 720);
        this.info3.setVisible(false);

        this.four = this.add.sprite(1090, 340, 'cardHit');
        this.four.setDisplaySize(240, 420);
        this.four.setVisible(true);
        this.four.setInteractive({
            cursor: handPointer
        });

        this.info4 = this.add.image(650, 350, 'info4-4');
        this.info4.setDisplaySize(1280, 720);
        this.info4.setVisible(false);

        this.instruct = this.add.image(650, 360, 'instruct');
        this.instruct.setDisplaySize(1280, 720);
        this.instruct.setVisible(true);


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // set level
        level = 4;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x291745).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x291745).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x291745).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x291745).setOrigin(0, 0);
    }

    update() {
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

        // if hover on card2
        this.two.on('pointerover', (pointer) => {
            this.instruct.setVisible(false);
            this.info2.setVisible(true);
        });
        // if hover off card2
        this.two.on('pointerout', (pointer) => {
            this.instruct.setVisible(true);
            this.info2.setVisible(false);
        });

        // if hover on card3
        this.three.on('pointerover', (pointer) => {
            this.instruct.setVisible(false);
            this.info3.setVisible(true);
        });
        // if hover off card3
        this.three.on('pointerout', (pointer) => {
            this.instruct.setVisible(true);
            this.info3.setVisible(false);
        });

        // if hover on card4
        this.four.on('pointerover', (pointer) => {
            this.instruct.setVisible(false);
            this.info4.setVisible(true);
        });
        // if hover off card4
        this.four.on('pointerout', (pointer) => {
            this.instruct.setVisible(true);
            this.info4.setVisible(false);
        });

        // move to puzzle 3
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("lookoutNorth");  
        }
    }
}