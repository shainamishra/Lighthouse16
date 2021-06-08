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
        this.invent = this.add.sprite(60, 60, 'hitbox');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            cursor: handPointer
        });
        // invent image
        this.inventIm = this.add.image(630, 350, 'inventory');
        this.inventIm.setDisplaySize(1280, 720);
        this.inventIm.setVisible(true);
        
        prevScene = this.scene.key;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // help icon set up
        this.help = this.add.sprite(1223, 60, 'hitbox');
        this.help.setDisplaySize(85, 85);
        this.help.setInteractive({
            cursor: handPointer
        });
        // help image
        this.helpIm = this.add.image(660, 355, 'help');
        this.helpIm.setDisplaySize(1280, 720);
        this.helpIm.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;

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
            this.scene.switch("cardBox7");
        });

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimer == 0){
                this.scene.switch("instructionScene");
                this.textTimer = 1;
            }
        });

        this.textTimer = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("loadingNorth");
        };
        
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("loadingNorth");
        };

        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            
            if(inRitual == 0){
                this.scene.start("ritualNorth");
            }
            else {
                this.scene.stop("loadingSouth");
                this.scene.wake("ritualSouth");
            }
        };

        
    }
}