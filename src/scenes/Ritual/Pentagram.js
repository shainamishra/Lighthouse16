class Pentagram extends Phaser.Scene {
    constructor() {
        super("ritualPentagram");
    }

    preload(){
        // images
        this.load.image('pentagram', './assets/puzzle5/pentagram/ritual_closeup.png');
        this.load.image('candlesPent', './assets/puzzle5/pentagram/ritual_closeup_candles.png');
        this.load.image('firePentNormal', './assets/puzzle5/pentagram/ritual_closeup_normal.png');
        this.load.image('firePentGreen', './assets/puzzle5/pentagram/ritual_closeup_green.png');
        this.load.image('firePentPurple', './assets/puzzle5/pentagram/ritual_closeup_purple.png');
        this.load.image('firePentYellow', './assets/puzzle5/pentagram/ritual_closeup_yellow.png');

        // audio
        this.load.audio('unlock', './assets/sfx/doorUnlock2.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 3, 1280, 720, 'pentagram').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.unlock = this.sound.add('unlock', {volume: 0.75});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // candle + fire
        this.candlesPent = this.add.image(640, 360, 'candlesPent');
        this.candlesPent.setDisplaySize(1280, 720);
        this.candlesPent.setVisible(false);
        // normal
        this.firePentNormal = this.add.image(640, 360, 'firePentNormal');
        this.firePentNormal.setDisplaySize(1280, 720);
        this.firePentNormal.setVisible(false);
        // green
        this.firePentGreen = this.add.image(640, 360, 'firePentGreen');
        this.firePentGreen.setDisplaySize(1280, 720);
        this.firePentGreen.setVisible(false);
        // purple
        this.firePentPurple = this.add.image(640, 360, 'firePentPurple');
        this.firePentPurple.setDisplaySize(1280, 720);
        this.firePentPurple.setVisible(false);
        // yellow
        this.firePentYellow = this.add.image(640, 360, 'firePentYellow');
        this.firePentYellow.setDisplaySize(1280, 720);
        this.firePentYellow.setVisible(false);

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
                this.scene.stop("ritualPentagram");
                this.scene.wake("ritualNorth");
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

        if(candles == 1){
            this.candlesPent.setVisible(true);
            if(matches == 1){
                this.firePentNormal.setVisible(true);
            }
        }
    }
}