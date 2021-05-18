class IslandNorth extends Phaser.Scene {
    constructor() {
        super("islandNorth");
    }
    
    preload() {
        // images
        this.load.image('islandnorth', './assets/IslandNorth.PNG');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('hook', './assets/manDoorHandHookCarDoor.png');

        // inventory
        this.load.image('inventory', './assets/Inventory.png');
        this.load.image('x', './assets/x.png');
        this.load.image('page1', './assets/Page1.png');
        this.load.image('page2', './assets/Page2.png');
        this.load.image('page3', './assets/Page3.png');
        this.load.image('page4', './assets/Page4.png');
        this.load.image('page5', './assets/Page5.png');
        this.load.image('page6', './assets/inventbg.png');
        this.load.image('page7', './assets/inventbg.png');

        // table of contents
        this.load.image('content1', './assets/1.png');
        this.load.image('content2', './assets/2.png');
        this.load.image('content3', './assets/3.png');
        this.load.image('content4', './assets/4.png');
        this.load.image('content5', './assets/5.png');
        this.load.image('content6', './assets/6.png');
        this.load.image('content7', './assets/7.png');

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
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
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
        // inventory 
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        // page 1
        this.page1 = this.add.sprite(650,350, 'page1');
        this.page1.setDisplaySize(1280, 720);
        this.page1.setVisible(false);

        // page 2
        this.page2 = this.add.sprite(650,350, 'page2');
        this.page2.setDisplaySize(1280, 720);
        this.page2.setVisible(false);

        // page 3
        this.page3 = this.add.sprite(650,350, 'page3');
        this.page3.setDisplaySize(1280, 720);
        this.page3.setVisible(false);

        // page 4
        this.page4 = this.add.sprite(650,350, 'page4');
        this.page4.setDisplaySize(1280, 720);
        this.page4.setVisible(false);

        // page 5
        this.page5 = this.add.sprite(650,350, 'page5');
        this.page5.setDisplaySize(1280, 720);
        this.page5.setVisible(false);

        // page 6
        this.page6 = this.add.sprite(650,350, 'page6');
        this.page6.setDisplaySize(1280, 720);
        this.page6.setVisible(false);

        // page 7
        this.page7 = this.add.sprite(650,350, 'page7');
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
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // lighthouse text

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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cellar text
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
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory
        // clicks inventory
        this.invent.on('pointerdown', function (pointer){
            inventory = true;
        });

        // "x" to close inventory
        this.closeInven.on('pointerdown', function (pointer){
            inventory = false;
        });

        // inventory is open
        if(inventory == true){
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
            if (page == 1){
                // show page1
                this.page1.setVisible(true);
            }

            // click content 1
            this.content1.on('pointerdown', function (pointer){
                // show page1
                if(page != 1){
                    page = 1;
                    this.scene.pageTurn(page);
                }
            });

            // click content 2
            this.content2.on('pointerdown', function (pointer){
                // show page1
                if(page != 2){
                    page = 2;
                    this.scene.pageTurn(page);
                }
            });

            // click content 3
            this.content3.on('pointerdown', function (pointer){
                // show page1
                if(page != 3){
                    page = 3;
                    this.scene.pageTurn(page);
                }
            });

            // click content 4
            this.content4.on('pointerdown', function (pointer){
                // show page1
                if(page != 4){
                    page = 4;
                    this.scene.pageTurn(page);
                }
            });

            // click content 5
            this.content5.on('pointerdown', function (pointer){
                // show page1
                if(page != 5){
                    page = 5;
                    this.scene.pageTurn(page);
                }
            });

            // click content 6
            this.content6.on('pointerdown', function (pointer){
                // show page1
                if(page != 6){
                    page = 6;
                    this.scene.pageTurn(page);
                }
            });

            // click content 7
            this.content7.on('pointerdown', function (pointer){
                // show page1
                if(page != 7){
                    page = 7;
                    this.scene.pageTurn(page);
                }
            });

        } else if(inventory == false){
            // show inventory icon
            this.invent.setVisible(true);
            // hide inventory close button
            this.closeInven.setVisible(false);
            
            // hide pages
            page = 1;
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
            this.scene.start("islandWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("islandEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("islandSouth");
        };

        // temporary
        if(Phaser.Input.Keyboard.JustDown(keyW)){
            //this.menuBGM.stop();
            this.scene.start("lighthouse");
        };
    }

    pageTurn(page)
    {
        if(page == 1){
            console.log("page 1")
            this.page1.setVisible(true);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

        } else if(page == 2){
            console.log("page 2")
            this.page1.setVisible(false);
            this.page2.setVisible(true);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

        } else if(page == 3){
            console.log("page 3")
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(true);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

        } else if(page == 4){
            console.log("page 4")
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(true);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);

        } else if(page == 5){
            console.log("page 5")
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(true);
            this.page6.setVisible(false);
            this.page7.setVisible(false);
            
        } else if(page == 6){
            console.log("page 6")
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(true);
            this.page7.setVisible(false);
            
        } else if(page == 7){
            console.log("page 7")
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

