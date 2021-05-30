class Spread1 extends Phaser.Scene {
    constructor() {
        super("spread1");
    }

    preload() {
        // images
        this.load.image('bg1', './assets/transitions/spread1.png');
        this.load.image('cardHit', './assets/cards/hitbox.png');
        this.load.image('instruct', './assets/transitions/transitionInstructions.png');

        this.load.image('info1', './assets/info/highPriestess.png');
        this.load.image('info2', './assets/info/death.png');
        this.load.image('info3', './assets/info/Fool.png');
        this.load.image('info4', './assets/info/moon.png');
        this.load.image('info5', './assets/info/hermit.png');

        // items
        this.load.image('hotbar', './assets/hotbar.png');
        this.load.image('keyHot', './assets/puzzle1/items/key.PNG');
        this.load.image('reelHot', './assets/puzzle1/items/reel.PNG');
        this.load.image('telescopeHot', './assets/puzzle1/items/telescope.PNG');
        this.load.image('boltcuttersHot', './assets/puzzle1/items/boltcutters.PNG');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg1').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // hover testing nonsense
        
        this.one = this.add.sprite(150, 340, 'cardHit');
        this.one.setDisplaySize(210, 360);
        this.one.setVisible(true);
        this.one.setInteractive({
            useHandCursor: true
        });

        this.info1 = this.add.image(650, 350, 'info1');
        this.info1.setDisplaySize(1280, 720);
        this.info1.setVisible(false);

        this.two = this.add.sprite(400, 340, 'cardHit');
        this.two.setDisplaySize(210, 360);
        this.two.setVisible(true);
        this.two.setInteractive({
            useHandCursor: true
        });

        this.info2 = this.add.image(650, 350, 'info2');
        this.info2.setDisplaySize(1280, 720);
        this.info2.setVisible(false);

        this.three = this.add.sprite(645, 340, 'cardHit');
        this.three.setDisplaySize(210, 360);
        this.three.setVisible(true);
        this.three.setInteractive({
            useHandCursor: true
        });

        this.info3 = this.add.image(650, 350, 'info3');
        this.info3.setDisplaySize(1280, 720);
        this.info3.setVisible(false);

        this.four = this.add.sprite(890, 340, 'cardHit');
        this.four.setDisplaySize(210, 360);
        this.four.setVisible(true);
        this.four.setInteractive({
            useHandCursor: true
        });

        this.info4 = this.add.image(650, 350, 'info4');
        this.info4.setDisplaySize(1280, 720);
        this.info4.setVisible(false);

        this.five = this.add.sprite(1135, 340, 'cardHit');
        this.five.setDisplaySize(210, 360);
        this.five.setVisible(true);
        this.five.setInteractive({
            useHandCursor: true
        });

        this.info5 = this.add.image(650, 350, 'info5');
        this.info5.setDisplaySize(1280, 720);
        this.info5.setVisible(false);

        this.instruct = this.add.image(650, 360, 'instruct');
        this.instruct.setDisplaySize(1280, 720);
        this.instruct.setVisible(true);


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x291745).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x291745).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x291745).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x291745).setOrigin(0, 0);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // change scenes
        this.input.keyboard.on('keydown-SPACE', () => {
			this.sound.play("CrashingWaves");
            this.scene.start("islandNorth"); 
		});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // set level
        level = 1;
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

        // if hover on card5
        this.five.on('pointerover', (pointer) => {
            this.instruct.setVisible(false);
            this.info5.setVisible(true);
        });
        // if hover off card5
        this.five.on('pointerout', (pointer) => {
            this.instruct.setVisible(true);
            this.info5.setVisible(false);
        });
    }
}