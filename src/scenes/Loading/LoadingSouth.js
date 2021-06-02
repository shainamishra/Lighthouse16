class LoadingSouth extends Phaser.Scene {
    constructor() {
        super("loadingSouth");
    }

    preload() {
        // images
        this.load.image('betweenHatch', './assets/loadingRoom/betweenHatch.png');
        this.load.image('betweenLadder', './assets/loadingRoom/betweenLadder.png');

        // hitbox
        this.load.image('hitbox', './assets/HitBox2.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.loadingSouth = this.add.tileSprite(0, 0, 1280, 720, 'betweenHatch').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.itemTake = this.sound.add('itemtake', {volume: 0.5});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        this.ladder = this.add.sprite(640, 360, 'betweenLadder');
        this.ladder.setDisplaySize(1280, 720);
        this.ladder.setVisible(true);

        this.levelText = this.add.sprite(675, 196, 'hitbox');
        this.levelText.setDisplaySize(40, 60);
        this.levelText.interText = this.add.text(240, 150, 'Press space to\n  enter  the\n  light room');
        this.levelText.interText.setFontSize(50);
        this.levelText.interText.setVisible(true);
        this.levelText.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory box set up
        this.invent = this.add.sprite(60, 60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;
        lightState = 0;
        knifeGot = 0;
        deskKey = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x6d465f).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("loadingNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("loadingNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start("spread5");
        };
    }
}