class CellarSouth extends Phaser.Scene {
    constructor() {
        super("cellarSouth");
    }

    preload() {
        // images
        this.load.image('cellar', './assets/puzzle2/cellar.png');
        this.load.image('dark', './assets/puzzle2/overlays/lightsOff.png');
        this.load.image('lightOn', './assets/puzzle2/overlays/southLight.png');
        this.load.image('lightOff', './assets/puzzle2/overlays/southDark.png');
        this.load.image('plate', './assets/puzzle2/overlays/southSwitch.png');
        this.load.image('switchOn', './assets/puzzle2/overlays/southSwitchOn.png');
        this.load.image('switchOff', './assets/puzzle2/overlays/southSwitchOff.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'cellar').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
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
        // objects
        // lights on
        this.lightOn = this.add.image(640, 360, 'lightOn');
        this.lightOn.setDisplaySize(1280, 720);
        this.lightOn.setVisible(true);
        // lights off
        this.lightOff = this.add.image(640, 360, 'lightOff');
        this.lightOff.setDisplaySize(1280, 720);
        this.lightOff.setVisible(false);

        // switch hitbox
        this.switch = this.add.sprite(940, 340, 'hitbox1');
        this.switch.setDisplaySize(60, 105);
        this.switch.setInteractive({
            useHandCursor: true
        });
        this.switch.interText = this.add.text(490, 290, 'The switch\nis missing');
        this.switch.interText.setFontSize(50);
        this.switch.interText.setVisible(false); 
        // switch plate
        this.plate = this.add.image(640, 360, 'plate');
        this.plate.setDisplaySize(1280, 720);
        this.plate.setVisible(true);
        // switchOn
        this.switchOn = this.add.image(640, 360, 'switchOn');
        this.switchOn.setDisplaySize(1280, 720);
        this.switchOn.setVisible(false);
        this.switchOn.interText = this.add.text(430, 290, 'You turned the\n  lights off');
        this.switchOn.interText.setFontSize(50);
        this.switchOn.interText.setVisible(false);
        // switchOff
        this.switchOff = this.add.image(640, 360, 'switchOff');
        this.switchOff.setDisplaySize(1280, 720);
        this.switchOff.setVisible(false);
        this.switchOff.interText = this.add.text(430, 290, 'You turned the\n  lights on');
        this.switchOff.interText.setFontSize(50);
        this.switchOff.interText.setVisible(false);

        // dark
        this.dark = this.add.image(640, 360, 'dark');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimerSwitch = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x0c141c).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("cellarEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("cellarWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("cellarNorth");
        };

        // switchGot
        if (switchGot == 1){
            this.switchOn.setVisible(true);
        }
        
        // switch text
        // if cellar text is not on screen 
        if(this.textTimerSwitch == 0){
            // if click on cellar
            if(switchGot == 0){
                this.switch.on('pointerdown', (pointer) => {
                    this.switch.interText.setVisible(true);
                    this.textTimerSwitch = 1;
                });
            }
            else if(switchGot == 1){
                this.switch.on('pointerdown', (pointer) => {
                    // turn lights from on to off
                    if(lightState == 0 && this.textTimerSwitch == 0){
                        this.switchOn.setVisible(false);
                        this.switchOff.setVisible(true);
                        this.lightOn.setVisible(false);
                        this.lightOff.setVisible(true);
                        this.dark.setVisible(true);

                        this.switchOn.interText.setVisible(true);
                        this.switchOff.interText.setVisible(false);

                        lightState = 1;
                        this.textTimerSwitch = 1;
                    }
                    else if(lightState == 1 && this.textTimerSwitch == 0)
                    {
                        // turn lights from off to on
                        this.switchOn.setVisible(true);
                        this.switchOff.setVisible(false);
                        this.lightOn.setVisible(true);
                        this.lightOff.setVisible(false);
                        this.dark.setVisible(false);

                        this.switchOn.interText.setVisible(false);
                        this.switchOff.interText.setVisible(true);

                        lightState = 0;
                        this.textTimerSwitch = 1;
                    }
                    //this.cellOpen.setVisible(true);
                    //this.cellar.interText.setVisible(true);
                    //this.textTimerSwitch = 1;
                    //this.cellerOpen = true;
                    //unlocked = 2;
                });
            }
        }

        // text on screen
        if(this.textTimerSwitch > 0 && this.textTimerSwitch < 150) {
            this.textTimerSwitch += 1;
        } 
        else if(this.textTimerSwitch >= 150){
            // hide text
            this.switch.interText.setVisible(false);
            this.switchOn.interText.setVisible(false);
            this.switchOff.interText.setVisible(false);
            this.textTimerSwitch = 0;
        }

        // end states

        // lights on or off
        if(lightState == 0){
            this.dark.setVisible(false);
            this.lightOn.setVisible(true);
            this.lightOff.setVisible(false);
            this.switchOn.setVisible(true);
            this.switchOff.setVisible(false);

            if(switchGot == 0){
                this.switchOn.setVisible(false);
                this.switchOff.setVisible(false);
            }
        } else if (lightState == 1) {
            this.dark.setVisible(true);
            this.lightOn.setVisible(false);
            this.lightOff.setVisible(true);
            this.switchOn.setVisible(false);
            this.switchOff.setVisible(true);
        }
    }
}    