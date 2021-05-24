class CellarWest extends Phaser.Scene {
    constructor() {
        super("cellarWest");
    }

    preload() {
        // images
        this.load.image('cellar', './assets/puzzle2/cellar.png');
        this.load.image('shelves', './assets/puzzle2/overlays/westBookshelf.png');
        this.load.image('desk', './assets/puzzle2/overlays/westDeskLocked.png');
        this.load.image('book', './assets/puzzle2/overlays/westBook.png');
        this.load.image('key2', './assets/puzzle2/overlays/westKey.png');


        this.load.image('hitbox2', './assets/HitBox.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'cellar').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });
        
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
        this.deskClose = this.add.image(640, 360, 'desk');
        this.deskClose.setDisplaySize(1280, 720);
        this.deskClose.setVisible(true);

        // book image
        this.book = this.add.image(640, 360, 'book');
        this.book.setDisplaySize(1280, 720);
        this.book.setVisible(false);

        // key
        this.desk = this.add.sprite(382, 550, 'hitbox');
        this.desk.setDisplaySize(510, 300);
        this.desk.setInteractive({
            useHandCursor: true
        });
        this.desk.interText = this.add.text(700, 450, 'The desk drawer\n   is locked');
        this.desk.interText.setFontSize(50);
        this.desk.interText.setVisible(false); 
        // key image
        this.keyIm = this.add.image(640, 360, 'key2');
        this.keyIm.setDisplaySize(1280, 720);
        this.keyIm.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerDesk = 0;
        this.textTimerShelf = 0;
        

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x0c141c).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // desk
        // click on desk
        this.desk.on('pointerdown', (pointer) => {
            if(deskKey == 0){
                this.desk.interText.setVisible(true); 
                this.textTimerDesk = 1;
            }

            if(deskKey == 1){

            }
        });

        // desk text timer
        if(this.textTimerDesk > 0 && this.textTimerDesk < 150) {
            this.textTimerDesk += 1;
        } 
        else if(this.textTimerDesk >= 150){
            // hide text
            this.desk.interText.setVisible(false);
            this.textTimerDesk = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // shelf
        // click on desk
        this.shelf.on('pointerdown', (pointer) => {
            this.shelf.interText.setVisible(true); 
            this.book.setVisible(true);
            this.keyIm.setVisible(true);
            this.textTimerShelf = 1;
        });

        // desk text timer
        if(this.textTimerShelf > 0 && this.textTimerShelf < 200) {
            this.textTimerShelf += 1;
        } 
        else if(this.textTimerShelf >= 200){
            // hide text
            this.book.setVisible(false);
            this.shelf.interText.setVisible(false);
            this.keyIm.setVisible(false);
            this.textTimerShelf = 0;
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
}    