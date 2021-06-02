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
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // table hitbox
        this.tableHit = this.add.image(400, 392, 'hitbox');
        this.tableHit.setDisplaySize(700, 100);
        this.tableHit.setVisible(false);
        this.tableHit.setInteractive({
            useHandCursor: true
        });

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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.hotOn = true;
        this.timeVar = 150;

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
            this.scene.switch("cardBox7");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        if(lightState > 0){
            this.tableHit.setVisible(true);
            this.tableHit.on('pointerdown', (pointer) => {
                if(deskKey == 0){
                    this.key.setVisible(true);
                    this.textTimer = 1;
                    this.timeVar = 100;
                    deskKey = 1;
                }
                else if (this.textTimer == 0) {
                    this.journal.setVisible(true);
                    this.textTimer = 1;
                    this.timeVar = 150;
                }
            });
        }

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

        }
        else {
            this.hotbar.setVisible(false);
            this.knifeHot.setVisible(false);
            this.matchesHot.setVisible(false);
        }
    }
}