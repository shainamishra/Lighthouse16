class RitualSouth extends Phaser.Scene {
    constructor() {
        super("ritualSouth");
    }

    preload() {
        // images
        this.load.image('ritualSouth', './assets/puzzle5/ritualSouth.png');
        this.load.image('switchOn', './assets/puzzle5/overlays/ritualSouth_switch_on.png');
        this.load.image('switchOff', './assets/puzzle5/overlays/ritualSouth_switch_off.png');
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
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // hatch hit
        this.hatchHit = this.add.image(240, 655, 'hitbox');
        this.hatchHit.setDisplaySize(340, 100);
        this.hatchHit.setVisible(true);
        this.hatchHit.setInteractive({
            useHandCursor: true
        });

        // switch on
        this.on = this.add.image(640, 360, 'switchOn');
        this.on.setDisplaySize(1280, 720);
        this.on.setVisible(true);
        // switch off
        this.off = this.add.image(640, 360, 'switchOff');
        this.off.setDisplaySize(1280, 720);
        this.off.setVisible(false);
        // switch hit
        this.switchHit = this.add.image(709, 289, 'hitbox');
        this.switchHit.setDisplaySize(50, 75);
        this.switchHit.setVisible(true);
        this.switchHit.setInteractive({
            useHandCursor: true
        });

        // closet hit
        this.closetHit = this.add.image(940, 335, 'hitbox');
        this.closetHit.setDisplaySize(380, 570);
        this.closetHit.setVisible(true);
        this.closetHit.setInteractive({
            useHandCursor: true
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbarRitual');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.matchesHot = this.add.sprite(460, 659, 'matchesHot');
        this.matchesHot.setDisplaySize(80, 40);
        this.matchesHot.setVisible(false);

        this.knifeHot = this.add.sprite(560, 660, 'knifeRitual');
        this.knifeHot.setDisplaySize(100, 65);
        this.knifeHot.setVisible(false);

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
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox7");
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

            if (matches== 1){
                this.matchesHot.setVisible(true);
            }

        }
        else {
            this.hotbar.setVisible(false);
            this.knifeHot.setVisible(false);
            this.matchesHot.setVisible(false);
        }
    }
}