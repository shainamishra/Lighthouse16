class CellarWest extends Phaser.Scene {
    constructor() {
        super("cellarWest");
    }

    preload() {
        // images
        this.load.image('cellar', './assets/puzzle2/cellar.png');
        this.load.image('shelves', './assets/puzzle2/overlays/westBookshelf.png');
        this.load.image('desk', './assets/puzzle2/overlays/westDeskLocked.png');
        this.load.image('deskOpen', './assets/puzzle2/overlays/westDeskOpen.png');
        this.load.image('book', './assets/puzzle2/overlays/westBook.png');
        this.load.image('key2', './assets/puzzle2/overlays/westKey.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'cellar').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.itemTake = this.sound.add('itemtake', {volume: 0.75});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory box set up
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // book shelf
        this.shelf = this.add.sprite(920, 190, 'hitbox');
        this.shelf.setDisplaySize(450, 310);
        this.shelf.setInteractive({
            useHandCursor: true
        });
        this.shelf.interText = this.add.text(80, 40, 'Nothing else to note');
        this.shelf.interText.setFontSize(50);
        this.shelf.interText.setVisible(false); 
        // shelf image
        this.shelfIm = this.add.image(640, 360, 'shelves');
        this.shelfIm.setDisplaySize(1280, 720);
        this.shelfIm.setVisible(true);

        // desk
        this.desk = this.add.sprite(382, 550, 'hitbox');
        this.desk.setDisplaySize(510, 300);
        this.desk.setInteractive({
            useHandCursor: true
        });
        this.desk.interText = this.add.text(700, 450, 'The desk drawer\n   is locked');
        this.desk.interText.setFontSize(50);
        this.desk.interText.setVisible(false); 
        // closed desk image
        this.deskClose = this.add.image(620, 320, 'desk');
        this.deskClose.setDisplaySize(1280, 720);
        this.deskClose.setVisible(true);
        // opened desk image
        this.deskOpen = this.add.image(620, 320, 'deskOpen');
        this.deskOpen.setDisplaySize(1280, 720);
        this.deskOpen.setVisible(false);
        this.deskOpen.interText = this.add.text(700, 450, 'You found a\nlight switch');
        this.deskOpen.interText.setFontSize(50);
        this.deskOpen.interText.setVisible(false);

        // book image
        this.book = this.add.image(640, 360, 'book');
        this.book.setDisplaySize(1280, 720);
        this.book.setVisible(false);

        // key
        this.key = this.add.sprite(990, 555, 'hitbox');
        this.key.setDisplaySize(80, 170);
        this.key.setVisible(false);
        this.key.setInteractive({
            useHandCursor: true
        });
        this.key.interText = this.add.text(515, 520, 'You found a\nstrange key');
        this.key.interText.setFontSize(50);
        this.key.interText.setVisible(false); 
        // key image
        this.keyIm = this.add.image(640, 360, 'key2');
        this.keyIm.setDisplaySize(1280, 720);
        this.keyIm.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.key2Hot = this.add.sprite(460, 659, 'key2Hot');
        this.key2Hot.setDisplaySize(100, 100);
        this.key2Hot.setInteractive({
            useHandCursor: true
        });
        this.key2Hot.setVisible(false);

        this.plateHot = this.add.sprite(560, 660, 'plateHot');
        this.plateHot.setDisplaySize(150, 150);
        this.plateHot.setInteractive({
            useHandCursor: true
        });
        this.plateHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'dark');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerDesk = 0;
        this.textTimerShelf = 0;
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // desk
        // click on desk
        if(this.textTimerShelf == 0){
            if(deskKey == 0){
                this.desk.on('pointerdown', (pointer) => {
                    this.desk.interText.setVisible(true);
                    this.textTimerDesk = 1;
                });
            }
            else if(deskKey == 1){
                this.desk.on('pointerdown', (pointer) => {
                    switchGot = 1;
                    this.desk.interText.setVisible(false);
                    this.deskOpen.interText.setVisible(true);
                    this.deskOpen.setVisible(true);
                    this.textTimerDesk = 1;
                    this.itemTake.play();
                });
            }
        }

        // desk text timer
        if(this.textTimerDesk > 0 && this.textTimerDesk < 150) {
            this.textTimerDesk += 1;
        } 
        else if(this.textTimerDesk >= 150){
            // hide text
            this.desk.interText.setVisible(false);
            this.deskOpen.interText.setVisible(false);
            this.textTimerDesk = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // shelf
        // click on shelf
        this.shelf.on('pointerdown', (pointer) => {
            this.book.setVisible(true);
            this.desk.setVisible(false);
            this.desk.interText.setVisible(false); 
            this.textTimerShelf = 1;
            this.hotOn = false;

            if(deskKey == 0){
                this.key.setVisible(true);
                this.keyIm.setVisible(true);
            } else {
                this.shelf.interText.setVisible(true); 
            }
        });

        // desk shelf timer
        if(this.textTimerShelf > 0 && this.textTimerShelf < 200) {
            this.textTimerShelf += 1;
            this.key.on('pointerdown', (pointer) => {
                this.key.setVisible(false);
                this.key.interText.setVisible(true);
                this.keyIm.setVisible(false);
                deskKey = 1;
                this.itemTake.play();
            });
        } 
        else if(this.textTimerShelf >= 200){
            // hide text
            this.book.setVisible(false);
            this.shelf.interText.setVisible(false);
            this.key.setVisible(false);
            this.keyIm.setVisible(false);
            this.key.interText.setVisible(false);
            this.textTimerShelf = 0;
            this.desk.setVisible(true);
            this.hotOn = true;
        }

        // show open state
        if(deskKey == 1 && switchGot == 1){
            this.deskOpen.setVisible(true);
        }
        
        // lights on or off
        if(lightState == 0){
            this.dark.setVisible(false);
        } else if (lightState == 1) {
            this.dark.setVisible(true);
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("cellarSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("cellarNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("cellarEast");
        };
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (deskKey == 1){
                this.key2Hot.setVisible(true);
            }

            if (switchGot == 1){
                this.plateHot.setVisible(true);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.key2Hot.setVisible(false);
            this.plateHot.setVisible(false);
        }
    }
}