class Cabinet extends Phaser.Scene {
    constructor() {
        super("ritualCabinet");
    }

    preload(){
        // images

        // audio
        this.load.audio('unlock', './assets/sfx/doorUnlock2.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'cabinetRitual').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.unlock = this.sound.add('unlock', {volume: 0.75});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // chemicals images
        // bleachIm
        this.bleachIm = this.add.image(640, 360, 'bleach');
        this.bleachIm.setDisplaySize(1280, 720);
        this.bleachIm.setVisible(true);
        // bleach hitbox
        this.bleach = this.add.sprite(900, 220, 'hitbox');
        this.bleach.setDisplaySize(280, 320);
        this.bleach.setVisible(true);
        this.bleach.setInteractive({
            cursor: handPointer
        });
        this.bleach.interText = this.add.text(400, 420, 'You took the bleach');
        this.bleach.interText.setFontSize(50);
        this.bleach.interText.setVisible(false);

        // fertilizer
        this.fertilizerIm = this.add.image(640, 360, 'fertilizer');
        this.fertilizerIm.setDisplaySize(1280, 730);
        this.fertilizerIm.setVisible(true);
        // fertilizer hitbox
        this.fertilizer = this.add.sprite(320, 220, 'hitbox');
        this.fertilizer.setDisplaySize(200, 280);
        this.fertilizer.setVisible(true);
        this.fertilizer.setInteractive({
            cursor: handPointer
        });
        this.fertilizer.interText = this.add.text(400, 420, 'You took the fertilizer');
        this.fertilizer.interText.setFontSize(50);
        this.fertilizer.interText.setVisible(false);

        // insect im
        this.insecticideIm = this.add.image(640, 362, 'insecticide');
        this.insecticideIm.setDisplaySize(1280, 720);
        this.insecticideIm.setVisible(true);
        // insect hitbox
        this.insecticide = this.add.sprite(638, 235, 'hitbox');
        this.insecticide.setDisplaySize(130, 260);
        this.insecticide.setVisible(true);
        this.insecticide.setInteractive({
            cursor: handPointer
        });
        this.insecticide.interText = this.add.text(400, 420, 'You took the insecticide');
        this.insecticide.interText.setFontSize(50);
        this.insecticide.interText.setVisible(false);

        // salt im
        this.saltIm = this.add.image(640, 360, 'salt');
        this.saltIm.setDisplaySize(1280, 720);
        this.saltIm.setVisible(true);
        // salt hitbox
        this.salt = this.add.sprite(305, 557, 'hitbox');
        this.salt.setDisplaySize(170, 250);
        this.salt.setVisible(true);
        this.salt.setInteractive({
            cursor: handPointer
        });
        this.salt.interText = this.add.text(400, 420, 'You took the salt');
        this.salt.interText.setFontSize(50);
        this.salt.interText.setVisible(false);

        // candle im
        this.candleIm = this.add.image(640, 360, 'candles');
        this.candleIm.setDisplaySize(1280, 720);
        this.candleIm.setVisible(true);
        // candle hitbox
        this.candle = this.add.sprite(770, 625, 'hitbox');
        this.candle.setDisplaySize(505, 130);
        this.candle.setVisible(true);
        this.candle.setInteractive({
            cursor: handPointer
        });
        this.candle.interText = this.add.text(400, 420, 'You took the candles');
        this.candle.interText.setFontSize(50);
        this.candle.interText.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // close
        this.closeLook = this.add.sprite(50, 50, 'x');
        this.closeLook.setDisplaySize(50, 50);
        this.closeLook.setVisible(true);
        this.closeLook.setInteractive({
            cursor: handPointer
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'darkRitual');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;
        this.timeVar = 150;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // go back to lookOut
        this.closeLook.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.scene.stop("ritualCabinet");
                this.scene.wake("ritualEast");
            }
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // candles
        if(this.textTimer == 0){
            if(candles == 0){
                this.candle.on('pointerdown', () => {
                    candles = 1;
                    this.timeVar = 75;
                    this.textTimer = 1;

                    this.candleIm.setVisible(false);

                    // change text
                    this.candle.interText.setVisible(true);
                    this.fertilizer.interText.setVisible(false);
                    this.insecticide.interText.setVisible(false);
                    this.bleach.interText.setVisible(false);
                    this.salt.interText.setVisible(false);
                });
            }

            this.fertilizer.on('pointerdown', () => {
                chemical = 1;
                this.timeVar = 75;
                this.textTimer = 1;

                // change image
                this.fertilizerIm.setVisible(false);
                this.insecticideIm.setVisible(true);
                this.bleachIm.setVisible(true);
                this.saltIm.setVisible(true);
                
                // change text
                this.candle.interText.setVisible(false);
                this.fertilizer.interText.setVisible(true);
                this.insecticide.interText.setVisible(false);
                this.bleach.interText.setVisible(false);
                this.salt.interText.setVisible(false);
            });
            
            this.insecticide.on('pointerdown', () => {
                chemical = 2;
                this.timeVar = 75;
                this.textTimer = 1;

                this.fertilizerIm.setVisible(true);
                this.insecticideIm.setVisible(false);
                this.bleachIm.setVisible(true);
                this.saltIm.setVisible(true);

                // change text
                this.candle.interText.setVisible(false);
                this.fertilizer.interText.setVisible(false);
                this.insecticide.interText.setVisible(true);
                this.bleach.interText.setVisible(false);
                this.salt.interText.setVisible(false);
            });
            this.bleach.on('pointerdown', () => {
                chemical = 3;
                this.timeVar = 75;
                this.textTimer = 1;

                this.fertilizerIm.setVisible(true);
                this.insecticideIm.setVisible(true);
                this.bleachIm.setVisible(false);
                this.saltIm.setVisible(true);

                // change text
                this.candle.interText.setVisible(false);
                this.fertilizer.interText.setVisible(false);
                this.insecticide.interText.setVisible(false);
                this.bleach.interText.setVisible(true);
                this.salt.interText.setVisible(false);
            });
            this.salt.on('pointerdown', () => {
                chemical = 4;
                this.timeVar = 75;
                this.textTimer = 1;

                this.fertilizerIm.setVisible(true);
                this.insecticideIm.setVisible(true);
                this.bleachIm.setVisible(true);
                this.saltIm.setVisible(false);

                // change text
                this.candle.interText.setVisible(false);
                this.fertilizer.interText.setVisible(false);
                this.insecticide.interText.setVisible(false);
                this.bleach.interText.setVisible(false);
                this.salt.interText.setVisible(true);
            });
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < this.timeVar) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= this.timeVar){
            this.textTimer = 0;
            // hide text
            this.candle.interText.setVisible(false);
            this.fertilizer.interText.setVisible(false);
            this.insecticide.interText.setVisible(false);
            this.bleach.interText.setVisible(false);
            this.salt.interText.setVisible(false);
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 0){
            // lights are on
            this.dark.setVisible(false);
        } else if(lightState == 1){
            // lights are off 
            this.dark.setVisible(true);
        }

        if(candles > 0){
            this.candle.setVisible(false);
            this.candleIm.setVisible(false);
        }
        if (chemical == 1){
            // hitboxes
            this.fertilizer.setVisible(false);
            this.insecticide.setVisible(true);
            this.bleach.setVisible(true);
            this.salt.setVisible(true);
            // images
            this.fertilizerIm.setVisible(false);
            this.insecticideIm.setVisible(true);
            this.bleachIm.setVisible(true);
            this.saltIm.setVisible(true);

        } else if (chemical == 2){
            // hitboxes
            this.fertilizer.setVisible(true);
            this.insecticide.setVisible(false);
            this.bleach.setVisible(true);
            this.salt.setVisible(true);
            // images
            this.fertilizerIm.setVisible(true);
            this.insecticideIm.setVisible(false);
            this.bleachIm.setVisible(true);
            this.saltIm.setVisible(true);

        } else if (chemical == 3){
            // hitboxes
            this.fertilizer.setVisible(true);
            this.insecticide.setVisible(true);
            this.bleach.setVisible(false);
            this.salt.setVisible(true);
            // images
            this.fertilizerIm.setVisible(true);
            this.insecticideIm.setVisible(true);
            this.bleachIm.setVisible(false);
            this.saltIm.setVisible(true);

        } else if (chemical == 4){
            // hitboxes
            this.fertilizer.setVisible(true);
            this.insecticide.setVisible(true);
            this.bleach.setVisible(true);
            this.salt.setVisible(false);
            // images
            this.fertilizerIm.setVisible(true);
            this.insecticideIm.setVisible(true);
            this.bleachIm.setVisible(true);
            this.saltIm.setVisible(false);
        } 
    }
}