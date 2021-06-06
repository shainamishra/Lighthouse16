class CellarEast extends Phaser.Scene {
    constructor() {
        super("cellarEast");
    }

    preload() {
        // images
        this.load.image('cellar', './assets/puzzle2/cellar.png');
        this.load.image('cardHit', './assets/cards/hitbox.png');
        this.load.image('buttons', './assets/puzzle2/overlays/buttons.png');
        this.load.image('instruct', './assets/transitions/transitionInstructions.png');

        // buttonsOn
        this.load.image('red', './assets/puzzle2/overlays/buttonsOn/buttonRed.png');
        this.load.image('orange', './assets/puzzle2/overlays/buttonsOn/buttonOrange.png');
        this.load.image('yellow', './assets/puzzle2/overlays/buttonsOn/buttonYellow.png');
        this.load.image('green', './assets/puzzle2/overlays/buttonsOn/buttonLime.png');
        this.load.image('cyan', './assets/puzzle2/overlays/buttonsOn/buttonCyan.png');
        this.load.image('blue', './assets/puzzle2/overlays/buttonsOn/buttonBlue.png');
        this.load.image('purple', './assets/puzzle2/overlays/buttonsOn/buttonPurple.png');
        this.load.image('pink', './assets/puzzle2/overlays/buttonsOn/buttonPink.png');
        this.load.image('buttonsOn', './assets/puzzle2/overlays/buttonsOn/buttonsOn.png');

        // audio
        this.load.audio('scratch1', './assets/sfx/scratch1.wav');
        this.load.audio('scratch2', './assets/sfx/scratch2.wav');
        this.load.audio('scratch3', './assets/sfx/scratch3.wav');
        this.load.audio('scratch4', './assets/sfx/Scratch4.wav');
        this.load.audio('scratch5', './assets/sfx/Scratch5.wav');
        this.load.audio('unlock', './assets/sfx/doorUnlock2.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'cellar').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.scratch1 = this.sound.add('scratch1', {volume: 0.75});
        this.scratch2 = this.sound.add('scratch2', {volume: 0.75});
        this.scratch3 = this.sound.add('scratch3', {volume: 0.75});
        this.scratch4 = this.sound.add('scratch4', {volume: 0.75});
        this.scratch5 = this.sound.add('scratch5', {volume: 0.75});
        this.unlock = this.sound.add('unlock', {volume: 3.50});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

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
        // pannel image
        this.pannel = this.add.image(640, 360, 'buttons');
        this.pannel.setDisplaySize(1280, 720);
        this.pannel.setVisible(true);
        
        // red
        this.red = this.add.sprite(250, 215, 'hitbox');
        this.red.setDisplaySize(50, 50);
        this.red.setInteractive({
            useHandCursor: true
        });
        this.red.setVisible(true); 

        // orange
        this.orange = this.add.sprite(365, 215, 'hitbox');
        this.orange.setDisplaySize(50, 50);
        this.orange.setInteractive({
            useHandCursor: true
        });
        this.orange.setVisible(true); 

        // yellow
        this.yellow = this.add.sprite(475, 215, 'hitbox');
        this.yellow.setDisplaySize(50, 50);
        this.yellow.setInteractive({
            useHandCursor: true
        });
        this.yellow.setVisible(true);

        // green
        this.green = this.add.sprite(582, 215, 'hitbox');
        this.green.setDisplaySize(50, 50);
        this.green.setInteractive({
            useHandCursor: true
        });
        this.green.setVisible(true); 

        // cyan
        this.cyan = this.add.sprite(698, 215, 'hitbox');
        this.cyan.setDisplaySize(50, 50);
        this.cyan.setInteractive({
            useHandCursor: true
        });
        this.cyan.setVisible(true);

        // blue
        this.blue = this.add.sprite(807, 215, 'hitbox');
        this.blue.setDisplaySize(50, 50);
        this.blue.setInteractive({
            useHandCursor: true
        });
        this.blue.setVisible(true); 

        // purple
        this.purple = this.add.sprite(917, 215, 'hitbox');
        this.purple.setDisplaySize(50, 50);
        this.purple.setInteractive({
            useHandCursor: true
        });
        this.purple.setVisible(true); 

        // pink
        this.pink = this.add.sprite(1029, 215, 'hitbox');
        this.pink.setDisplaySize(50, 50);
        this.pink.setInteractive({
            useHandCursor: true
        });
        this.pink.setVisible(true); 


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.key2Hot = this.add.sprite(460, 659, 'key2Hot');
        this.key2Hot.setDisplaySize(100, 100);
        this.key2Hot.setVisible(false);

        this.plateHot = this.add.sprite(560, 660, 'plateHot');
        this.plateHot.setDisplaySize(150, 150);
        this.plateHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'dark');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // buttonsOn
        // redOn
        this.redOn = this.add.image(640, 360, 'red');
        this.redOn.setDisplaySize(1280, 720);
        this.redOn.setVisible(false);
        // orangeOn
        this.orangeOn = this.add.image(640, 360, 'orange');
        this.orangeOn.setDisplaySize(1280, 720);
        this.orangeOn.setVisible(false);
        // yellowON
        this.yellowOn = this.add.image(640, 360, 'yellow');
        this.yellowOn.setDisplaySize(1280, 720);
        this.yellowOn.setVisible(false);
        // greenOn
        this.greenOn = this.add.image(640, 360, 'green');
        this.greenOn.setDisplaySize(1280, 720);
        this.greenOn.setVisible(false);
        // cyanOn
        this.cyanOn = this.add.image(640, 360, 'cyan');
        this.cyanOn.setDisplaySize(1280, 720);
        this.cyanOn.setVisible(false);
        // blueOn
        this.blueOn = this.add.image(640, 360, 'blue');
        this.blueOn.setDisplaySize(1280, 720);
        this.blueOn.setVisible(false);
        // purpleOn
        this.purpleOn = this.add.image(640, 360, 'purple');
        this.purpleOn.setDisplaySize(1280, 720);
        this.purpleOn.setVisible(false);
        // pinkOn
        this.pinkOn = this.add.image(640, 360, 'pink');
        this.pinkOn.setDisplaySize(1280, 720);
        this.pinkOn.setVisible(false);
        // buttonsOn
        this.buttonsOn = this.add.image(640, 360, 'buttonsOn');
        this.buttonsOn.setDisplaySize(1280, 720);
        this.buttonsOn.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.correctArr = ['cyan', 'yellow', 'cyan', 'pink', 'green'];
        this.inputArr = ['', '', '', '', ''];
        this.inputNum = 0;
        this.textTimerButton = 0;
        this.inside = false;
        this.correct = false;
        this.hotOn = true;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2e2d34).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2e2d34).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2e2d34).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2e2d34).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        // clicks help box: puts this scene to sleep (no updates), switches to cards
        this.help.on('pointerdown', (pointer) => {
            if(this.textTimerButton == 0){
                this.scene.switch("instructionScene");
                this.textTimerButton = 1;
            }
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // read buttons
        if(this.textTimerButton == 0){
            // red
            this.red.on('pointerdown', (pointer) => {
                this.redOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                this.scratch1.play();

                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'red';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // orange
            this.orange.on('pointerdown', (pointer) => {
                this.orangeOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                this.scratch3.play();
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'orange';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // yellow
            this.yellow.on('pointerdown', (pointer) => {
                this.yellowOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                this.scratch5.play();
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'yellow';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // green
            this.green.on('pointerdown', (pointer) => {
                this.greenOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                this.scratch2.play();
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'green';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // cyan
            this.cyan.on('pointerdown', (pointer) => {
                this.cyanOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                this.scratch1.play();
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'cyan';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // blue
            this.blue.on('pointerdown', (pointer) => {
                this.blueOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                this.scratch3.play();
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'blue';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // purple
            this.purple.on('pointerdown', (pointer) => {
                this.purpleOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                this.scratch5.play();
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'purple';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // pink
            this.pink.on('pointerdown', (pointer) => {
                this.pinkOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                this.scratch2.play();
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'pink';
                    this.inputNum += 1;
                    this.inside = true;
                    
                }
            });
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // check is button order is correct
        if(this.inputNum == 5){
            this.correct = this.checkButtons();

            if(this.correct == true){
                this.correct = true; 
                unlocked = 1;
                this.unlock.play();

                // buttons
                this.buttonsOn.setVisible(true);
                this.red.setVisible(false); 
                this.orange.setVisible(false); 
                this.yellow.setVisible(false); 
                this.green.setVisible(false); 
                this.cyan.setVisible(false); 
                this.blue.setVisible(false); 
                this.purple.setVisible(false); 
                this.pink.setVisible(false); 
            } else {
                this.inputArr = ['', '', '', '', ''];
                this.inputNum = 0;
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timer for all buttons
        if(this.textTimerButton > 0 && this.textTimerButton < 75) {
            this.textTimerButton += 1;
        } 
        else if(this.textTimerButton >= 75){
            // revert all buttons back to normal
            this.red.setVisible(true); 
            this.orange.setVisible(true); 
            this.yellow.setVisible(true); 
            this.green.setVisible(true); 
            this.cyan.setVisible(true); 
            this.blue.setVisible(true); 
            this.purple.setVisible(true); 
            this.pink.setVisible(true); 

            // turn buttons off
            this.redOn.setVisible(false); 
            this.orangeOn.setVisible(false); 
            this.yellowOn.setVisible(false); 
            this.greenOn.setVisible(false); 
            this.cyanOn.setVisible(false); 
            this.blueOn.setVisible(false); 
            this.purpleOn.setVisible(false); 
            this.pinkOn.setVisible(false); 

            this.textTimerButton = 0;
            this.inside = false;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // lights on or off
        if(lightState == 0){
            this.dark.setVisible(false);
        } else if (lightState == 1) {
            this.dark.setVisible(true);
        }

        if (disappear == 1){
            this.plateHot.setVisible(false);
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("cellarNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("cellarSouth");
        };
    }

    checkButtons(){
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // check is button order is correct
        if(this.inputNum == 5){
            for (var i = 0; i < 5; i++) {
                if(this.inputArr[i] != this.correctArr[i]){
                    // reset
                    return false;
                }
            }
            // move on to next level
            return true;
        }
    }

    // set all buttons to false
    hideButtons(){
        this.red.setVisible(false); 
        this.orange.setVisible(false); 
        this.yellow.setVisible(false); 
        this.green.setVisible(false); 
        this.cyan.setVisible(false); 
        this.blue.setVisible(false); 
        this.purple.setVisible(false); 
        this.pink.setVisible(false); 
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (deskKey == 1  && switchGot == 0){
                this.key2Hot.setVisible(true);
            }
            else if(switchGot== 1){
                this.key2Hot.setVisible(false);
            }

            if (switchGot == 1 && disappear ==0){
                this.plateHot.setVisible(true);
            }
            else if(disappear == 1){
                this.plateHot.setVisible(false);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.key2Hot.setVisible(false);
            this.plateHot.setVisible(false);
        }
    }
}    