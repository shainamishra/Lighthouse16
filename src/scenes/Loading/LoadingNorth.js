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
        this.load.audio('ritual_music', './assets/sfx/Ritual.wav');
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.loadingNorth = this.add.tileSprite(0, 0, 1280, 720, 'betweenRoom').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // bgm
        if(sound == 0){
            this.ritualBGM = this.sound.add('ritual_music', {volume: 0.15, loop: true});
            this.ritualBGM.play();
        }

        // sfx
        this.itemTake = this.sound.add('itemtake', {volume: 0.5});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
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
            cursor: handPointer
        });
        this.frameHit.setVisible(true);

        // note
        this.noteFrame = this.add.sprite(643, 375, 'frameNote');
        this.noteFrame.setDisplaySize(1280, 720);
        this.noteFrame.setVisible(false);
        // note
        this.noteHit = this.add.sprite(675, 196, 'hitbox');
        this.noteHit.setDisplaySize(40, 60);
        this.noteHit.setInteractive({
            cursor: handPointer
        });
        this.noteHit.interText = this.add.text(140, 645, 'You put the note in your inventory');
        this.noteHit.interText.setFontSize(50);
        this.noteHit.interText.setVisible(false);
        this.noteHit.setVisible(false);

        // spread 5
        this.spread5 = this.add.sprite(640, 360, 'spread5');
        this.spread5.setDisplaySize(1280, 720);
        if(level > 5){
            this.spread5.setVisible(true);
        } else{
            this.spread5.setVisible(false);
        }

        this.frameHit.interText = this.add.text(350, 635, 'The last tarot spread');
        this.frameHit.interText.setFontSize(50);
        this.frameHit.interText.setVisible(false);

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
        if (inRitual == 0) {
            lightState = 0;
            knifeGot = 0;
            deskKey = 0;
            clockUnlock = 0;
            unlocked = 0;
            pos = 0;
            combo = '';
            endScene = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x6d465f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x6d465f).setOrigin(0, 0);
    }
    
    update() {
        sound = 1;
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // frame
        if(this.textTimer == 0){
            this.frameHit.on('pointerdown', (pointer) => {
                level = 5;
                this.spread5.setVisible(true);
                this.frameHit.interText.setVisible(true);
                this.noteHit.setVisible(true);
                this.textTimer = 1;
                this.itemTake.play();
            });

            this.noteHit.on('pointerdown', (pointer) => {
                note = 1;
                this.noteHit.setVisible(true);
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
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if (level == 5) {
            this.frame.setVisible(false);
            this.frameHit.setVisible(false);
            this.frameEm.setVisible(true);
            this.noteFrame.setVisible(true);
            this.noteHit.setVisible(true);
        }

        if (note == 1) {
            this.noteFrame.setVisible(false);
            this.noteHit.setVisible(false);
        }
        if (level != 5){
            level = 4;
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