class IslandWest extends Phaser.Scene {
    constructor() {
        super("islandWest");
    }
    
    preload() {
        // images
        this.load.image('islandwest', './assets/puzzle1/IslandWest.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('hitbox2', './assets/HitBox.png');
        this.load.image('combo', './assets/puzzle1/comboPH.png');
        this.load.image('open', './assets/puzzle1/overlays/statueUnlocked.png');
        this.load.image('openEmpty', './assets/puzzle1/overlays/statueUnlockednoItem.png');

        // audio
        this.load.audio('itemtake', './assets/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.islandwest = this.add.tileSprite(0, 0, 1280, 720, 'islandwest').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

        // numbers
        key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        key3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        key4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        key5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
        key6 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
        key7 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
        key8 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
        key9 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });
        
        //////////////
        // hitboxes
        this.statue = this.add.sprite(850, 300, 'hitbox');
        this.statue.setDisplaySize(300,400);
        this.statue.setInteractive({
            useHandCursor: true
        });
        this.statue.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'A crying statue with \n the numeral five');
        this.statue.interText.setFontSize(50);
        this.statue.interText.setVisible(false);

        // box
        this.openPic = this.add.sprite(630, 350, 'open');
        this.openPic.setDisplaySize(1280, 720);
        this.openPic.setVisible(false);

        this.openEmPic = this.add.sprite(630, 350, 'openEmpty');
        this.openEmPic.setDisplaySize(1280, 720);
        this.openEmPic.setVisible(false);

        this.open = this.add.sprite(860, 550, 'hitbox');
        this.open.setDisplaySize(220, 30);
        this.open.setInteractive({
            useHandCursor: true
        });
        //this.open.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 150, 'A pair of bolt cutters');
        //this.open.interText.setFontSize(50);
        //this.open.interText.setVisible(false);

