class IslandWest extends Phaser.Scene {
    constructor() {
        super("islandWest");
    }
    
    preload() {
        // images
        this.load.image('islandwest', './assets/puzzle1/IslandWest.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('hitbox2', './assets/HitBox.png');
        this.load.image('combo', './assets/puzzle1/overlays/combo.png');
        this.load.image('open', './assets/puzzle1/overlays/statueUnlocked.png');
        this.load.image('openEmpty', './assets/puzzle1/overlays/statueUnlockednoItem.png');

        // audio
        this.load.audio('itemtake', './assets/sfx/ItemTake.wav');
        this.load.audio('wrong', './assets/sfx/Wrong.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.islandwest = this.add.tileSprite(0, 0, 1280, 720, 'islandwest').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

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
        // inventory box set up
        this.invent = this.add.sprite(60, 60, 'hitbox');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });
        // invent image
        this.inventIm = this.add.image(630, 350, 'inventory');
        this.inventIm.setDisplaySize(1280, 720);
        this.inventIm.setVisible(true);
        
        prevScene = this.scene.key;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // help icon set up
        this.help = this.add.sprite(1223, 60, 'hitbox');
        this.help.setDisplaySize(85, 85);
        this.help.setInteractive({
            useHandCursor: true
        });
        // help image
        this.helpIm = this.add.image(660, 355, 'help');
        this.helpIm.setDisplaySize(1280, 720);
        this.helpIm.setVisible(true);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hitboxes
        this.statue = this.add.sprite(850, 300, 'hitbox');
        this.statue.setDisplaySize(300,400);
        this.statue.setInteractive({
            useHandCursor: true
        });
        this.statue.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'A crying statue with \nthe numeral five');
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
        this.combo = this.add.image(640, 350, 'combo');
        this.combo.setDisplaySize(1280, 720);
        this.combo.setVisible(false);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.keyHot = this.add.sprite(460, 659, 'keyHot');
        this.keyHot.setDisplaySize(60, 60);
        this.keyHot.setInteractive({
            useHandCursor: true
        });
        this.keyHot.setVisible(false);

        this.reelHot = this.add.sprite(560, 660, 'reelHot');
        this.reelHot.setDisplaySize(75, 75);
        this.reelHot.setInteractive({
            useHandCursor: true
        });
        this.reelHot.setVisible(false);

        this.telescopeHot = this.add.sprite(655, 660, 'telescopeHot');
        this.telescopeHot.setDisplaySize(80, 80);
        this.telescopeHot.setInteractive({
            useHandCursor: true
        });
        this.telescopeHot.setVisible(false);

        this.boltcuttersHot = this.add.sprite(755, 659, 'boltcuttersHot');
        this.boltcuttersHot.setDisplaySize(70, 70);
        this.boltcuttersHot.setInteractive({
            useHandCursor: true
        });
        this.boltcuttersHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerStatue = 0;
        this.textTimerBox = 0;
        this.inputCombo = 0;
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // digits
        this.digit1 = this.add.sprite(50, 50, 'hitbox2');
        this.digit1.setDisplaySize(50, 50);
        this.digit1.setVisible(false);
        this.digit1.interText = this.add.text(415, 350, '1');
        this.digit1.interText.setFontSize(50);
        this.digit1.interText.setVisible(false);

        // digits
        this.digit2 = this.add.sprite(50, 50, 'hitbox2');
        this.digit2.setDisplaySize(50, 50);
        this.digit2.setVisible(false);
        this.digit2.interText = this.add.text(605, 350, '1');
        this.digit2.interText.setFontSize(50);
        this.digit2.interText.setVisible(false);

