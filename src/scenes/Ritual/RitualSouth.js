class RitualSouth extends Phaser.Scene {
    constructor() {
        super("ritualSouth");
    }

    preload() {
        // images
        this.load.image('ritualSouth', './assets/puzzle5/ritualSouth.png');
        this.load.image('switchOnRitual', './assets/puzzle5/overlays/ritualSouth_switch_on.png');
        this.load.image('switchOffRitual', './assets/puzzle5/overlays/ritualSouth_switch_off.png');
        this.load.image('message', './assets/puzzle5/overlays/ritualSouth_message.png');

        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'ritualSouth').setOrigin(0, 0); 

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
        // hatch hit
        this.hatchHit = this.add.image(240, 655, 'hitbox');
        this.hatchHit.setDisplaySize(340, 100);
        this.hatchHit.setVisible(true);
        this.hatchHit.setInteractive({
            cursor: handPointer
        });

        // switch on
        this.on = this.add.image(640, 360, 'switchOnRitual');
        this.on.setDisplaySize(1280, 720);
        this.on.setVisible(true);
        // switch off
        this.off = this.add.image(640, 360, 'switchOffRitual');
        this.off.setDisplaySize(1280, 720);
        this.off.setVisible(false);
        // switch hit
        this.switchHit = this.add.image(709, 289, 'hitbox');
        this.switchHit.setDisplaySize(50, 75);
        this.switchHit.setVisible(true);
        this.switchHit.setInteractive({
            cursor: handPointer
        });

        // closet hit
        this.closetHit = this.add.image(940, 335, 'hitbox');
        this.closetHit.setDisplaySize(380, 570);
        this.closetHit.setVisible(true);
        this.closetHit.setInteractive({
            cursor: handPointer
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbarRitual');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.matchesHot = this.add.sprite(460, 659, 'matchesRitual');
        this.matchesHot.setDisplaySize(80, 40);
        this.matchesHot.setVisible(false);

        this.knifeHot = this.add.sprite(560, 660, 'knifeRitual');
        this.knifeHot.setDisplaySize(100, 65);
        this.knifeHot.setVisible(false);

        this.keyHot = this.add.sprite(660, 659, 'keyRitual');
        this.keyHot.setDisplaySize(70, 60);
        this.keyHot.setVisible(false);

        this.candleHot = this.add.sprite(753, 654, 'candleHot');
        this.candleHot.setDisplaySize(70, 60);
        this.candleHot.setVisible(false);

        // chemicals
        this.bleachHot = this.add.sprite(845, 659, 'bleachHot');
        this.bleachHot.setDisplaySize(48, 54);
        this.bleachHot.setVisible(false);

        this.fertilizerHot = this.add.sprite(845, 660, 'fertilizerHot');
        this.fertilizerHot.setDisplaySize(39, 54);
        this.fertilizerHot.setVisible(false);

        this.insecticideHot = this.add.sprite(845, 659, 'insecticideHot');
        this.insecticideHot.setDisplaySize(28, 60);
        this.insecticideHot.setVisible(false);

        this.saltHot = this.add.sprite(845, 659, 'saltHot');
        this.saltHot.setDisplaySize(36, 60);
        this.saltHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'darkRitual');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);
        
        // message
        this.message = this.add.image(640, 360, 'message');
        this.message.setDisplaySize(1280, 720);
        this.message.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;
        this.timeVar = 150;
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene changes
        this.input.keyboard.on('keydown-A', () => {
            this.scene.start("ritualEast"); 
		});

        this.input.keyboard.on('keydown-D', () => {
            this.scene.start("ritualWest"); 
		});
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        prevScene = this.scene.key;
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
        // objects
        // light switch
        this.switchHit.on('pointerdown', (pointer) => {
            if(lightState == 0){
                lightState = 2;
            }

            if(lightState == 2 && this.textTimer == 0){
                // turn lights off
                this.textTimer = 1;
                lightState = 1;
                this.timeVar = 50;
            }
            else if (lightState == 1 && this.textTimer == 0){
                // turn lights on
                this.textTimer = 1;
                lightState = 2;
                this.timeVar = 50;
            }
        });


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene switches
        // closet
        this.closetHit.on('pointerdown', (pointer) => {
            if(deskKey == 1 && this.textTimer == 0){
                this.textTimer = 1;
                this.timeVar = 50;
                this.scene.switch("ritualCloset");
                deskKey = 2;
            }
        });

        this.hatchHit.on('pointerdown', (pointer) => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.timeVar = 50;
                this.scene.switch("loadingSouth");
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < this.timeVar) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= this.timeVar){
            // hide text
            this.textTimer = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 1){
            // lights are off 
            this.dark.setVisible(true);
            this.message.setVisible(true);
            this.on.setVisible(false);
            this.off.setVisible(true);
        } else if(lightState == 2){
            // lights are on
            this.dark.setVisible(false);
            this.message.setVisible(false);
            this.on.setVisible(true);
            this.off.setVisible(false);
        } 
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (knifeGot == 1){
                this.knifeHot.setVisible(true);
            }

            if (matches == 1){
                this.matchesHot.setVisible(true);
            }

            if (deskKey == 1){
                this.keyHot.setVisible(true);
            }
            
            if (candles == 1){
                this.candleHot.setVisible(true);
            }

            if (chemical == 1){
                this.fertilizerHot.setVisible(true);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(false);
            } else if (chemical == 2){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(true);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(false);
            } else if (chemical == 3){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(true);
                this.saltHot.setVisible(false);
            } else if (chemical == 4){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(true);
            } 

        }
        else {
            this.hotbar.setVisible(false);
            this.knifeHot.setVisible(false);
            this.matchesHot.setVisible(false);
            this.keyHot.setVisible(false);
            this.candleHot.setVisible(false);

            // chemicals
            this.fertilizerHot.setVisible(false);
            this.insecticideHot.setVisible(false);
            this.bleachHot.setVisible(false);
            this.saltHot.setVisible(false);
        }
    }
}