class RitualWest extends Phaser.Scene {
    constructor() {
        super("ritualWest");
    }

    preload() {
        // images
        this.load.image('ritualWest', './assets/puzzle5/ritualWest.png');
        this.load.image('keyTable', './assets/puzzle5/overlays/ritualWest_key.png');
        this.load.image('journal', './assets/puzzle5/overlays/ritualWest_journal.png');

        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'ritualWest').setOrigin(0, 0); 

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
        // table hitbox
        this.tableHit = this.add.image(400, 392, 'hitbox');
        this.tableHit.setDisplaySize(700, 100);
        this.tableHit.setVisible(true);
        this.tableHit.setInteractive({
            cursor: handPointer
        });
        this.tableHit.interText1 = this.add.text(175, 520, '   A\njournal');
        this.tableHit.interText1.setFontSize(50);
        this.tableHit.interText1.setVisible(false);
        this.tableHit.interText2 = this.add.text(125, 520, ' A\nkey');
        this.tableHit.interText2.setFontSize(50);
        this.tableHit.interText2.setVisible(false);

        // key
        this.key = this.add.image(640, 360, 'keyTable');
        this.key.setDisplaySize(1280, 720);
        this.key.setVisible(false);
        
        // key
        this.journal = this.add.image(640, 360, 'journal');
        this.journal.setDisplaySize(1280, 720);
        this.journal.setVisible(false);

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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.hotOn = true;
        this.textTimer = 0;
        this.timeVar = 150;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x42060d).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x42060d).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x42060d).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x42060d).setOrigin(0, 0);
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

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimer == 0){
                this.scene.switch("instructionScene");
                this.textTimer = 1;
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        this.tableHit.on('pointerdown', (pointer) => {
            if(lightState > 0 && deskKey == 0){
                this.key.setVisible(true);
                this.tableHit.interText2.setVisible(true);
                this.textTimer = 1;
                this.timeVar = 100;
                deskKey = 1;
            }
            else if (this.textTimer == 0) {
                this.journal.setVisible(true);
                this.tableHit.interText1.setVisible(true);
                this.textTimer = 1;
                this.timeVar = 250;
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
            this.key.setVisible(false);
            this.journal.setVisible(false);
            this.tableHit.interText1.setVisible(false);
            this.tableHit.interText2.setVisible(false);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 1){
            // lights are off 
            this.dark.setVisible(true);
        } else if(lightState == 2){
            // lights are on
            this.dark.setVisible(false);
        } 
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("ritualSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("ritualNorth");
        };
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