class IslandNorth extends Phaser.Scene {
    constructor() {
        super("islandNorth");
    }

    preload() {
        // images
        this.load.image('islandnorth', './assets/puzzle1/IslandNorth.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.image('cellarUnlocked', './assets/puzzle1/overlays/cellarUnlocked.png');
        this.load.image('inventory', './assets/Inventory.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.islandnorth = this.add.tileSprite(0, 0, 1280, 720, 'islandnorth').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // inventory box set up
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////

        // lighthouse
        this.lighthouse = this.add.sprite(750,250, 'hitbox');
        this.lighthouse.setDisplaySize(300, 400);
        this.lighthouse.setInteractive({
            useHandCursor: true
        });
        this.lighthouse.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2, 'The door is locked');
        this.lighthouse.interText.setFontSize(50);
        this.lighthouse.interText.setVisible(false);

        // cellar
        this.cellar = this.add.sprite(100, 550, 'hitbox');
        this.cellar.setDisplaySize(300, 200);
        this.cellar.setInteractive({
            useHandCursor: true
        });
        this.cellar.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 50, 'chains block the cellar');
        this.cellar.interText.setFontSize(50);
        this.cellar.interText.setVisible(false);  

        // cellar unlocked
        this.cellOpen = this.add.image(640, 360, 'cellarUnlocked');
        this.cellOpen.setDisplaySize(1280, 720);
        this.cellOpen.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerLight = 0;
        this.textTimerCell = 0;
        this.cellerOpen = false;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    }
    
    update() {
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // lighthouse text
        // if lighthouse text is not on screen 
        if(this.textTimerLight == 0){
            // if click on lighthouse
            this.lighthouse.on('pointerdown', (pointer) => {
                this.lighthouse.interText.setVisible(true);
                this.textTimerLight = 1;
            });
        }

        // text on screen
        if(this.textTimerLight > 0 && this.textTimerLight < 150) {
            this.textTimerLight += 1;
        } 
        else if(this.textTimerLight >= 150){
            // hide text
            this.lighthouse.interText.setVisible(false);
            this.textTimerLight = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cellar text
        // if cellar text is not on screen 
        if(this.textTimerCell == 0){
            // if click on cellar
            if(boltGot == 0){
                this.cellar.on('pointerdown', (pointer) => {
                    this.cellar.interText.setVisible(true);
                    this.textTimerCell = 1;
                });
            }
            else if(boltGot == 1){
                this.cellar.interText = this.add.text(borderUISize + borderPadding * 20, borderUISize + borderPadding * 2 + 50, 'You cut the chains');
                this.cellar.interText.setFontSize(50);
                this.cellar.interText.setVisible(false);
                this.cellar.on('pointerdown', (pointer) => {
                    this.cellOpen.setVisible(true);
                    this.cellar.interText.setVisible(true);
                    this.textTimerCell = 1;
                    this.cellerOpen = true;
                    unlocked = 2;
                });
            }
        }

        // text on screen
        if(this.textTimerCell > 0 && this.textTimerCell < 150) {
            this.textTimerCell += 1;
        } 
        else if(this.textTimerCell >= 150){
            // hide text
            this.cellar.interText.setVisible(false);
            this.textTimerCell = 0;
        }

        // show open state
        if(boltGot == 1 && unlocked == 2){
            this.cellOpen.setVisible(true);
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
        //if(Phaser.Input.Keyboard.JustDown(keySPACE) && this.cellerOpen == true){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            //this.menuBGM.stop();
            this.scene.start("transition1");
        };
    }
}