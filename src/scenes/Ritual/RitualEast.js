class RitualEast extends Phaser.Scene {
    constructor() {
        super("ritualEast");
    }

    preload() {
        // images
        this.load.image('ritualEast', './assets/puzzle5/ritualEast.png');
        this.load.image('unlockedRitual', './assets/puzzle5/ritualEast_unlocked.png');
        this.load.image('comboRitual', './assets/puzzle5/overlays/ritualEast_lock.png');
        this.load.image('cabinetRitual', './assets/puzzle5/cabinet/ritualEast_cabinet.png');

        // cabinet
        this.load.image('bleach', './assets/puzzle5/cabinet/ritualEast_bleach.png');
        this.load.image('candles', './assets/puzzle5/cabinet/ritualEast_candles.png');
        this.load.image('fertilizer', './assets/puzzle5/cabinet/ritualEast_fertilizer.png');
        this.load.image('insecticide', './assets/puzzle5/cabinet/ritualEast_insecticide.png');
        this.load.image('salt', './assets/puzzle5/cabinet/ritualEast_salt.png');

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

        this.candleHot = this.add.sprite(753, 654, 'candleHot');
        this.candleHot.setDisplaySize(70, 60);
        this.candleHot.setVisible(false);

        // chemicals
        this.bleachHot = this.add.sprite(845, 659, 'bleachHot');
        this.bleachHot.setDisplaySize(48, 54);
        this.bleachHot.setVisible(false);

        this.fertilizerHot = this.add.sprite(845, 660, 'fertilizerHot');
        this.fertilizerHot.setDisplaySize(39, 54);
        this.fertilizerHot.setVisible(false);

        this.insecticideHot = this.add.sprite(845, 659, 'insecticideHot');
        this.insecticideHot.setDisplaySize(28, 60);
        this.insecticideHot.setVisible(false);

        this.saltHot = this.add.sprite(845, 659, 'saltHot');
        this.saltHot.setDisplaySize(36, 60);
        this.saltHot.setVisible(false);

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
        this.timeVar = 250;
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

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimer == 0){
                this.scene.switch("instructionScene");
                this.textTimer = 1;
            }
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // object hits
        // box
        if(this.textTimer == 0){
            this.cabinentHit.on('pointerdown', () =>{
                if(unlocked == 0 && this.textTimer == 0){
                    this.combo.setVisible(true);
                    this.textTimer = 1;
                }

                if(unlocked == 1 && this.textTimer == 0){
                    this.textTimer = 1;
                    this.timeVar = 20;
                    this.scene.switch("ritualCabinet");
                }
            });
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        // lock input on screen
        if(unlocked == 0) {
            this.inputCombo = this.checkCombo();
            if(this.inputCombo == 523){
                unlocked = 1;
                this.textTimer = this.timeVar + 1;
                // chage to chain break
                //this.sound.play("itemtake");

                this.combo.setVisible(false);
                this.unlocked.setVisible(true);
                this.digit1.interText.setVisible(false);
                this.digit2.interText.setVisible(false);
                this.digit3.interText.setVisible(false);
            }
            else if (pos == 3 && this.inputCombo != 0){
                this.textTimer = this.timeVar + 1;
            }
        }

        if(this.textTimer > 0 && this.textTimer < this.timeVar && unlocked == 1) {
            this.textTimer += 1;
        }
        else if(this.textTimer >= this.timeVar){
            // hide text
            //this.box.interText.setVisible(false);
            this.combo.setVisible(false);
            this.textTimer = 0;
            this.digit1.interText.setVisible(false);
            this.digit2.interText.setVisible(false);
            this.digit3.interText.setVisible(false);
            this.inputCombo = 0;
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
            this.combo.setVisible(false);
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
            
            if (candles == 1){
                this.candleHot.setVisible(true);
            }

            if (chemical == 1){
                this.fertilizerHot.setVisible(true);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(false);
            } else if (chemical == 2){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(true);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(false);
            } else if (chemical == 3){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(true);
                this.saltHot.setVisible(false);
            } else if (chemical == 4){
                this.fertilizerHot.setVisible(false);
                this.insecticideHot.setVisible(false);
                this.bleachHot.setVisible(false);
                this.saltHot.setVisible(true);
            } 

        }
        else {
            this.hotbar.setVisible(false);
            this.knifeHot.setVisible(false);
            this.matchesHot.setVisible(false);
            this.keyHot.setVisible(false);
            this.candleHot.setVisible(false);

            // chemicals
            this.fertilizerHot.setVisible(false);
            this.insecticideHot.setVisible(false);
            this.bleachHot.setVisible(false);
            this.saltHot.setVisible(false);
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