        // box
        this.box = this.add.sprite(860, 550, 'hitbox');
        this.box.setDisplaySize(220, 30);
        this.box.setInteractive({
            useHandCursor: true
        });
        this.box.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 150, ' The box needs a \nthree digit combo');
        this.box.interText.setFontSize(50);
        this.box.interText.setVisible(false);

        // combo pop up
        this.combo = this.add.image(630, 500, 'combo');
        this.combo.setDisplaySize(600, 300);
        this.combo.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerStatue = 0;
        this.textTimerBox = 0;
        this.inputCombo = 0;

        // digits
        this.digit1 = this.add.sprite(50, 50, 'hitbox2');
        this.digit1.setDisplaySize(50, 50);
        this.digit1.setVisible(false);
        this.digit1.interText = this.add.text(430, 455, '1');
        this.digit1.interText.setFontSize(50);
        this.digit1.interText.setVisible(false);

        // digits
        this.digit2 = this.add.sprite(50, 50, 'hitbox2');
        this.digit2.setDisplaySize(50, 50);
        this.digit2.setVisible(false);
        this.digit2.interText = this.add.text(615, 455, '1');
        this.digit2.interText.setFontSize(50);
        this.digit2.interText.setVisible(false);

        // digits
        this.digit3 = this.add.sprite(50, 50, 'hitbox2');
        this.digit3.setDisplaySize(50, 50);
        this.digit3.setVisible(false);
        this.digit3.interText = this.add.text(800, 455, '1');
        this.digit3.interText.setFontSize(50);
        this.digit3.interText.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }

    update() {
        // statue
        if(this.textTimerStatue == 0){
            // if click on lighthouse
            this.statue.on('pointerdown', (pointer) =>{
                this.statue.interText.setVisible(true);
                this.textTimerStatue = 1;
            });
        }

        // text on screen
        if(this.textTimerStatue > 0 && this.textTimerStatue < 150) {
            this.textTimerStatue += 1;
        } 
        else if(this.textTimerStatue >= 150){
            // hide text
            this.statue.interText.setVisible(false);
            this.textTimerStatue = 0;
        }

        // box
        if(this.textTimerBox == 0){
            if(unlocked == 0){
                this.box.on('pointerdown', (pointer) =>{
                    this.box.interText.setVisible(true);
                    this.combo.setVisible(true);
                    this.textTimerBox = 1;
                    
                });
            }
            if(unlocked == 1){
                this.box.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 150, 'You took the \nboltcutters');
                this.box.interText.setFontSize(50);
                this.box.interText.setVisible(false);
                this.box.on('pointerdown', (pointer) =>{
                    this.combo.setVisible(false);
                    this.textTimerBox = 1;
                });
            }
        }

        // text on screen
        if(this.textTimerBox > 0 && this.textTimerBox < 150 && unlocked == 0) {
            this.textTimerBox += 1;

            //check num input
            this.inputCombo = this.checkCombo();
            if(this.inputCombo == 352){
                unlocked = 1;
                //this.sound.play("itemtake");
            }
        } 
        else if(this.textTimerBox > 0 && this.textTimerBox < 150 && unlocked == 1) {
            this.textTimerBox += 1;
            this.box.interText.setVisible(true);
            if(this.textTimerBox == 2){
                this.sound.play("itemtake");
            }
            if(boltGot == 0){
                this.openPic.setVisible(true);
            }
            else{
                this.openEmPic.setVisible(true);
            }
        }
        else if(this.textTimerBox >= 150){
            // hide text
            this.box.interText.setVisible(false);
            this.combo.setVisible(false);
            this.textTimerBox = 0;
            this.digit1.interText.setVisible(false);
            this.digit2.interText.setVisible(false);
            this.digit3.interText.setVisible(false);
            combo = '';
            pos = 0;
        }

        // take boltcutters
        if(unlocked == 1){
            this.box.on('pointerdown', (pointer) => {
                this.openEmPic.setVisible(true);
                this.openPic.setVisible(false);
                boltGot = 1;
            });
        }

        // show open state
        if(unlocked > 0 && boltGot == 1){
            this.openPic.setVisible(false);
            this.openEmPic.setVisible(true);
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandEast");
        };
    }

    checkCombo(){
        // 1
        if(Phaser.Input.Keyboard.JustDown(key1)){
            if (pos == 0){
                combo = combo.concat('100');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '1');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);

            } 
            else if (pos == 1){
                combo = combo.concat('+ 10');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '1');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 1');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '1');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 2
        if(Phaser.Input.Keyboard.JustDown(key2)){
            if (pos == 0){
                combo = combo.concat('200');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '2');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 20');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '2');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 2');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '2');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 3
        if(Phaser.Input.Keyboard.JustDown(key3)){
            if (pos == 0){
                combo = combo.concat('300');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '3');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 30');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '3');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 3');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '3');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 4
        if(Phaser.Input.Keyboard.JustDown(key4)){
            if (pos == 0){
                combo = combo.concat('400');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '4');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 40');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '4');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 4');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '4');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 5
        if(Phaser.Input.Keyboard.JustDown(key5)){
            if (pos == 0){
                combo = combo.concat('500');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '5');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 50');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '5');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 5');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '5');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 6
        if(Phaser.Input.Keyboard.JustDown(key6)){
            if (pos == 0){
                combo = combo.concat('600');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '6');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 60');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '6');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 6');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '6');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 7
        if(Phaser.Input.Keyboard.JustDown(key7)){
            if (pos == 0){
                combo = combo.concat('700');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '7');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 70');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '7');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 7');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '7');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 8
        if(Phaser.Input.Keyboard.JustDown(key8)){
            if (pos == 0){
                combo = combo.concat('800');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '8');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 80');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '8');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 8');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '8');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 9
        if(Phaser.Input.Keyboard.JustDown(key9)){
            if (pos == 0){
                combo = combo.concat('900');
                pos = 1;
                this.digit1.interText = this.add.text(430, 455, '9');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 90');
                pos = 2;
                this.digit2.interText = this.add.text(615, 455, '9');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 9');
                pos = 3;
                this.digit3.interText = this.add.text(800, 455, '9');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };
        
        return eval(combo);
    }
}