        // digits
        this.digit3 = this.add.sprite(50, 50, 'hitbox2');
        this.digit3.setDisplaySize(50, 50);
        this.digit3.setVisible(false);
        this.digit3.interText = this.add.text(777, 350, '1');
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
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);
        
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', () => {
            this.scene.switch("cardBox");
        });

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimerStatue == 0){
                this.scene.switch("instructionScene");
                this.textTimerStatue = 1;
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // statue
        if(this.textTimerStatue == 0){

            this.statue.on('pointerdown', () =>{
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
                this.box.on('pointerdown', () =>{
                    this.box.interText.setVisible(true);
                    this.combo.setVisible(true);
                    this.textTimerBox = 1;
                    
                });
            }
            if(unlocked == 1){
                this.box.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 150, 'You took the \nboltcutters');
                this.box.interText.setFontSize(50);
                this.box.interText.setVisible(false);
                this.box.on('pointerdown', () =>{
                    this.combo.setVisible(false);
                    this.textTimerBox = 1;
                });
            }
        }

        // lock input on screen
        if(this.textTimerBox > 0 && this.textTimerBox < 250 && unlocked == 0) {
            this.inputCombo = this.checkCombo();
            if(this.inputCombo == 352){
                unlocked = 1;
                //this.textTimerBox = 250;
                //this.sound.play("itemtake");
            }
            else if(pos == 3){
                this.textTimerBox = 251;
                this.sound.play("wrong");
            }
        } 
        else if(this.textTimerBox > 0 && this.textTimerBox < 250 && unlocked == 1) {
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
        else if(this.textTimerBox >= 250){
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
            this.box.on('pointerdown', () => {
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
    }

    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (keyGot == 1){
                this.keyHot.setVisible(true);
            }

            if (reelGot == 1){
                this.reelHot.setVisible(true);
            }

            if (scopeGot == 2){
                this.telescopeHot.setVisible(true);
            }

            if (boltGot == 1){
                this.boltcuttersHot.setVisible(true);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.keyHot.setVisible(false);
            this.reelHot.setVisible(false);
            this.telescopeHot.setVisible(false);
            this.boltcuttersHot.setVisible(false);
        }
    }

    checkCombo(){
        // 1
        if(Phaser.Input.Keyboard.JustDown(key1)){
            if (pos == 0){
                combo = combo.concat('100');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '1');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);

            } 
            else if (pos == 1){
                combo = combo.concat('+ 10');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '1');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 1');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '1');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 2
        if(Phaser.Input.Keyboard.JustDown(key2)){
            if (pos == 0){
                combo = combo.concat('200');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '2');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 20');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '2');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 2');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '2');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 3
        if(Phaser.Input.Keyboard.JustDown(key3)){
            if (pos == 0){
                combo = combo.concat('300');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '3');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 30');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '3');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 3');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '3');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 4
        if(Phaser.Input.Keyboard.JustDown(key4)){
            if (pos == 0){
                combo = combo.concat('400');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '4');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 40');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '4');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 4');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '4');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 5
        if(Phaser.Input.Keyboard.JustDown(key5)){
            if (pos == 0){
                combo = combo.concat('500');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '5');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 50');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '5');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 5');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '5');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 6
        if(Phaser.Input.Keyboard.JustDown(key6)){
            if (pos == 0){
                combo = combo.concat('600');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '6');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 60');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '6');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 6');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '6');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 7
        if(Phaser.Input.Keyboard.JustDown(key7)){
            if (pos == 0){
                combo = combo.concat('700');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '7');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 70');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '7');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 7');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '7');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 8
        if(Phaser.Input.Keyboard.JustDown(key8)){
            if (pos == 0){
                combo = combo.concat('800');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '8');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 80');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '8');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 8');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '8');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 9
        if(Phaser.Input.Keyboard.JustDown(key9)){
            if (pos == 0){
                combo = combo.concat('900');
                pos = 1;
                this.digit1.interText = this.add.text(415, 350, '9');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 90');
                pos = 2;
                this.digit2.interText = this.add.text(605, 350, '9');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 9');
                pos = 3;
                this.digit3.interText = this.add.text(777, 350, '9');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };
        
        return eval(combo);
    }
}