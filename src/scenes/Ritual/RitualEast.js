class RitualEast extends Phaser.Scene {
    constructor() {
        super("ritualEast");
    }

    preload() {
        // images
        this.load.image('ritualEast', './assets/puzzle5/ritualEast.png');
        this.load.image('unlockedRitual', './assets/puzzle5/ritualEast_unlocked.png');
        this.load.image('comboRitual', './assets/puzzle5/overlays/ritualEast_lock.png');

        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'ritualEast').setOrigin(0, 0); 

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
        // unlocked cabinet
        this.unlocked = this.add.image(640, 360, 'unlockedRitual');
        this.unlocked.setDisplaySize(1280, 720);
        this.unlocked.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory box set up
        this.invent = this.add.sprite(60, 60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // lock
        this.cabinentHit = this.add.image(615, 490, 'hitbox');
        this.cabinentHit.setDisplaySize(580, 270);
        this.cabinentHit.setVisible(true);
        this.cabinentHit.setInteractive({
            useHandCursor: true
        });

        // combo pop up
        this.combo = this.add.image(640, 360, 'comboRitual');
        this.combo.setDisplaySize(1280, 720);
        this.combo.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbarRitual');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.matchesHot = this.add.sprite(460, 659, 'matchesRitual');
        this.matchesHot.setDisplaySize(80, 40);
        this.matchesHot.setVisible(false);

        this.knifeHot = this.add.sprite(560, 660, 'knifeRitual');
        this.knifeHot.setDisplaySize(100, 65);
        this.knifeHot.setVisible(false);

        this.keyHot = this.add.sprite(660, 659, 'keyRitual');
        this.keyHot.setDisplaySize(70, 60);
        this.keyHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // digits
        this.digit1 = this.add.sprite(50, 50, 'hitbox2');
        this.digit1.setDisplaySize(50, 50);
        this.digit1.setVisible(false);
        this.digit1.interText = this.add.text(420, 400, '1');
        this.digit1.interText.setFontSize(50);
        this.digit1.interText.setVisible(false);

        // digits
        this.digit2 = this.add.sprite(50, 50, 'hitbox2');
        this.digit2.setDisplaySize(50, 50);
        this.digit2.setVisible(false);
        this.digit2.interText = this.add.text(602, 355, '1');
        this.digit2.interText.setFontSize(50);
        this.digit2.interText.setVisible(false);

        // digits
        this.digit3 = this.add.sprite(50, 50, 'hitbox2');
        this.digit3.setDisplaySize(50, 50);
        this.digit3.setVisible(false);
        this.digit3.interText = this.add.text(771, 355, '1');
        this.digit3.interText.setFontSize(50);
        this.digit3.interText.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'darkRitual');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.hotOn = true;
        this.textTimer = 0;
        this.timeVar = 150;
        this.inputCombo = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x61282f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x61282f).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox7");
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // object hits

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // combo stuff
        // box
        if(this.textTimer == 0){
            if(unlocked == 0){
                this.cabinentHit.on('pointerdown', () =>{
                    //this.box.interText.setVisible(true);

                    // change this to combo image
                    this.combo.setVisible(true);
                    this.textTimer = 1;
                    
                });
            }
            if(unlocked == 1){
                //this.box.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 150, 'You took the \nboltcutters');
                //this.box.interText.setFontSize(50);
                //this.box.interText.setVisible(false);
                this.cabinentHit.on('pointerdown', () =>{
                    this.combo.setVisible(false);
                    this.textTimer = 1;
                    this.scene.switch("ritualCabinet");
                });
            }
        }

        // lock input on screen
        if(this.textTimer > 0 && this.textTimer < 250 && unlocked == 0) {
            this.inputCombo = this.checkCombo();
            if(this.inputCombo == 523){
                unlocked = 1;
                this.textTimerBox = 251;
                //chage to chain break
                //this.sound.play("itemtake");

                this.combo.setVisible(false);
                this.unlocked.setVisible(true);
                this.digit1.interText.setVisible(false);
                this.digit2.interText.setVisible(false);
                this.digit3.interText.setVisible(false);
            }
            else if(pos == 3){
                //this.textTimer = 251;
                //console.log("wrong combo");
            }
        } 
        /*
        else if(this.textTimer > 0 && this.textTimer < 250 && unlocked == 1) {
            this.textTimer += 1;
            this.box.interText.setVisible(true);
            if(this.textTimer == 2){
                this.sound.play("itemtake");
            }
            if(boltGot == 0){
                this.openPic.setVisible(true);
            }
            else{
                this.openEmPic.setVisible(true);
            }
        }
        */

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < this.timeVar) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= this.timeVar){
            // hide text
            this.textTimer = 0;
            //this.box.interText.setVisible(false);
            this.combo.setVisible(false);
            this.digit1.interText.setVisible(false);
            this.digit2.interText.setVisible(false);
            this.digit3.interText.setVisible(false);
            combo = '';
            pos = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 1){
            // lights are off 
            this.dark.setVisible(true);
        } else if(lightState == 2){
            // lights are on
            this.dark.setVisible(false);
        } 

        if(unlocked == 1){
            // show unlocked cabinet
            this.unlocked.setVisible(true);
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("ritualNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("ritualSouth");
        };
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (knifeGot == 1){
                this.knifeHot.setVisible(true);
            }

            if (matches == 1){
                this.matchesHot.setVisible(true);
            }

            if (deskKey == 1){
                this.keyHot.setVisible(true);
            }

        }
        else {
            this.hotbar.setVisible(false);
            this.knifeHot.setVisible(false);
            this.matchesHot.setVisible(false);
            this.keyHot.setVisible(false);
        }
    }

    checkCombo(){
        // 1
        if(Phaser.Input.Keyboard.JustDown(key1)){
            if (pos == 0){
                combo = combo.concat('100');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '1');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);

            } 
            else if (pos == 1){
                combo = combo.concat('+ 10');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '1');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 1');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '1');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 2
        if(Phaser.Input.Keyboard.JustDown(key2)){
            if (pos == 0){
                combo = combo.concat('200');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '2');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 20');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '2');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 2');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '2');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 3
        if(Phaser.Input.Keyboard.JustDown(key3)){
            if (pos == 0){
                combo = combo.concat('300');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '3');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 30');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '3');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 3');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '3');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 4
        if(Phaser.Input.Keyboard.JustDown(key4)){
            if (pos == 0){
                combo = combo.concat('400');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '4');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 40');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '4');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 4');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '4');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 5
        if(Phaser.Input.Keyboard.JustDown(key5)){
            if (pos == 0){
                combo = combo.concat('500');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '5');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 50');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '5');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 5');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '5');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 6
        if(Phaser.Input.Keyboard.JustDown(key6)){
            if (pos == 0){
                combo = combo.concat('600');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '6');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 60');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '6');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 6');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '6');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 7
        if(Phaser.Input.Keyboard.JustDown(key7)){
            if (pos == 0){
                combo = combo.concat('700');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '7');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 70');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '7');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 7');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '7');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 8
        if(Phaser.Input.Keyboard.JustDown(key8)){
            if (pos == 0){
                combo = combo.concat('800');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '8');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 80');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '8');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 8');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '8');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };

        // 9
        if(Phaser.Input.Keyboard.JustDown(key9)){
            if (pos == 0){
                combo = combo.concat('900');
                pos = 1;
                this.digit1.interText = this.add.text(415, 355, '9');
                this.digit1.interText.setFontSize(50);
                this.digit1.interText.setVisible(true);
            } 
            else if (pos == 1){
                combo = combo.concat('+ 90');
                pos = 2;
                this.digit2.interText = this.add.text(602, 355, '9');
                this.digit2.interText.setFontSize(50);
                this.digit2.interText.setVisible(true);
            } 
            else if (pos == 2){
                combo = combo.concat('+ 9');
                pos = 3;
                this.digit3.interText = this.add.text(771, 355, '9');
                this.digit3.interText.setFontSize(50);
                this.digit3.interText.setVisible(true);
            }
        };
        
        return eval(combo);
    }
}