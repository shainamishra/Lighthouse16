class Bookshelf extends Phaser.Scene {
    constructor() {
        super("ritualBookshelf");
    }

    preload(){
        // scales images
        this.load.image('books', './assets/puzzle5/bookshelf/ritualNorth_bookshelf.png');
        this.load.image('firebook', './assets/puzzle5/bookshelf/ritualNorth_firebook.png');
        this.load.image('garden', './assets/puzzle5/bookshelf/ritualNorth_gardening.png');

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
        // firebook hit
        this.firebookHit = this.add.sprite(1155, 405, 'hitbox');
        this.firebookHit.setDisplaySize(70, 500);
        this.firebookHit.setVisible(true);
        this.firebookHit.setInteractive({
            cursor: handPointer
        });
        // firebook
        this.firebook = this.add.image(640, 355, 'firebook');
        this.firebook.setDisplaySize(1280, 720);
        this.firebook.setVisible(false);

        // garden hit
        this.gardenHit = this.add.sprite(230, 450, 'hitbox2');
        this.gardenHit.setDisplaySize(60, 410);
        this.gardenHit.setVisible(true);
        this.gardenHit.setInteractive({
            cursor: handPointer
        });
        // garden
        this.garden = this.add.image(640, 355, 'garden');
        this.garden.setDisplaySize(1280, 720);
        this.garden.setVisible(false);

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
        // firebook
        this.firebookHit.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.firebook.setVisible(true);
                this.textTimer = 1;
            }
        });
        // garden
        this.gardenHit.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.garden.setVisible(true);
                this.textTimer = 1;
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 250) {
            this.textTimer += 1;

            // hide other hitboxes
            this.firebookHit.setVisible(false);
            this.gardenHit.setVisible(false);
        } 
        else if(this.textTimer >= 250){
            // hide text
            this.textTimer = 0;

            // hide books
            this.firebook.setVisible(false);
            this.garden.setVisible(false);

            // show hitboxes
            this.firebookHit.setVisible(true);
            this.gardenHit.setVisible(true);
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