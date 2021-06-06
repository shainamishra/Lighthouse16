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
        this.load.image('coin1hot', './assets/puzzle3/overlays/coin2.png');
        this.load.image('hand', './assets/puzzle3/items/minute hand.png');
       
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.mainnorth = this.add.tileSprite(0, 0, 1280, 720, 'mainNorth').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

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
        // objects
        this.indoor = this.add.sprite(450, 350, 'hitbox');
        this.indoor.setDisplaySize(350, 700);
        this.indoor.setInteractive({
            cursor: handPointer
        });
        this.indoor.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'The door leads outside...\nand it is locked');
        this.indoor.interText.setFontSize(50);
        this.indoor.interText.setVisible(false);

        this.gclock = this.add.sprite(975, 350, 'hitbox');
        this.gclock.setDisplaySize(150, 700);
        this.gclock.setInteractive({
            cursor: handPointer
        });
        this.gclock.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'The clock is missing\nthe minute hand');
        this.gclock.interText.setFontSize(50);
        this.gclock.interText.setVisible(false);

        this.clockface = this.add.sprite(650, 350, 'clock');
        this.clockface.setDisplaySize(1280, 720);
        this.clockface.setVisible(false);
        // hour hand
        this.hourhand = this.add.image(650, 350,'hour');
        this.hourhand.setInteractive({
            cursor: handPointer
        });
        this.hourhand.setVisible(false);
        // minute hand
        this.minutehand = this.add.image(650, 350, 'minute');
        this.minutehand.setInteractive({
            cursor: handPointer
        });
        this.minutehand.setVisible(false);

        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);

        this.hammerHot = this.add.sprite(460, 659, 'hammerhot');
        this.hammerHot.setDisplaySize(60, 60);
        this.hammerHot.setInteractive({
            cursor: handPointer
        });
        this.hammerHot.setVisible(false);

        this.knifeHot = this.add.sprite(560, 660, 'knifehot');
        this.knifeHot.setDisplaySize(65, 65);
        this.knifeHot.setInteractive({
            cursor: handPointer
        });
        this.knifeHot.setVisible(false);

        this.scoinHot = this.add.sprite(655, 660, 'coin1hot');
        this.scoinHot.setDisplaySize(80, 80);
        this.scoinHot.setInteractive({
            cursor: handPointer
        });
        this.scoinHot.setVisible(false);

        this.handHot = this.add.sprite(755, 659, 'hand');
        this.handHot.setDisplaySize(70, 70);
        this.handHot.setInteractive({
            cursor: handPointer
        });
        this.handHot.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerIndoor = 0;
        this.textTimerGclock = 0;
        this.textTimer = 0;
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        this.input.keyboard.on('keydown-A', () => {
            this.scene.start("mainWest"); 
		});

        this.input.keyboard.on('keydown-D', () => {
            this.scene.start("mainEast"); 
		});

        // delete this
        this.input.keyboard.on('keydown-SPACE', () => {
            this.sound.get('clockbgm').stop();
            this.scene.start("spread4"); 
		});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimerIndoor == 0){
                this.scene.switch("instructionScene");
                this.textTimerIndoor = 1;
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimerIndoor == 0){
            this.indoor.on('pointerdown', (pointer) => {
                this.indoor.interText.setVisible(true);
                this.textTimerIndoor = 1;
            });
        }

        if(this.textTimerGclock == 0){
            if(pcoinGot == 1){
                this.gclock.on('pointerdown', (pointer) => {
                    if(this.textTimer == 0){
                        this.textTimer = 1;
                        this.scene.switch("clockpuzzle");
                    }
                });
                
            }
            else if (this.textTimer == 0){
                if(clockUnlock == 1){
                    this.gclock.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 100, 'The time has been set');
                    this.gclock.interText.setFontSize(50);
                    this.gclock.interText.setVisible(false);
                }
                this.gclock.on('pointerdown', (pointer) => {
                    this.gclock.interText.setVisible(true);
                    this.textTimerGclock = 1;
                });
            }
        }

        // scene switch timer
        // text timers
        if(this.textTimer > 0 && this.textTimer < 50) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 50){
            // hide text
            this.textTimer = 0;
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

        // text on screen
        if(this.textTimerGclock> 0 && this.textTimerGclock < 150) {
            this.textTimerGclock += 1;
        } 
        else if(this.textTimerGclock >= 150){
            // hide text
            this.gclock.interText.setVisible(false);
            this.textTimerGclock = 0;
        }
    }

    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);
            if(hammerGot == 1 && scoinGot == 0){
                this.hammerHot.setVisible(true);
            }
            if(knifeGot == 1 && pcoinGot == 0){
                this.knifeHot.setVisible(true);
            }
            if(scoinGot == 1){
                this.scoinHot.setVisible(true);
                this.hammerHot.setVisible(false);
            }
            if(pcoinGot == 1){
                this.handHot.setVisible(true);
                this.knifeHot.setVisible(false);
            }
        }
        else{
            this.hotbar.setVisible(false);
            this.hammerHot.setVisible(false);
            this.knifeHot.setVisible(false);
            this.scoinHot.setVisible(false);
            this.handHot.setVisible(false);
        }
    }
}