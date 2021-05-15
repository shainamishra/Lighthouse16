class IslandNorth extends Phaser.Scene {
    constructor() {
        super("islandnorthScene");
    }
    
    preload() {
        // images
        this.load.image('islandnorth', './assets/IslandNorth.PNG');
        this.load.image('hitbox', './assets/HitBox2.png');

    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
        this.playBGM.play();
        */
        // place tile sprite
        this.islandnorth = this.add.tileSprite(0, 0, 1280, 720, 'islandnorth').setOrigin(0, 0); 

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
        //this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'Door is locked').setFontSize(50).setVisible(false);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //objects

        // lighthouse
        this.lighthouse = this.add.sprite(750,250, 'hitbox');
        this.lighthouse.setDisplaySize(300, 400);
        this.lighthouse.setInteractive({
            useHandCursor: true
        });
        this.lighthouse.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'door is locked');
        this.lighthouse.interText.setFontSize(50);
        this.lighthouse.interText.setVisible(false);

        // cellar
        this.cellar = this.add.sprite(100, 550, 'hitbox');
        this.cellar.setDisplaySize(300, 200);
        this.cellar.setInteractive({
            useHandCursor: true
        });
        this.cellar.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 +50, 'chains block the cellar');
        this.cellar.interText.setFontSize(50);
        this.cellar.interText.setVisible(false);  

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        
    }
    
    update() {
        // if lighthouse text is not on screen 
        if(textTimerLight == 0){
            // if click on lighthouse
            this.lighthouse.on('pointerdown', function (pointer){
                this.interText.setVisible(true);
                textTimerLight = 1;
            });
        }

        // text on screen
        if(textTimerLight > 0 && textTimerLight < 150) {
            textTimerLight += 1;
        } 
        else if(textTimerLight >= 150){
            // hide text
            this.lighthouse.interText.setVisible(false);
            textTimerLight = 0;
        }

        // if cellar text is not on screen 
        if(textTimerCell == 0){
            // if click on cellar
            this.cellar.on('pointerdown', function (pointer){
                this.interText.setVisible(true);
                textTimerCell = 1;
            });
        }

        // text on screen
        if(textTimerCell > 0 && textTimerCell < 150) {
            textTimerCell += 1;
        } 
        else if(textTimerCell >= 150){
            // hide text
            this.cellar.interText.setVisible(false);
            textTimerCell = 0;
        }
    

        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandwest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandeast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandsouth");
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