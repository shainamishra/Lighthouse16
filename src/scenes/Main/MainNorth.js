class MainNorth extends Phaser.Scene {
    constructor() {
        super("mainNorth");
    }

    preload() {
        // images
        this.load.image('mainNorth', './assets/puzzle3/wall1.png');

        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('minute', './assets/puzzle3/overlays/minute.png');
        this.load.image('hour', './assets/puzzle3/items/hour.png');
        this.load.image('clock', './assets/puzzle3/overlays/clockface.png');
        this.load.image('hammerhot', './assets/puzzle3/items/hammer.png');
        this.load.image('knifehot', './assets/puzzle3/items/knife.png');
        this.load.image('coin1hot', './assets/puzzle3/overlays/coin1.png');
        this.load.image('coin2hot', './assets/puzzle3/overlays/coin2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.mainnorth = this.add.tileSprite(0, 0, 1280, 720, 'mainNorth').setOrigin(0, 0); 

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
        this.indoor = this.add.sprite(450, 350, 'hitbox');
        this.indoor.setDisplaySize(350, 700);
        this.indoor.setInteractive({
            useHandCursor: true
        });
        this.indoor.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'The door leads outside...\nand it is locked');
        this.indoor.interText.setFontSize(50);
        this.indoor.interText.setVisible(false);

        this.gclock = this.add.sprite(975, 350, 'hitbox');
        this.gclock.setDisplaySize(150, 700);
        this.gclock.setInteractive({
            useHandCursor: true
        });
        this.gclock.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'The clock has stopped');
        this.gclock.interText.setFontSize(50);
        this.gclock.interText.setVisible(false);

        this.clockface = this.add.sprite(650, 350, 'clock');
        this.clockface.setDisplaySize(1280, 720);
        this.clockface.setVisible(false);
        // hour hand
        this.hourhand = this.add.image(650, 350,'hour');
        this.hourhand.setInteractive({
            useHandCursor: true
        });
        this.hourhand.setVisible(false);
        // minute hand
        this.minutehand = this.add.image(650, 350, 'minute');
        this.minutehand.setInteractive({
            useHandCursor: true
        });
        this.minutehand.setVisible(false);

        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);

        this.hammerHot = this.add.sprite(460, 659, 'hammerhot');
        this.hammerHot.setDisplaySize(60, 60);
        this.hammerHot.setInteractive({
            useHandCursor: true
        });
        this.hammerHot.setVisible(false);

        this.knifeHot = this.add.sprite(560, 660, 'knifehot');
        this.knifeHot.setDisplaySize(75, 75);
        this.knifeHot.setInteractive({
            useHandCursor: true
        });
        this.knifeHot.setVisible(false);

        this.scoinHot = this.add.sprite(655, 660, 'coin1hot');
        this.scoinHot.setDisplaySize(80, 80);
        this.scoinHot.setInteractive({
            useHandCursor: true
        });
        this.scoinHot.setVisible(false);

        this.pcoinHot = this.add.sprite(755, 659, 'coin2hot');
        this.pcoinHot.setDisplaySize(70, 70);
        this.pcoinHot.setInteractive({
            useHandCursor: true
        });
        this.pcoinHot.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerIndoor = 0;
        this.textTimerGclock = 0;
        this.hotOn = true;
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dragging
        /*this.input.setDraggable(this.minutehand);
        this.input.setDraggable(this.hourhand);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
        */
        // end states
        if(this.textTimerIndoor == 0){
            this.indoor.on('pointerdown', (pointer) => {
                this.indoor.interText.setVisible(true);
                this.textTimerIndoor = 1;
            });
        }

        // text on screen
        if(this.textTimerIndoor > 0 && this.textTimerIndoor < 150) {
            this.textTimerIndoor += 1;
        } 
        else if(this.textTimerIndoor >= 150){
            // hide text
            this.indoor.interText.setVisible(false);
            this.textTimerIndoor = 0;
        }

        if(this.textTimerGclock == 0){
            if(scoinGot == 1 && pcoinGot == 1){
                this.gclock.on('pointerdown', (pointer) => {
                    this.scene.switch("clockpuzzle");
                });
                
            }
            else{
                this.gclock.on('pointerdown', (pointer) => {
                this.gclock.interText.setVisible(true);
                
                this.textTimerGclock = 1;
                });
            }
        }

        // text on screen
        if(this.textTimerGclock> 0 && this.textTimerGclock < 150) {
            this.textTimerGclock += 1;
        } 
        else if(this.textTimerGclock >= 150){
            // hide text
            this.gclock.interText.setVisible(false);
            this.textTimerGclock = 0;
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("mainWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("mainEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("mainSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start("spread4");
        };
    }
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);
            if(hammerGot == 1){
                this.hammerHot.setVisible(true);
            }
            if(knifeGot == 1){
                this.knifeHot.setVisible(true);
            }
            if(scoinGot == 1){
                this.scoinHot.setVisible(true);
            }
            if(pcoinGot == 1){
                this.pcoinHot.setVisible(true);
            }
        }
        else{
            this.hotbar.setVisible(false);
            this.hammerHot.setVisible(false);
            this.knifeHot.setVisible(false);
            this.scoinHot.setVisible(false);
            this.pcoinHot.setVisible(false);
        }
    }
}