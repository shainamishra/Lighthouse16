class IslandSouth extends Phaser.Scene {
    constructor() {
        super("islandSouth");
    }
    
    preload() {
        // images
        this.load.image('islandsouth', './assets/IslandSouth.PNG');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('gravebox', './assets/puzzle1/gravebox.png');

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

        // spritesheets
        this.load.audio('itemtake', './assets/ItemTake.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
        this.playBGM.play();
        */
        // place tile sprite
        this.islandsouth = this.add.tileSprite(0, 0, 1280, 720, 'islandsouth').setOrigin(0, 0); 

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
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });
        
        ////////////////////////////////////////////////////
        this.graves = this.add.sprite(850, 250, 'hitbox');
        this.graves.setDisplaySize(600, 400);
        this.graves.setInteractive({
            useHandCursor: true
        });
        this.graves.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'Strange text instead of names');
        this.graves.interText.setFontSize(50);
        this.graves.interText.setVisible(false);

        this.gravebox = this.add.sprite(600, 400, 'gravebox');
        this.gravebox.setDisplaySize(107, 82);
        this.gravebox.setVisible(true);
        this.gravebox.setInteractive({
            useHandCursor: true
        });
        this.gravebox.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 50, 'A small locked box');
        this.gravebox.interText.setFontSize(50);
        this.gravebox.interText.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory 
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        // box bg
        this.boxBG = this.add.sprite(650,350, 'inventBG');
        this.boxBG.setDisplaySize(1280, 720);
        this.boxBG.setVisible(false);

        // close
        this.closeInven = this.add.sprite(50, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(false);
        this.closeInven.setInteractive({
            useHandCursor: true
        });

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
        this.textTimerGraves = 0;
        this.textTimerGBox = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        
    
    }

    update() {
        if(this.textTimerGraves == 0){
            // if click on lighthouse
            this.graves.on('pointerdown', (pointer) => {
                this.graves.interText.setVisible(true);
                this.textTimerGraves = 1;
            });
        }

        // text on screen
        if(this.textTimerGraves > 0 && this.textTimerGraves < 150) {
            this.textTimerGraves += 1;
        } 
        else if(this.textTimerGraves >= 150){
            // hide text
            this.graves.interText.setVisible(false);
            this.textTimerGraves = 0;
        }

        if(this.textTimerGBox == 0 && keyGot == 0){
            // if click on lighthouse
            this.gravebox.on('pointerdown', (pointer) => {
                this.gravebox.interText.setVisible(true);
                this.textTimerGBox = 1;
            });
        }
        else if(this.textTimerGBox ==0 && keyGot == 1){
            this.gravebox.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, "A reel was inside");
            this.gravebox.interText.setFontSize(50);
            this.gravebox.interText.setVisible(false);
            this.gravebox.on('pointerdown', (pointer) => {
                this.gravebox.interText.setVisible(true);
                this.textTimerGBox = 1;
                reelGot =1;
            });
        }
        if(this.textTimerGBox == 1 && reelGot == 1){
            this.sound.play("itemtake");
        }
        // text on screen
        if(this.textTimerGBox> 0 && this.textTimerGBox < 150) {
            this.textTimerGBox += 1;
        } 
        else if(this.textTimerGBox >= 150){
            // hide text
            this.gravebox.interText.setVisible(false);
            this.textTimerGBox = 0;
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress

        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("islandEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandNorth");
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
}