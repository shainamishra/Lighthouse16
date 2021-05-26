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
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'cellar').setOrigin(0, 0); 

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
        this.pink.interText = this.add.text(80, 400, 'pink');
        this.pink.interText.setFontSize(50);
        this.pink.interText.setVisible(false); 

        // dark
        this.dark = this.add.image(640, 360, 'dark');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.correctArr = ['cyan', 'yellow', 'cyan', 'pink', 'green'];
        this.inputArr = ['', '', '', '', ''];
        this.inputNum = 0;
        this.textTimerButton = 0;
        this.inside = false;
        this.correct = false;

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
        // read buttons
        if(this.textTimerButton == 0){
            // red
            this.red.on('pointerdown', (pointer) => {
                this.red.interText.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;

                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    console.log('red');
                    this.inputArr[this.inputNum] = 'red';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // orange
            this.orange.on('pointerdown', (pointer) => {
                this.orange.interText.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    console.log('red');
                    this.inputArr[this.inputNum] = 'orange';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // yellow
            this.yellow.on('pointerdown', (pointer) => {
                this.yellow.interText.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    console.log('yellow');
                    this.inputArr[this.inputNum] = 'yellow';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // green
            this.green.on('pointerdown', (pointer) => {
                this.green.interText.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    console.log('green');
                    this.inputArr[this.inputNum] = 'green';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // cyan
            this.cyan.on('pointerdown', (pointer) => {
                this.cyan.interText.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    console.log('cyan');
                    this.inputArr[this.inputNum] = 'cyan';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // blue
            this.blue.on('pointerdown', (pointer) => {
                this.blue.interText.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    console.log('blue');
                    this.inputArr[this.inputNum] = 'blue';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // purple
            this.purple.on('pointerdown', (pointer) => {
                this.purple.interText.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    console.log('purple');
                    this.inputArr[this.inputNum] = 'purple';
                    this.inputNum += 1;
                    this.inside = true;
                }
            });

            // pink
            this.pink.on('pointerdown', (pointer) => {
                this.pink.interText.setVisible(true);
                this.hideButtons();
                this.textTimerButton = 1;
                
                if(this.inputArr[this.inputNum] == '' && this.inside == false){
                    console.log('pink');
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
                    console.log('fuck')
                    this.inputArr = ['', '', '', '', ''];
                    this.inputNum = 0;
                }
                else{
                    console.log('pog')
                    this.correct = true;
                    // move on to next level
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
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            //if(this.correct == true){
                this.scene.start("spread3");
            //}
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
}    