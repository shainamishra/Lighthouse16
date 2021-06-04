class Closet extends Phaser.Scene {
    constructor() {
        super("ritualCloset");
    }

    preload(){
        // scales images
        this.load.image('closet', './assets/puzzle5/closeups/closet_clock.png');
        this.load.image('clockUnlock', './assets/puzzle5/closeups/closet_clock_open.png');
        this.load.image('closetNote', './assets/puzzle5/overlays/closet_note.png');


        // audio
        this.load.audio('unlock', './assets/sfx/doorUnlock2.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'closet').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.unlock = this.sound.add('unlock', {volume: 0.75});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // unlock
        this.unlock = this.add.image(640, 360, 'clockUnlock');
        this.unlock.setDisplaySize(1280, 720);
        this.unlock.setVisible(false);

        // note
        this.note = this.add.image(640, 360, 'closetNote');
        this.note.setDisplaySize(1280, 720);
        this.note.setVisible(false);
        // note hit
        this.noteHit = this.add.image(615, 485, 'hitbox');
        this.noteHit.setDisplaySize(100, 20);
        this.noteHit.setVisible(false);
        this.noteHit.setInteractive({
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
        this.textVar = 150;

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
                this.scene.stop("ritualCloset");
                this.scene.wake("ritualSouth");
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects

        // will need to do the clicks for the hand movement and actually set this up
        clockUnlock = 1;

        if(clockUnlock == 1 && paper == 0){
            this.note.setVisible(true);
            this.noteHit.setVisible(true);
        }

        if(this.textTimer == 0 && paper == 0){
            this.noteHit.on('pointerdown', () => {
                this.textVar = 150;
                this.textTimer = 1;
                paper = 1;
            });
        }
        

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < this.textVar) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= this.textVar){
            // hide text
            this.textTimer = 0;
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 1){
            this.dark.setVisible(false);
        } else if(lightState == 2){
            this.dark.setVisible(true);
        }

        if(clockUnlock == 1 && paper == 0){
            this.unlock.setVisible(true);
            this.note.setVisible(true);
        }
        if (paper == 1){
            this.unlock.setVisible(true);
            this.note.setVisible(false);
            this.noteHit.setVisible(false);
        }
    }
}