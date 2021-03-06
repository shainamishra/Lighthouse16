class LookoutEast extends Phaser.Scene {
    constructor() {
        super("lookoutEast");
    }

    preload() {
        // images
        this.load.image('lookoutEast', './assets/puzzle4/window_dirty.png');
        this.load.image('clean', './assets/puzzle4/overlays/window_clean.png');
        this.load.image('citrine_window', './assets/puzzle4/overlays/citrine_window.png');

        // hitbox
        this.load.image('hitbox', './assets/HitBox2.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'lookoutEast').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.itemTake = this.sound.add('itemtake', {volume: 0.5});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        this.windowHit = this.add.sprite(625, 260, 'hitbox');
        this.windowHit.setDisplaySize(475, 475);
        this.windowHit.setInteractive({
            cursor: handPointer
        });
        this.windowHit.interText = this.add.text(350, 550, 'The window is dirty');
        this.windowHit.interText.setFontSize(50);
        this.windowHit.interText.setVisible(false);
        this.windowHit.setVisible(true);

        // overlays
        // clean window
        this.clean = this.add.image(640, 360, 'clean');
        this.clean.setDisplaySize(1280, 720);
        this.clean.interText = this.add.text(300, 550, 'You cleaned the window');
        this.clean.interText.setFontSize(50);
        this.clean.interText.setVisible(false);
        this.clean.setVisible(false);

        // citrine window
        this.rock = this.add.image(640, 360, 'citrine_window');
        this.rock.setDisplaySize(1280, 720);
        this.rock.interText = this.add.text(200, 550, 'You took the piece of citrine');
        this.rock.interText.setFontSize(50);
        this.rock.interText.setVisible(false);
        this.rock.setVisible(false);

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
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.ragHot= this.add.sprite(460, 660, 'ragHot');
        this.ragHot.setDisplaySize(50, 50);
        this.ragHot.setVisible(false);

        this.ropeHot = this.add.sprite(560, 660, 'ropeHot');
        this.ropeHot.setDisplaySize(50, 50);
        this.ropeHot.setVisible(false);

        this.citrineHot = this.add.sprite(660, 659, 'citrineHot');
        this.citrineHot.setDisplaySize(50, 50);
        this.citrineHot.setVisible(false);

        this.rockHot = this.add.sprite(660, 659, 'rockHot');
        this.rockHot.setDisplaySize(50, 50);
        this.rockHot.setVisible(false);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.hotOn = true;
        this.textTimer = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // window
        if(this.textTimer == 0){
            this.windowHit.on('pointerdown', (pointer) => {
                if(rag == 0) {
                    this.windowHit.interText.setVisible(true);
                    this.textTimer = 1;
                } 
                else if (rag == 1 && citrine == 0 && windowClean == 0) {
                    this.ragHot.setVisible(false);
                    this.rock.setVisible(true);
                    this.clean.setVisible(true);
                    this.clean.interText.setVisible(true);
                    this.textTimer = 1;
                    windowClean = 1;
                }
                if (rag == 1 && windowClean == 1 && this.textTimer < 1){
                    this.rock.setVisible(false);
                    this.clean.setVisible(true);
                    this.clean.interText.setVisible(false);
                    this.rock.interText.setVisible(true);
                    this.textTimer = 1;
                    citrine = 1;
                    this.itemTake.play();
                }
            });
        }

        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 150){
            // hide text
            this.windowHit.interText.setVisible(false);
            this.clean.interText.setVisible(false);
            this.rock.interText.setVisible(false);
            this.textTimer = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if (rag == 1 && windowClean == 1 && citrine == 0) {
            this.rock.setVisible(true);
            this.clean.setVisible(true);
        }
        
        if (windowClean == 1 & citrine == 1) {
            this.rock.setVisible(false);
            this.clean.setVisible(true);
        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("lookoutNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("lookoutSouth");
        };
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (rag == 1 && windowClean == 0){
                this.ragHot.setVisible(true);
            }
            else if (windowClean == 1){
                this.ragHot.setVisible(false);
            }

            if (citrine == 1 && weights == 0 && pendulummade == 0){
                this.citrineHot.setVisible(true);
            }
            else if(citrine == 1 && weights == 0 && pendulummade == 1){
                this.citrineHot.setVisible(false);
            }
            if (weights == 1 && balanced == 0){
                this.citrineHot.setVisible(false);
                this.rockHot.setVisible(true);
            }
            else if (balanced == 1){
                this.rockHot.setVisible(false);
            }

            if (rope == 1 && pendulummade == 0){
                this.ropeHot.setVisible(true);
            }
            else if(pendulummade == 0){
                this.ropeHot.setVisible(false);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.ragHot.setVisible(false);
            this.citrineHot.setVisible(false);
            this.ropeHot.setVisible(false);
        }
    }
}