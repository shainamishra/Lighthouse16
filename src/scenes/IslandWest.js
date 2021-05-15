class IslandWest extends Phaser.Scene {
    constructor() {
        super("islandWest");
    }
    
    preload() {
        // images
        this.load.image('islandwest', './assets/IslandWest.PNG');
        this.load.image('hitbox', './assets/HitBox2.png');

        // obstacles


        // spritesheets

    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
        this.playBGM.play();
        */
        // place tile sprite
        this.islandwest = this.add.tileSprite(0, 0, 1280, 720, 'islandwest').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            console.log(pointer);
            console.log(gameObject);
            console.log(event);
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
       
        //////////////
        //hitboxes
        this.statue = this.add.sprite(850, 300, 'hitbox');
        this.statue.setDisplaySize(300,400);
        this.statue.setInteractive({
            useHandCursor: true
        });
        this.statue.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'A crying statue with \n the numeral five');
        this.statue.interText.setFontSize(50);
        this.statue.interText.setVisible(false);
        
    }

    update() {
        if(textTimerStatue == 0){
            // if click on lighthouse
            this.statue.on('pointerdown', function (pointer){
                this.interText.setVisible(true);
                textTimerStatue = 1;
            });
        }

        // text on screen
        if(textTimerStatue > 0 && textTimerStatue < 150) {
            textTimerStatue += 1;
        } 
        else if(textTimerStatue >= 150){
            // hide text
            this.statue.interText.setVisible(false);
            textTimerStatue = 0;
        }

        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandEast");
        };
        // option to restart game
        /*
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("menuScene");
        }

        // makes background scroll 
        this.lab.tilePositionX += 15;
        */
    }
}