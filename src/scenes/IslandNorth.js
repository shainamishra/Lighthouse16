class IslandNorth extends Phaser.Scene {
    constructor() {
        super("islandNorth");
    }
    
    preload() {
        // images
        this.load.image('islandnorth', './assets/islandNorth');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('hook', './assets/manDoorHandHookCarDoor.png');

        // inventory
        this.load.image('inventory', './assets/Inventory.png');
        this.load.image('x', './assets/x.png');
        this.load.image('next', './assets/next.png');
        this.load.image('invent1', './assets/Page1.png');
        this.load.image('invent2', './assets/inventoryInterior.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*
        this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
        this.playBGM.play();
        */
       
        // place tile sprite
        // WHAT IS THE ISSUE
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
        this.page1 = this.add.sprite(650,350, 'invent1');
        this.page1.setDisplaySize(1280, 720);
        this.page1.setVisible(false);

        // page 2
        this.page2 = this.add.sprite(650,350, 'invent2');
        this.page2.setDisplaySize(1280, 720);
        this.page2.setVisible(false);

        // close
        this.closeInven = this.add.sprite(50, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(false);
        this.closeInven.setInteractive({
            useHandCursor: true
        });

        // next
        this.next = this.add.sprite(1240, 680, 'next');
        this.next.setDisplaySize(50, 50);
        this.next.setVisible(false);
        this.next.setInteractive({
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
            console.log("click")
            inventory = true;
        });

        // "x" to close inventory
        this.closeInven.on('pointerdown', function (pointer){
            console.log("close")
            inventory = false;
        });

        // inventory is open
        if(inventory == true){
            console.log("open")
            // hide inventory icon
            this.invent.setVisible(false);
            // show inventory close button
            this.closeInven.setVisible(true);
            // show next button
            this.next.setVisible(true);
            
            if (page == 1){
                this.page1.setVisible(true);
            }
            // click next button
            this.next.on('pointerdown', function (pointer){
                console.log("next")
                // open inventory
                page += 1;
                console.log(page)
                this.scene.pageTurn(page);
            });
        } else if(inventory == false){
            // show inventory icon
            this.invent.setVisible(true);
            // hide inventory close button
            this.closeInven.setVisible(false);
            // hide next button
            this.next.setVisible(false);
            
            // hide pages
            page = 1;
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            //this.page3.setVisible(false);
            //this.page4.setVisible(false);
            //this.page5.setVisible(false);
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
            // show page one, hide others
            // should hide prev
            this.page1.setVisible(true);
            this.page2.setVisible(false);
            //this.page3.setVisible(false);
            //this.page4.setVisible(false);
            //this.page5.setVisible(false);

        } else if(page == 2){
            this.page1.setVisible(false);
            this.page2.setVisible(true);
            //this.page3.setVisible(false);
            //this.page4.setVisible(false);
            //this.page5.setVisible(false);

        } else if(page == 3){

        } else if(page == 4){

        } else if(page == 5){

            // should hide next on 
        } 
    }
}    

