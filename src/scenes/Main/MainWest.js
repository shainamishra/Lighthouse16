class MainWest extends Phaser.Scene {
    constructor() {
        super("mainWest");
    }

    preload() {
        // images
        this.load.image('mainWest', './assets/puzzle3/overlays/base.png');
        this.load.image('table knife', './assets/puzzle3/overlays/table knife.png')
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('table', './assets/puzzle3/overlays/dining table.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.mainwest = this.add.tileSprite(0, 0, 1280, 720, 'mainWest').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory box set up
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // lights off CN
        this.tableIm = this.add.sprite(350,350, 'table');

        this.knife = this.add.sprite(470, 460, 'hitbox');
        this.knife.setDisplaySize(100, 100);
        this.knife.setInteractive({
            useHandCursor: true
        });
        this.knife.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'You picked up the knife');
        this.knife.interText.setFontSize(50);
        this.knife.interText.setVisible(false);
        
        this.knifeIm = this.add.sprite(350, 350, 'table knife');
        this.knifeIm.setVisible(true);
        
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerKnife =0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });



        // end states
        if(this.textTimerKnife == 0){
            this.knife.on('pointerdown', (pointer) => {
                this.knife.interText.setVisible(true);
                this.textTimerKnife = 1;
            });
        }

        // text on screen
        if(this.textTimerKnife> 0 && this.textTimerKnife < 150) {
            this.textTimerKnife += 1;
        } 
        else if(this.textTimerKnife >= 150){
            // hide text
            this.knife.interText.setVisible(false);
            this.textTimerKnife = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("mainSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("mainNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("mainEast");
        };
    }
}