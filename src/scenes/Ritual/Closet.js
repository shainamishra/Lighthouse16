class Closet extends Phaser.Scene {
    constructor() {
        super("ritualCloset");
    }

    preload(){
        // scales images
        this.load.image('closet', './assets/puzzle5/closet/closet_clock.png');
        this.load.image('clockUnlock', './assets/puzzle5/closet/closet_clock_open.png');
        this.load.image('closetNote', './assets/puzzle5/closet/closet_note.png');
        this.load.image('closetNoteOpen', './assets/puzzle5/closet/closet_note_open.png');

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
        this.noteHit = this.add.image(615, 455, 'hitbox');
        this.noteHit.setDisplaySize(150, 100);
        this.noteHit.setVisible(false);
        this.noteHit.setInteractive({
            cursor: handPointer
        });
        this.noteHit.interText = this.add.text(220, 650, 'You put the note in your inventory');
        this.noteHit.interText.setFontSize(40);
        this.noteHit.interText.setVisible(false);

        // clock hit
        this.clockHit = this.add.image(615, 370, 'hitbox');
        this.clockHit.setDisplaySize(250, 350);
        this.clockHit.setVisible(true);
        this.clockHit.setInteractive({
            cursor: handPointer
        });

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
        this.textVar = 150;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x261f1f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x261f1f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x261f1f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x261f1f).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // go back to lookOut
        this.clockHit.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.textVar = 50;
                this.scene.switch("closetClock");
            }
        });

        this.closeLook.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.textVar = 50;
                this.scene.switch("ritualSouth");
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        if(clockUnlock == 1 && paper == 0){
            this.clockHit.setVisible(false);
            this.note.setVisible(true);
            this.noteHit.setVisible(true);
        }

        if(this.textTimer == 0 && paper == 0){
            this.noteHit.on('pointerdown', () => {
                this.textVar = 300;
                this.textTimer = 1;
                this.noteHit.interText.setVisible(true);
                paper = 1;
            });
        }
        if(this.textTimer == 0 && paper == 1){
            this.noteHit.on('pointerdown', () => {
                this.textVar = 150;
                this.textTimer = 1;
                this.noteHit.interText.setVisible(true);
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
            this.noteHit.interText.setVisible(false);
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 0){
            this.dark.setVisible(false);
        } else if(lightState == 1){
            this.dark.setVisible(true);
        }

        if(clockUnlock == 1 && paper == 0){
            this.unlock.setVisible(true);
            this.note.setVisible(true);
        }
        if (paper == 1){
            this.unlock.setVisible(true);
            this.note.setVisible(false);
        }
    }
}