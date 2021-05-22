class Lighthouse extends Phaser.Scene {
    constructor() {
        super("lighthouse");
    }

    preload() {
        // images
        this.load.image('bg', './assets/bg.png');
        this.load.image('ph', './assets/placeholder.png');
        this.load.image('highPriestess', './assets/highPriestess.png');
        this.load.image('death', './assets/Death.png');

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
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // hover testing nonsense
        
        this.ph = this.add.sprite(160, 330, 'ph');
        this.ph.setDisplaySize(210, 360);
        this.ph.setVisible(true);
        this.ph.setInteractive({
            useHandCursor: true
        });

        this.ph2 = this.add.sprite(400, 330, 'ph');
        this.ph2.setDisplaySize(210, 360);
        this.ph2.setVisible(true);
        this.ph2.setInteractive({
            useHandCursor: true
        });

        this.hp = this.add.image(650, 350, 'highPriestess');
        this.hp.setDisplaySize(1280, 720);
        this.hp.setVisible(false);

        this.d = this.add.image(650, 350, 'death');
        this.d.setDisplaySize(1280, 720);
        this.d.setVisible(false);
        

        // hover var
        this.onCard = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }

    update() {
        //if(this.onCard == 0){
            // if hover on hp
            this.ph.on('pointerover', (pointer) => {
                console.log("on hp");
                this.hp.setVisible(true);
                this.onCard = 1;
            });

            // if hover on hp
            this.ph2.on('pointerover', (pointer) => {
                console.log("on death");
                this.d.setVisible(true);
                this.onCard = 1;
            });
        //}

        // if hover off death
        this.ph2.on('pointerout', (pointer) => {
            console.log("off death");
            this.d.setVisible(false);
            //this.onCard = 1;
        });

        // if hover off hp
        this.ph.on('pointerout', (pointer) => {
            //console.log("off hp");
            this.hp.setVisible(false);
            //this.onCard = 1;
        });

        /*
        // text on screen
        if(this.onCard > 0 && this.onCard < 100) {
            this.onCard += 1;
        } 
        else if(this.onCard >= 100){
            console.log("OUT")
            this.hp.setVisible(false);
            this.d.setVisible(false);
            this.onCard = 0;
        }*/

        // hover shit
        /*
        this.input.pointerOver()
        {
            console.log("on card")
        }
        */

        // temp, back to outside
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("islandNorth");  
        }
    }
}