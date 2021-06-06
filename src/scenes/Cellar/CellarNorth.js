class CellarNorth extends Phaser.Scene {
    constructor() {
        super("cellarNorth");
    }

    preload() {
        // images
        this.load.image('cellarnorth', './assets/puzzle2/cellarNorth.png');
        this.load.image('cellarNorthDark', './assets/puzzle2/cellarNorthDark.png');

        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'cellarnorth').setOrigin(0, 0); 

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
            useHandCursor: true
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
            useHandCursor: true
        });
        // help image
        this.helpIm = this.add.image(660, 355, 'help');
        this.helpIm.setDisplaySize(1280, 720);
        this.helpIm.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // lights off CN
        this.textDark = this.add.image(640, 360, 'cellarNorthDark');
        this.textDark.setDisplaySize(1280, 720);
        this.textDark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.key2Hot = this.add.sprite(460, 659, 'key2Hot');
        this.key2Hot.setDisplaySize(100, 100);
        this.key2Hot.setVisible(false);

        this.plateHot = this.add.sprite(560, 660, 'plateHot');
        this.plateHot.setDisplaySize(150, 150);
        this.plateHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2e2d34).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2e2d34).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2e2d34).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2e2d34).setOrigin(0, 0);
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
            if(this.textTimer == 0){
                this.scene.switch("instructionScene");
                this.textTimer = 1;
            }
        });

        this.textTimer = 0;
        
        if (disappear == 1){
            this.plateHot.setVisible(false);
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("cellarWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("cellarEast");
        };
        
        // lights on or off
        if(lightState == 0){
            this.textDark.setVisible(false);
        } else if (lightState == 1) {
            this.textDark.setVisible(true);
        }

        // delete this
        
        // end states
        if(unlocked == 1){
            if(Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.sound.get('cellar_music').stop();
                this.scene.start("spread3");
            };
        }
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (deskKey == 1 && switchGot == 0){
                this.key2Hot.setVisible(true);
            }
            else if(switchGot== 1){
                this.key2Hot.setVisible(false);
            }
            if (switchGot == 1 && disappear ==0){
                this.plateHot.setVisible(true);
            }
            else if(disappear == 1){
                this.plateHot.setVisible(false);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.key2Hot.setVisible(false);
            this.plateHot.setVisible(false);
        }
    }
}    