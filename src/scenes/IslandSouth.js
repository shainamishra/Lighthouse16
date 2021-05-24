class IslandSouth extends Phaser.Scene {
    constructor() {
        super("islandSouth");
    }
    
    preload() {
        // images
        this.load.image('islandsouth', './assets/puzzle1/IslandSouth.PNG');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('gravebox', './assets/puzzle1/overlays/gravebox.png');
        this.load.image('graveboxEmpty', './assets/puzzle1/overlays/graveboxUsed.png');

        // audio
        this.load.audio('itemtake', './assets/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.islandsouth = this.add.tileSprite(0, 0, 1280, 720, 'islandsouth').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////

        // inventory box set up
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // graves
        this.graves = this.add.sprite(850, 250, 'hitbox');
        this.graves.setDisplaySize(600, 400);
        this.graves.setInteractive({
            useHandCursor: true
        });
        this.graves.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'Strange text instead of names');
        this.graves.interText.setFontSize(50);
        this.graves.interText.setVisible(false);

        // grave box
        this.gravebox = this.add.sprite(520, 400, 'hitbox');
        this.gravebox.setDisplaySize(90, 82);
        this.gravebox.setVisible(true);
        this.gravebox.setInteractive({
            useHandCursor: true
        });
        this.gravebox.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 50, 'A small locked box');
        this.gravebox.interText.setFontSize(50);
        this.gravebox.interText.setVisible(false);

        // grave box closed
        this.graveboxClosed = this.add.sprite(650, 350, 'gravebox');
        this.graveboxClosed.setDisplaySize(1280, 720);
        this.graveboxClosed.setVisible(true);

        // grave box empty
        this.graveboxEmpty = this.add.sprite(650, 350, 'graveboxEmpty');
        this.graveboxEmpty.setDisplaySize(1280, 720);
        this.graveboxEmpty.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerGraves = 0;
        this.textTimerGBox = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }

    update() {
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        if(this.textTimerGraves == 0){
            // if click on lighthouse
            this.graves.on('pointerdown', (pointer) => {
                this.graves.interText.setVisible(true);
                this.textTimerGraves = 1;
            });
        }

        // text on screen
        if(this.textTimerGraves > 0 && this.textTimerGraves < 150) {
            this.textTimerGraves += 1;
        } 
        else if(this.textTimerGraves >= 150){
            // hide text
            this.graves.interText.setVisible(false);
            this.textTimerGraves = 0;
        }

        if(this.textTimerGBox == 0 && keyGot == 0){
            // if click on lighthouse
            this.gravebox.on('pointerdown', (pointer) => {
                this.gravebox.interText.setVisible(true);
                this.textTimerGBox = 1;
            });
        }
        else if(this.textTimerGBox ==0 && keyGot == 1){
            this.gravebox.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 50, "A reel was inside");
            this.gravebox.interText.setFontSize(50);
            this.gravebox.interText.setVisible(false);
            this.gravebox.on('pointerdown', (pointer) => {
                this.graveboxClosed.setVisible(false);
                this.graveboxEmpty.setVisible(true);
                this.gravebox.interText.setVisible(true);
                this.textTimerGBox = 1;
                reelGot =1 ;
            });
        }
        if(this.textTimerGBox == 1 && reelGot == 1){
            this.sound.play("itemtake");
        }
        // text on screen
        if(this.textTimerGBox> 0 && this.textTimerGBox < 150) {
            this.textTimerGBox += 1;
        } 
        else if(this.textTimerGBox >= 150){
            // hide text
            this.gravebox.interText.setVisible(false);
            this.textTimerGBox = 0;
        }

        // show open state
        if(keyGot == 1 && reelGot == 1){
            this.graveboxClosed.setVisible(false);
            this.graveboxEmpty.setVisible(true);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandNorth");
        };
    }
}
