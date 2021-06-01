class LoadingNorth extends Phaser.Scene {
    constructor() {
        super("loadingNorth");
    }

    preload() {
        // images
        this.load.image('betweenRoom', './assets/loadingRoom/betweenRoom.png');
        this.load.image('spreadEmpty', './assets/loadingRoom/finalSpreadEmpty.png');
        this.load.image('spread', './assets/loadingRoom/finalSpread.png');
        this.load.image('frameNote', './assets/loadingRoom/frameNote.png');
        this.load.image('note', './assets/loadingRoom/note.png');
        this.load.image('spread5', './assets/transitions/spread5.png');

        // hitbox
        this.load.image('hitbox', './assets/HitBox2.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.loadingNorth = this.add.tileSprite(0, 0, 1280, 720, 'betweenRoom').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.itemTake = this.sound.add('itemtake', {volume: 0.5});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // frame
        this.frame = this.add.sprite(640, 390, 'spread');
        this.frame.setDisplaySize(1280, 720);
        this.frame.setVisible(true);
        // empty frame
        this.frameEm = this.add.sprite(640, 390, 'spreadEmpty');
        this.frameEm.setDisplaySize(1280, 720);
        this.frameEm.setVisible(false);
        // frame hitbox
        this.frameHit = this.add.sprite(640, 196, 'hitbox');
        this.frameHit.setDisplaySize(500, 308);
        this.frameHit.setInteractive({
            useHandCursor: true
        });
        this.frameHit.setVisible(true);

        // note
        this.noteFrame = this.add.sprite(643, 375, 'frameNote');
        this.noteFrame.setDisplaySize(1280, 720);
        this.noteFrame.setVisible(false);
        // empty frame
        this.note = this.add.sprite(640, 370, 'note');
        this.note.setDisplaySize(1280, 720);
        this.note.setVisible(false);
        // note
        this.noteHit = this.add.sprite(675, 196, 'hitbox');
        this.noteHit.setDisplaySize(40, 60);
        this.noteHit.setInteractive({
            useHandCursor: true
        });
        this.noteHit.interText = this.add.text(500, 650, 'A note');
        this.noteHit.interText.setFontSize(50);
        this.noteHit.interText.setVisible(false);
        this.noteHit.setVisible(true);

        // spread 5
        this.spread5 = this.add.sprite(640, 360, 'spread5');
        this.spread5.setDisplaySize(1280, 720);
        this.spread5.setVisible(false);

        this.frameHit.interText = this.add.text(350, 635, 'The last tarot spread');
        this.frameHit.interText.setFontSize(50);
        this.frameHit.interText.setVisible(false);

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
        // frame
        if(this.textTimer == 0){
            this.frameHit.on('pointerdown', (pointer) => {
                level = 5;
                this.spread5.setVisible(true);
                this.frameHit.interText.setVisible(true);
                this.textTimer = 1;
                this.itemTake.play();
            });

            this.noteHit.on('pointerdown', (pointer) => {
                note = 1;
                this.note.setVisible(true);
                this.noteHit.interText.setVisible(true);
                this.textTimer = 1;
                this.itemTake.play();
            });
        }

        // text timers
        if(this.textTimer > 0 && this.textTimer < 200) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 200){
            // hide text
            this.textTimer = 0;
            this.spread5.setVisible(false);
            this.frameHit.interText.setVisible(false);
            this.noteHit.interText.setVisible(false);
            this.note.setVisible(false);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if (level == 5) {
            this.frame.setVisible(false);
            this.frameEm.setVisible(true);
            this.frameHit.setVisible(false);
            this.noteFrame.setVisible(true);
        }

        if (note == 1) {
            this.noteFrame.setVisible(false);
            this.noteHit.setVisible(false);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("loadingSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("loadingSouth");
        };
    }
}