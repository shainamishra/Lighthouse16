class Bookshelf extends Phaser.Scene {
    constructor() {
        super("ritualBookshelf");
    }

    preload(){
        // scales images
        this.load.image('books', './assets/puzzle5/closeups/ritualNorth_bookshelf.png');
        this.load.image('firebook', './assets/puzzle5/bookshelf/ritualNorth_firebook.png');

        // audio
        this.load.audio('unlock', './assets/sfx/doorUnlock2.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'books').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.unlock = this.sound.add('unlock', {volume: 0.75});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // firebook
        this.firebookHit = this.add.sprite(1155, 405, 'hitbox');
        this.firebookHit.setDisplaySize(70, 500);
        this.firebookHit.setVisible(true);
        this.firebookHit.setInteractive({
            useHandCursor: true
        });
        // dark
        this.firebook = this.add.image(640, 360, 'firebook');
        this.firebook.setDisplaySize(1280, 720);
        this.firebook.setVisible(false);

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
                this.scene.stop("ritualBookshelf");
                this.scene.wake("ritualNorth");
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // books
        this.firebookHit.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.firebook.setVisible(true);
                this.textTimer = 1;
            }
        });
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;

            // hide other hitboxes
            this.firebookHit.setVisible(false);
        } 
        else if(this.textTimer >= 150){
            // hide text
            this.textTimer = 0;

            // hide books
            this.firebook.setVisible(false);

            // show hitboxes
            this.firebookHit.setVisible(true);
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