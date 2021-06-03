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
            useHandCursor: true
        });

        // fertilizer
        this.fertilizerIm = this.add.image(640, 360, 'fertilizer');
        this.fertilizerIm.setDisplaySize(1280, 730);
        this.fertilizerIm.setVisible(true);
        // fertilizer hitbox
        this.fertilizer = this.add.sprite(320, 220, 'hitbox');
        this.fertilizer.setDisplaySize(200, 280);
        this.fertilizer.setVisible(true);
        this.fertilizer.setInteractive({
            useHandCursor: true
        });

        // insect im
        this.insecticideIm = this.add.image(640, 362, 'insecticide');
        this.insecticideIm.setDisplaySize(1280, 720);
        this.insecticideIm.setVisible(true);
        // insect hitbox
        this.insecticide = this.add.sprite(638, 235, 'hitbox');
        this.insecticide.setDisplaySize(130, 260);
        this.insecticide.setVisible(true);
        this.insecticide.setInteractive({
            useHandCursor: true
        });

        // salt im
        this.saltIm = this.add.image(640, 360, 'salt');
        this.saltIm.setDisplaySize(1280, 720);
        this.saltIm.setVisible(true);
        // salt hitbox
        this.salt = this.add.sprite(305, 557, 'hitbox');
        this.salt.setDisplaySize(170, 250);
        this.salt.setVisible(true);
        this.salt.setInteractive({
            useHandCursor: true
        });

        // candle im
        this.candleIm = this.add.image(640, 360, 'candles');
        this.candleIm.setDisplaySize(1280, 720);
        this.candleIm.setVisible(true);
        // candle hitbox
        this.candle = this.add.sprite(770, 625, 'hitbox');
        this.candle.setDisplaySize(505, 130);
        this.candle.setVisible(true);
        this.candle.setInteractive({
            useHandCursor: true
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // close
        this.closeLook = this.add.sprite(50, 50, 'x');
        this.closeLook.setDisplaySize(50, 50);
        this.closeLook.setVisible(true);
        this.closeLook.setInteractive({
            useHandCursor: true
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'darkRitual');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
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
        

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 150){
            // hide text
            this.textTimer = 0;
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
    }
}