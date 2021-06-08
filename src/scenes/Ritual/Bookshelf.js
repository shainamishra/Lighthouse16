class Bookshelf extends Phaser.Scene {
    constructor() {
        super("ritualBookshelf");
    }

    preload(){
        // scales images
        this.load.image('books', './assets/puzzle5/bookshelf/ritualNorth_bookshelf.png');
        this.load.image('fish', './assets/puzzle5/bookshelf/ritualNorth_fishing.png');
        this.load.image('garden', './assets/puzzle5/bookshelf/ritualNorth_gardening.png');
        this.load.image('stories', './assets/puzzle5/bookshelf/ritualNorth_billy.png');
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
        this.text = this.add.text(220, 65, 'Click and hold to read a book');
        this.text.setFontSize(50);
        this.text.setVisible(true);

        // garden hit
        this.fishHit = this.add.sprite(145, 425, 'hitbox');
        this.fishHit.setDisplaySize(90, 460);
        this.fishHit.setVisible(true);
        this.fishHit.setInteractive({
            cursor: handPointer
        });
        // garden
        this.fish = this.add.image(640, 350, 'fish');
        this.fish.setDisplaySize(1280, 720);
        this.fish.setVisible(false);

        // garden hit
        this.gardenHit = this.add.sprite(230, 450, 'hitbox');
        this.gardenHit.setDisplaySize(60, 410);
        this.gardenHit.setVisible(true);
        this.gardenHit.setInteractive({
            cursor: handPointer
        });
        // garden
        this.garden = this.add.image(640, 350, 'garden');
        this.garden.setDisplaySize(1280, 720);
        this.garden.setVisible(false);
        
        // short stories hit
        this.storiesHit = this.add.sprite(735, 430, 'hitbox');
        this.storiesHit.setDisplaySize(115, 440);
        this.storiesHit.setVisible(true);
        this.storiesHit.setInteractive({
            cursor: handPointer
        });
        // short stories
        this.stories = this.add.image(640, 350, 'stories');
        this.stories.setDisplaySize(1280, 720);
        this.stories.setVisible(false);

        // firebook hit
        this.firebookHit = this.add.sprite(1155, 405, 'hitbox');
        this.firebookHit.setDisplaySize(70, 500);
        this.firebookHit.setVisible(true);
        this.firebookHit.setInteractive({
            cursor: handPointer
        });
        // firebook
        this.firebook = this.add.image(640, 350, 'firebook');
        this.firebook.setDisplaySize(1280, 720);
        this.firebook.setVisible(false);

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
        this.add.rectangle(0, 0, 10, game.config.height, 0x191919).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x191919).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x191919).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x191919).setOrigin(0, 0);
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
        // fish
        this.fishHit.on('pointerdown', () => {
            this.fish.setVisible(true);
        });
        this.fishHit.on('pointerup', () => {
            this.hideBooks();
        });

        // garden
        this.gardenHit.on('pointerdown', () => {
            this.garden.setVisible(true);
        });
        this.gardenHit.on('pointerup', () => {
            this.hideBooks();
        });
        
        // stories
        this.storiesHit.on('pointerdown', () => {
            this.stories.setVisible(true);
        });
        this.storiesHit.on('pointerup', () => {
            this.hideBooks();
        });

        // firebook
        this.firebookHit.on('pointerdown', () => {
            this.firebook.setVisible(true);
        });
        this.firebookHit.on('pointerup', () => {
            this.hideBooks();
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 250) {
            this.textTimer += 1;

            // hide other hitboxes
            this.fishHit.setVisible(false);
            this.gardenHit.setVisible(false);
            this.storiesHit.setVisible(false);
            this.firebookHit.setVisible(false);
        } 
        else if(this.textTimer >= 250){
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

    hideBooks(){
        // hide books
        this.fish.setVisible(false);
        this.garden.setVisible(false);
        this.stories.setVisible(false);
        this.firebook.setVisible(false);

        // show hitboxes
        this.fishHit.setVisible(true);
        this.gardenHit.setVisible(true);
        this.storiesHit.setVisible(true);
        this.firebookHit.setVisible(true);
    }
}