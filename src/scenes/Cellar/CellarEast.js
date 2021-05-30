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

        // audio
        this.load.audio('scratch2', './assets/sfx/scratch2.wav');
        // this.sound.play("scratch2");
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
        this.red.interText = this.add.text(80, 50, 'blood');
        this.red.interText.setFontSize(50);
        this.red.interText.setVisible(false); 

        // orange
        this.orange = this.add.sprite(365, 215, 'hitbox');
        this.orange.setDisplaySize(50, 50);
        this.orange.setInteractive({
            useHandCursor: true
        });
        this.orange.setVisible(true); 
        this.orange.interText = this.add.text(80, 100, 'fruity');
        this.orange.interText.setFontSize(50);
        this.orange.interText.setVisible(false); 

        // yellow
        this.yellow = this.add.sprite(475, 215, 'hitbox');
        this.yellow.setDisplaySize(50, 50);
        this.yellow.setInteractive({
            useHandCursor: true
        });
        this.yellow.setVisible(true); 
        this.yellow.interText = this.add.text(80, 150, 'S U N L I G H T');
        this.yellow.interText.setFontSize(50);
        this.yellow.interText.setVisible(false); 

        // green
        this.green = this.add.sprite(582, 215, 'hitbox');
        this.green.setDisplaySize(50, 50);
        this.green.setInteractive({
            useHandCursor: true
        });
        this.green.setVisible(true); 
        this.green.interText = this.add.text(80, 200, 'LIME');
        this.green.interText.setFontSize(50);
        this.green.interText.setVisible(false); 

        // cyan
        this.cyan = this.add.sprite(698, 215, 'hitbox');
        this.cyan.setDisplaySize(50, 50);
        this.cyan.setInteractive({
            useHandCursor: true
        });
        this.cyan.setVisible(true); 
        this.cyan.interText = this.add.text(80, 250, 'sus');
        this.cyan.interText.setFontSize(50);
        this.cyan.interText.setVisible(false); 

        // blue
        this.blue = this.add.sprite(807, 215, 'hitbox');
        this.blue.setDisplaySize(50, 50);
        this.blue.setInteractive({
            useHandCursor: true
        });
        this.blue.setVisible(true); 
        this.blue.interText = this.add.text(80, 300, 'doesnt occur naturally');
        this.blue.interText.setFontSize(50);
        this.blue.interText.setVisible(false); 

        // purple
        this.purple = this.add.sprite(917, 215, 'hitbox');
        this.purple.setDisplaySize(50, 50);
        this.purple.setInteractive({
            useHandCursor: true
        });
        this.purple.setVisible(true); 
        this.purple.interText = this.add.text(80, 350, 'eggplant');
        this.purple.interText.setFontSize(50);
        this.purple.interText.setVisible(false); 

        // pink
        this.pink = this.add.sprite(1029, 215, 'hitbox');
        this.pink.setDisplaySize(50, 50);
        this.pink.setInteractive({
            useHandCursor: true
        });
        this.pink.setVisible(true); 
        this.pink.interText = this.add.text(80, 400, 'womr on a string');
        this.pink.interText.setFontSize(50);
        this.pink.interText.setVisible(false); 


        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.key2Hot = this.add.sprite(460, 659, 'key2Hot');
        this.key2Hot.setDisplaySize(100, 100);
        this.key2Hot.setInteractive({
            useHandCursor: true
        });
        this.key2Hot.setVisible(false);

        this.plateHot = this.add.sprite(560, 660, 'plateHot');
        this.plateHot.setDisplaySize(150, 150);
        this.plateHot.setInteractive({
            useHandCursor: true
        });
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
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // read buttons
        if(this.textTimerButton == 0){
            // red
            this.red.on('pointerdown', (pointer) => {
                this.red.interText.setVisible(true);
                this.redOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;

                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'red';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // orange
            this.orange.on('pointerdown', (pointer) => {
                this.orange.interText.setVisible(true);
                this.orangeOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'orange';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // yellow
            this.yellow.on('pointerdown', (pointer) => {
                this.yellow.interText.setVisible(true);
                this.yellowOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'yellow';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // green
            this.green.on('pointerdown', (pointer) => {
                this.green.interText.setVisible(true);
                this.greenOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'green';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // cyan
            this.cyan.on('pointerdown', (pointer) => {
                this.cyan.interText.setVisible(true);
                this.cyanOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'cyan';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // blue
            this.blue.on('pointerdown', (pointer) => {
                this.blue.interText.setVisible(true);
                this.blueOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'blue';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // purple
            this.purple.on('pointerdown', (pointer) => {
                this.purple.interText.setVisible(true);
                this.purpleOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    this.inputArr[this.inputNum] = 'purple';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // pink
            this.pink.on('pointerdown', (pointer) => {
                this.pink.interText.setVisible(true);
                this.pinkOn.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
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
            for (var i = 0; i < 5; i++) {
                if(this.inputArr[i] != this.correctArr[i]){
                    // reset
                    this.inputArr = ['', '', '', '', ''];
                    this.inputNum = 0;
                }
                else{
                    // move on to next level
                    this.correct = true; 
                    unlocked = 1;
                }
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timer for all buttons
        if(this.textTimerButton > 0 && this.textTimerButton < 75) {
            this.textTimerButton += 1;
        } 
        else if(this.textTimerButton >= 75){
            // hide all text text
            this.red.interText.setVisible(false);
            this.orange.interText.setVisible(false);
            this.yellow.interText.setVisible(false);
            this.green.interText.setVisible(false);
            this.cyan.interText.setVisible(false);
            this.blue.interText.setVisible(false);
            this.purple.interText.setVisible(false);
            this.pink.interText.setVisible(false);

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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("cellarNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("cellarSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("cellarWest");
        };
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

            if (deskKey == 1){
                this.key2Hot.setVisible(true);
            }

            if (switchGot == 1){
                this.plateHot.setVisible(true);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.key2Hot.setVisible(false);
            this.plateHot.setVisible(false);
        }
    }
}    