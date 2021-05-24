class IslandWest extends Phaser.Scene {
    constructor() {
        super("islandWest");
    }
    
    preload() {
        // images
        this.load.image('islandwest', './assets/islandwest.PNG');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('hitbox2', './assets/HitBox.png');
        this.load.image('combo', './assets/comboPH.png');
        this.load.image('open', './assets/puzzle1/statueUnlocked.png');
        this.load.image('openEmpty', './assets/puzzle1/statueUnlockednoItem.png');

        // inventory
        this.load.image('inventory', './assets/Inventory.png');
        this.load.image('x', './assets/x.png');
        this.load.image('set1', './assets/Puzzle1.png');
        this.load.image('set2', './assets/Puzzle2.png');
        this.load.image('set3', './assets/Puzzle3.png');
        this.load.image('set4', './assets/Puzzle4.png');
        this.load.image('set5', './assets/Puzzle5.png');
        this.load.image('end', './assets/End.png');
        this.load.image('woodbg', './assets/woodbg.png');

        // table of contents
        this.load.image('content1', './assets/toc/1.png');
        this.load.image('content2', './assets/toc/2.png');
        this.load.image('content3', './assets/toc/3.png');
        this.load.image('content4', './assets/toc/4.png');
        this.load.image('content5', './assets/toc/5.png');
        this.load.image('content6', './assets/toc/6.png');
        this.load.image('content7', './assets/toc/7.png');

        this.load.audio('itemtake', './assets/ItemTake.wav');
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
        // inventory 
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        // page 1
        this.page1 = this.add.sprite(650,350, 'woodbg');
        this.page1.setDisplaySize(1280, 720);
        this.page1.setVisible(false);

        // page 2
        this.page2 = this.add.sprite(650,350, 'set1');
        this.page2.setDisplaySize(1280, 720);
        this.page2.setVisible(false);

        // page 3
        this.page3 = this.add.sprite(650,350, 'set2');
        this.page3.setDisplaySize(1280, 720);
        this.page3.setVisible(false);

        // page 4
        this.page4 = this.add.sprite(650,350, 'set3');
        this.page4.setDisplaySize(1280, 720);
        this.page4.setVisible(false);

        // page 5
        this.page5 = this.add.sprite(650,350, 'set4');
        this.page5.setDisplaySize(1280, 720);
        this.page5.setVisible(false);

        // page 6
        this.page6 = this.add.sprite(650,350, 'set5');
        this.page6.setDisplaySize(1280, 720);
        this.page6.setVisible(false);

        // page 7
        this.page7 = this.add.sprite(650,350, 'end');
        this.page7.setDisplaySize(1280, 720);
        this.page7.setVisible(false);

        // close
        this.closeInven = this.add.sprite(50, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(false);
        this.closeInven.setInteractive({
            useHandCursor: true
        });

        // content1
        this.content1 = this.add.sprite(160, 680, 'content1');
        this.content1.setDisplaySize(50, 50);
        this.content1.setVisible(false);
        this.content1.setInteractive({
            useHandCursor: true
        });
        
        // content2
        this.content2 = this.add.sprite(320, 680, 'content2');
        this.content2.setDisplaySize(50, 50);
        this.content2.setVisible(false);
        this.content2.setInteractive({
            useHandCursor: true
        });

        // content3
        this.content3 = this.add.sprite(480, 680, 'content3');
        this.content3.setDisplaySize(50, 50);
        this.content3.setVisible(false);
        this.content3.setInteractive({
            useHandCursor: true
        });

        // content4
        this.content4 = this.add.sprite(640, 680, 'content4');
        this.content4.setDisplaySize(50, 50);
        this.content4.setVisible(false);
        this.content4.setInteractive({
            useHandCursor: true
        });

        // content5
        this.content5 = this.add.sprite(800, 680, 'content5');
        this.content5.setDisplaySize(50, 50);
        this.content5.setVisible(false);
        this.content5.setInteractive({
            useHandCursor: true
        });

        // content6
        this.content6 = this.add.sprite(960, 680, 'content6');
        this.content6.setDisplaySize(50, 50);
        this.content6.setVisible(false);
        this.content6.setInteractive({
            useHandCursor: true
        });

        // content7
        this.content7 = this.add.sprite(1120, 680, 'content7');
        this.content7.setDisplaySize(50, 50);
        this.content7.setVisible(false);
        this.content7.setInteractive({
            useHandCursor: true
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.inventoryOn = false;
        this.page = 1;
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
                console.log("solved")
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
                this.openEmPic.setVisible(true);
            }
            else{
                this.openPic.setVisible(true);
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
            });
            boltGot = 1;
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory
        // clicks inventory
        this.invent.on('pointerdown', (pointer) => {
            this.inventoryOn = true;
        });

        // "x" to close inventory
        this.closeInven.on('pointerdown', (pointer) => {
            this.inventoryOn = false;
        });

        // inventory is open
        if(this.inventoryOn == true){
            // hide inventory icon
            this.invent.setVisible(false);
            // show inventory close button
            this.closeInven.setVisible(true);
            // 1 button
            this.content1.setVisible(true);
            // 2 button
            this.content2.setVisible(true);
            // 3 button
            this.content3.setVisible(true);
            // 4 button
            this.content4.setVisible(true);
            // 5 button
            this.content5.setVisible(true);
            // 6 button
            this.content6.setVisible(true);
            // 7 button
            this.content7.setVisible(true);
            
            // first page
            if (this.page == 1){
                // show page1
                this.page1.setVisible(true);
            }

            // click content 1
            this.content1.on('pointerdown', (pointer) => {
                // show page1
                if(this.page != 1){
                    this.page = 1;
                    this.pageTurn(this.page);
                }
            });

            // click content 2
            this.content2.on('pointerdown', (pointer) => {
                // show page1
                if(this.page != 2){
                    this.page = 2;
                    this.pageTurn(this.page);
                }
            });

            // click content 3
            this.content3.on('pointerdown', (pointer) => {
                // show page1
                if(this.page != 3){
                    this.page = 3;
                    this.pageTurn(this.page);
                }
            });

            // click content 4
            this.content4.on('pointerdown', (pointer) => {
                // show page1
                if(this.page != 4){
                    this.page = 4;
                    this.pageTurn(this.page);
                }
            });

            // click content 5
            this.content5.on('pointerdown', (pointer) => {
                // show page1
                if(this.page != 5){
                    this.page = 5;
                    this.pageTurn(this.page);
                }
            });

            // click content 6
            this.content6.on('pointerdown', (pointer) => {
                // show page1
                if(this.page != 6){
                    this.page = 6;
                    this.pageTurn(this.page);
                }
            });

            // click content 7
            this.content7.on('pointerdown', (pointer) => {
                // show page1
                if(this.page != 7){
                    this.page = 7;
                    this.pageTurn(this.page);
                }
            });

        } else if(this.inventoryOn == false){
            // show inventory icon
            this.invent.setVisible(true);
            // hide inventory close button
            this.closeInven.setVisible(false);
            
            // hide pages
            this.page = 1;
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

            // hide table of contents
            this.content1.setVisible(false);
            this.content2.setVisible(false);
            this.content3.setVisible(false);
            this.content4.setVisible(false);
            this.content5.setVisible(false);
            this.content6.setVisible(false);
            this.content7.setVisible(false);
        }

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

    pageTurn(page)
    {
        if(page == 1){
            this.page1.setVisible(true);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

        } else if(page == 2){
            this.page1.setVisible(false);
            this.page2.setVisible(true);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

        } else if(page == 3){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(true);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

        } else if(page == 4){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(true);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

        } else if(page == 5){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(true);
            this.page6.setVisible(false);
            this.page7.setVisible(false);
            
        } else if(page == 6){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(true);
            this.page7.setVisible(false);
            
        } else if(page == 7){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(true);
            
        } 
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