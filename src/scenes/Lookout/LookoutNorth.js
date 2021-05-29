class LookoutNorth extends Phaser.Scene {
    constructor() {
        super("lookoutNorth");
    }

    preload() {
        // images
        this.load.image('lookoutNorth', './assets/puzzle4/nQueenTemp.png');
        this.load.image('lightNorth', './assets/puzzle4/overlays/light_over_chart.png');

        //rocks
        this.load.image('purple', './assets/puzzle4/items/purple_rock.png');
        this.load.image('blue', './assets/puzzle4/items/blue_rock.png');
        this.load.image('cyan', './assets/puzzle4/items/cyan_rock.png');
        this.load.image('green', './assets/puzzle4/items/green_rock.png');
        this.load.image('orange', './assets/puzzle4/items/orange_rock.png');
        this.load.image('red', './assets/puzzle4/items/red_rock.png');

        this.load.image('hitbox', './assets/HitBox.png');
    }

    create() {

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'lookoutNorth').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // inventory box set up
        this.invent = this.add.sprite(60,60, 'inventory');
        this.invent.setDisplaySize(100, 100);
        this.invent.setInteractive({
            useHandCursor: true
        });

        prevScene = this.scene.key;
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // board hit boxes
        // row 1
        this.one1 = this.add.sprite(460, 135, 'hitbox');
        this.one1.setDisplaySize(60, 60);
        this.one1.setInteractive({
            useHandCursor: true
        });
        this.one1.setVisible(false);
        this.one2 = this.add.sprite(535, 135, 'hitbox');
        this.one2.setDisplaySize(60, 60);
        this.one2.setInteractive({
            useHandCursor: true
        });
        this.one2.setVisible(false);
        this.one3 = this.add.sprite(612, 135, 'hitbox');
        this.one3.setDisplaySize(60, 60);
        this.one3.setInteractive({
            useHandCursor: true
        });
        this.one3.setVisible(false);
        this.one4 = this.add.sprite(690, 135, 'hitbox');
        this.one4.setDisplaySize(60, 60);
        this.one4.setInteractive({
            useHandCursor: true
        });
        this.one4.setVisible(false);
        this.one5 = this.add.sprite(762, 135, 'hitbox');
        this.one5.setDisplaySize(60, 60);
        this.one5.setInteractive({
            useHandCursor: true
        });
        this.one5.setVisible(false);
        this.one6 = this.add.sprite(836, 135, 'hitbox');
        this.one6.setDisplaySize(60, 60);
        this.one6.setInteractive({
            useHandCursor: true
        });
        this.one6.setVisible(false);

        // row 2
        this.two1 = this.add.sprite(460, 205, 'hitbox');
        this.two1.setDisplaySize(60, 60);
        this.two1.setInteractive({
            useHandCursor: true
        });
        this.two1.setVisible(false);
        this.two2 = this.add.sprite(535, 205, 'hitbox');
        this.two2.setDisplaySize(60, 60);
        this.two2.setInteractive({
            useHandCursor: true
        });
        this.two2.setVisible(false);
        this.two3 = this.add.sprite(612, 205, 'hitbox');
        this.two3.setDisplaySize(60, 60);
        this.two3.setInteractive({
            useHandCursor: true
        });
        this.two3.setVisible(false);
        this.two4 = this.add.sprite(690, 205, 'hitbox');
        this.two4.setDisplaySize(60, 60);
        this.two4.setInteractive({
            useHandCursor: true
        });
        this.two4.setVisible(false);
        this.two5 = this.add.sprite(762, 205, 'hitbox');
        this.two5.setDisplaySize(60, 60);
        this.two5.setInteractive({
            useHandCursor: true
        });
        this.two5.setVisible(false);
        this.two6 = this.add.sprite(836, 205, 'hitbox');
        this.two6.setDisplaySize(60, 60);
        this.two6.setInteractive({
            useHandCursor: true
        });
        this.two6.setVisible(false);

        // three 
        this.three1 = this.add.sprite(460, 278, 'hitbox');
        this.three1.setDisplaySize(60, 60);
        this.three1.setInteractive({
            useHandCursor: true
        });
        this.three1.setVisible(false);
        this.three2 = this.add.sprite(535, 278, 'hitbox');
        this.three2.setDisplaySize(60, 60);
        this.three2.setInteractive({
            useHandCursor: true
        });
        this.three2.setVisible(false);
        this.three3 = this.add.sprite(612, 278, 'hitbox');
        this.three3.setDisplaySize(60, 60);
        this.three3.setInteractive({
            useHandCursor: true
        });
        this.three3.setVisible(false);
        this.three4 = this.add.sprite(690, 278, 'hitbox');
        this.three4.setDisplaySize(60, 60);
        this.three4.setInteractive({
            useHandCursor: true
        });
        this.three4.setVisible(false);
        this.three5 = this.add.sprite(762, 278, 'hitbox');
        this.three5.setDisplaySize(60, 60);
        this.three5.setInteractive({
            useHandCursor: true
        });
        this.three5.setVisible(false);
        this.three6 = this.add.sprite(836, 278, 'hitbox');
        this.three6.setDisplaySize(60, 60);
        this.three6.setInteractive({
            useHandCursor: true
        });
        this.three6.setVisible(false);

        // four 
        this.four1 = this.add.sprite(460, 355, 'hitbox');
        this.four1.setDisplaySize(60, 60);
        this.four1.setInteractive({
            useHandCursor: true
        });
        this.four1.setVisible(false);
        this.four2 = this.add.sprite(535, 355, 'hitbox');
        this.four2.setDisplaySize(60, 60);
        this.four2.setInteractive({
            useHandCursor: true
        });
        this.four2.setVisible(false);
        this.four3 = this.add.sprite(612, 355, 'hitbox');
        this.four3.setDisplaySize(60, 60);
        this.four3.setInteractive({
            useHandCursor: true
        });
        this.four3.setVisible(false);
        this.four4 = this.add.sprite(690, 355, 'hitbox');
        this.four4.setDisplaySize(60, 60);
        this.four4.setInteractive({
            useHandCursor: true
        });
        this.four4.setVisible(false);
        this.four5 = this.add.sprite(762, 355, 'hitbox');
        this.four5.setDisplaySize(60, 60);
        this.four5.setInteractive({
            useHandCursor: true
        });
        this.four5.setVisible(false);
        this.four6 = this.add.sprite(836, 355, 'hitbox');
        this.four6.setDisplaySize(60, 60);
        this.four6.setInteractive({
            useHandCursor: true
        });
        this.four6.setVisible(false);

        // five 
        this.five1 = this.add.sprite(460, 429, 'hitbox');
        this.five1.setDisplaySize(60, 60);
        this.five1.setInteractive({
            useHandCursor: true
        });
        this.five1.setVisible(false);
        this.five2 = this.add.sprite(535, 429, 'hitbox');
        this.five2.setDisplaySize(60, 60);
        this.five2.setInteractive({
            useHandCursor: true
        });
        this.five2.setVisible(false);
        this.five3 = this.add.sprite(612, 429, 'hitbox');
        this.five3.setDisplaySize(60, 60);
        this.five3.setInteractive({
            useHandCursor: true
        });
        this.five3.setVisible(false);
        this.five4 = this.add.sprite(690, 429, 'hitbox');
        this.five4.setDisplaySize(60, 60);
        this.five4.setInteractive({
            useHandCursor: true
        });
        this.five4.setVisible(false);
        this.five5 = this.add.sprite(762, 429, 'hitbox');
        this.five5.setDisplaySize(60, 60);
        this.five5.setInteractive({
            useHandCursor: true
        });
        this.five5.setVisible(false);
        this.five6 = this.add.sprite(836, 429, 'hitbox');
        this.five6.setDisplaySize(60, 60);
        this.five6.setInteractive({
            useHandCursor: true
        });
        this.five6.setVisible(false);

        // six 
        this.six1 = this.add.sprite(460, 500, 'hitbox');
        this.six1.setDisplaySize(60, 60);
        this.six1.setInteractive({
            useHandCursor: true
        });
        this.six1.setVisible(false);
        this.six2 = this.add.sprite(535, 500, 'hitbox');
        this.six2.setDisplaySize(60, 60);
        this.six2.setInteractive({
            useHandCursor: true
        });
        this.six2.setVisible(false);
        this.six3 = this.add.sprite(612, 500, 'hitbox');
        this.six3.setDisplaySize(60, 60);
        this.six3.setInteractive({
            useHandCursor: true
        });
        this.six3.setVisible(false);
        this.six4 = this.add.sprite(690, 500, 'hitbox');
        this.six4.setDisplaySize(60, 60);
        this.six4.setInteractive({
            useHandCursor: true
        });
        this.six4.setVisible(false);
        this.six5 = this.add.sprite(762, 500, 'hitbox');
        this.six5.setDisplaySize(60, 60);
        this.six5.setInteractive({
            useHandCursor: true
        });
        this.six5.setVisible(false);
        this.six6 = this.add.sprite(836, 500, 'hitbox');
        this.six6.setDisplaySize(60, 60);
        this.six6.setInteractive({
            useHandCursor: true
        });
        this.six6.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // light
        this.lightNorth = this.add.image(640, 360, 'lightNorth');
        this.lightNorth.setDisplaySize(1280, 720);
        this.lightNorth.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // hot bar 
        this.hotbar = this.add.image(640, 350, 'hotbar');
        this.hotbar.setDisplaySize(1280, 720);
        this.hotbar.setVisible(true);
 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // items
        this.ragHot= this.add.sprite(460, 660, 'ragHot');
        this.ragHot.setDisplaySize(50, 50);
        this.ragHot.setVisible(false);

        this.ropeHot = this.add.sprite(560, 660, 'ropeHot');
        this.ropeHot.setDisplaySize(50, 50);
        this.ropeHot.setVisible(false);

        this.citrineHot = this.add.sprite(660, 659, 'citrineHot');
        this.citrineHot.setDisplaySize(50, 50);
        this.citrineHot.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.hotOn = true;
        this.textTimerQueen = 0;
        this.state = false;
        this.correctArr1 = [2, 4, 6, 1, 3, 5];
        this.correctArr2 = [3, 6, 2, 5, 1, 4];
        this.correctArr2 = [4, 1, 5, 2, 6, 3];
        this.correctArr4 = [5, 3, 1, 6, 4, 2];
        this.inputArr = [0, 0, 0, 0, 0, 0];
        this.inputNum1 = false;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x8a8a8a).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x8a8a8a).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x8a8a8a).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x8a8a8a).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // update hotbar
        this.hotBarItems(this.hotOn);

        // update board
        this.boardOn(this.state);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // clicks inventory box: puts this scene to sleep (no updates), switches to cards
        this.invent.on('pointerdown', (pointer) => {
            this.scene.switch("cardBox");
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // click on row 1
        if(this.inputArr[0] == 0){
            console.log(this.inputArr[0])
            this.one1.on('pointerdown', (pointer) => {
                this.rockY(1, 1);
                this.purple.setVisible(true);
                this.inputArr[0] = 1;
                this.inputNum1 = true;
            });
            this.one2.on('pointerdown', (pointer) => {
                this.rockY(2, 1);
                this.purple.setVisible(true);
                this.inputArr[0] = 2;
            });
            this.one3.on('pointerdown', (pointer) => {
                this.rockY(3, 1);
                this.purple.setVisible(true);
                this.inputArr[0] = 3;
            });
            this.one4.on('pointerdown', (pointer) => {
                this.rockY(4, 1);
                this.purple.setVisible(true);
                this.inputArr[0] = 4;
            });
            this.one5.on('pointerdown', (pointer) => {
                this.rockY(5, 1);
                this.purple.setVisible(true);
                this.inputArr[0] = 5;
            });
            this.one6.on('pointerdown', (pointer) => {
                this.rockY(6, 1);
                this.purple.setVisible(true);
                this.inputArr[0] = 6;
            });
        }

        if(this.inputArr[1] == 0){
            // row2
            this.two1.on('pointerdown', (pointer) => {
                this.rockY(1, 2);
                this.blue.setVisible(true);
                this.inputArr[1] = 1;
            });
            this.two2.on('pointerdown', (pointer) => {
                this.rockY(2, 2);
                this.blue.setVisible(true);
                this.inputArr[1] = 2;
            });
            this.two3.on('pointerdown', (pointer) => {
                this.rockY(3, 2);
                this.blue.setVisible(true);
                this.inputArr[1] = 3;
            });
            this.two4.on('pointerdown', (pointer) => {
                this.rockY(4, 2);
                this.blue.setVisible(true);
                this.inputArr[1] = 4;
            });
            this.two5.on('pointerdown', (pointer) => {
                this.rockY(5, 2);
                this.blue.setVisible(true);
                this.inputArr[1] = 5;
            });
            this.two6.on('pointerdown', (pointer) => {
                this.rockY(6, 2);
                this.blue.setVisible(true);
                this.inputArr[1] = 6;
            });
        }

        if(this.inputArr[2] == 0){
            // row3
            this.three1.on('pointerdown', (pointer) => {
                this.rockY(1, 3);
                this.cyan.setVisible(true);
                this.inputArr[2] = 1;
            });
            this.three2.on('pointerdown', (pointer) => {
                this.rockY(2, 3);
                this.cyan.setVisible(true);
                this.inputArr[2] = 2;
            });
            this.three3.on('pointerdown', (pointer) => {
                this.rockY(3, 3);
                this.cyan.setVisible(true);
                this.inputArr[2] = 3;
            });
            this.three4.on('pointerdown', (pointer) => {
                this.rockY(4, 3);
                this.cyan.setVisible(true);
                this.inputArr[2] = 4;
            });
            this.three5.on('pointerdown', (pointer) => {
                this.rockY(5, 3);
                this.cyan.setVisible(true);
                this.inputArr[2] = 5;
            });
            this.three6.on('pointerdown', (pointer) => {
                this.rockY(6, 3);
                this.cyan.setVisible(true);
                this.inputArr[2] = 6;
            });
        }

        if(this.inputArr[3] == 0){
            // row4
            this.four1.on('pointerdown', (pointer) => {
                this.rockY(1, 4);
                this.green.setVisible(true);
                this.inputArr[3] = 1;
            });
            this.four2.on('pointerdown', (pointer) => {
                this.rockY(2, 4);
                this.green.setVisible(true);
                this.inputArr[3] = 2;
            });
            this.four3.on('pointerdown', (pointer) => {
                this.rockY(3, 4);
                this.green.setVisible(true);
                this.inputArr[3] = 3;
            });
            this.four4.on('pointerdown', (pointer) => {
                this.rockY(4, 4);
                this.green.setVisible(true);
                this.inputArr[3] = 4;
            });
            this.four5.on('pointerdown', (pointer) => {
                this.rockY(5, 4);
                this.green.setVisible(true);
                this.inputArr[3] = 5;
            });
            this.four6.on('pointerdown', (pointer) => {
                this.rockY(6, 4);
                this.green.setVisible(true);
                this.inputArr[3] = 6;
            });
        }

        if(this.inputArr[4] == 0){
            // row5
            this.five1.on('pointerdown', (pointer) => {
                this.rockY(1, 5);
                this.orange.setVisible(true);
                this.inputArr[4] = 1;
            });
            this.five2.on('pointerdown', (pointer) => {
                this.rockY(2, 5);
                this.orange.setVisible(true);
                this.inputArr[4] = 2;
            });
            this.five3.on('pointerdown', (pointer) => {
                this.rockY(3, 5);
                this.orange.setVisible(true);
                this.inputArr[4] = 3;
            });
            this.five4.on('pointerdown', (pointer) => {
                this.rockY(4, 5);
                this.orange.setVisible(true);
                this.inputArr[4] = 4;
            });
            this.five5.on('pointerdown', (pointer) => {
                this.rockY(5, 5);
                this.orange.setVisible(true);
                this.inputArr[4] = 5;
            });
            this.five6.on('pointerdown', (pointer) => {
                this.rockY(6, 5);
                this.orange.setVisible(true);
                this.inputArr[4] = 6;
            });
        }

        if(this.inputArr[5] == 0){
            // row6
            this.six1.on('pointerdown', (pointer) => {
                this.rockY(1, 6);
                this.red.setVisible(true);
                this.inputArr[5] = 1;
            });
            this.six2.on('pointerdown', (pointer) => {
                this.rockY(2, 6);
                this.red.setVisible(true);
                this.inputArr[5] = 2;
            });
            this.six3.on('pointerdown', (pointer) => {
                this.rockY(3, 6);
                this.red.setVisible(true);
                this.inputArr[5] = 3;
            });
            this.six4.on('pointerdown', (pointer) => {
                this.rockY(4, 6);
                this.red.setVisible(true);
                this.inputArr[5] = 4;
            });
            this.six5.on('pointerdown', (pointer) => {
                this.rockY(5, 6);
                this.red.setVisible(true);
                this.inputArr[5] = 5;
            });
            this.six6.on('pointerdown', (pointer) => {
                this.rockY(6, 6);
                this.red.setVisible(true);
                this.inputArr[5] = 6;
                console.log(this.inputArr)
            });
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(windowClean == 1 && this.textTimerQueen == 0){
            this.lightNorth.setVisible(true);
            this.state = true;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("lookoutWest");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("lookoutEast");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("lookoutSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start("spread5");
        };
    }
    
    hotBarItems(on){
        if(on == true){
            this.hotbar.setVisible(true);

            if (rag == 1){
                this.ragHot.setVisible(true);
            }

            if (rock == 1){
                this.citrineHot.setVisible(true);
            }

            if (rope == 1){
                this.ropeHot.setVisible(true);
            }
        }
        else {
            this.hotbar.setVisible(false);
            this.ragHot.setVisible(false);
            this.citrineHot.setVisible(false);
            this.ropeHot.setVisible(false);
        }
    }

    setRockPosition(x){
        if(x == 1){
            // purple
            this.setX = 460;
        } else if (x == 2){
            // blue
            this.setX = 535;
        } else if (x == 3){
            // cyan
            this.setX = 612;
        } else if (x == 4){
            // green
            this.setX = 690;
        } else if (x == 5){
            // orange
            this.setX = 762;
        } else if (x == 6){
            // red
            this.setX = 836;
        }
        return this.setX;
    }

    rockY(x, y){
        if(y == 1){
            // column 1
            this.setY = 135;
            this.setX = this.setRockPosition(x);
            this.purple = this.add.image(this.setX, this.setY, 'purple');
            this.purple.setDisplaySize(60, 60);
        } else if (y == 2){
            // column 2
            this.setY = 205;
            this.setX = this.setRockPosition(x);
            this.blue = this.add.image(this.setX, this.setY, 'blue');
            this.blue.setDisplaySize(60, 60);
        } else if (y == 3){
            // column 3
            this.setY = 278;
            this.setX = this.setRockPosition(x);
            this.cyan = this.add.image(this.setX, this.setY, 'cyan');
            this.cyan.setDisplaySize(60, 60);
        } else if (y == 4){
            // column 4
            this.setY = 355;
            this.setX = this.setRockPosition(x);
            this.green = this.add.image(this.setX, this.setY, 'green');
            this.green.setDisplaySize(60, 60);
        } else if (y == 5){
            // column 5
            this.setY = 429;
            this.setX = this.setRockPosition(x);
            this.orange = this.add.image(this.setX, this.setY, 'orange');
            this.orange.setDisplaySize(60, 60);
        } else if (y == 6){
            // column 6
            this.setY = 500;
            this.setX = this.setRockPosition(x);
            this.red = this.add.image(this.setX, this.setY, 'red');
            this.red.setDisplaySize(60, 60);
        }
        return this.setY;
    }
    
    boardOn(state){
        if(state == true){
            // row 1
            this.one1.setVisible(true);
            this.one2.setVisible(true);
            this.one3.setVisible(true);
            this.one4.setVisible(true);
            this.one4.setVisible(true);
            this.one5.setVisible(true);
            this.one6.setVisible(true);
            // row 2
            this.two1.setVisible(true);
            this.two2.setVisible(true);
            this.two3.setVisible(true);
            this.two4.setVisible(true);
            this.two4.setVisible(true);
            this.two5.setVisible(true);
            this.two6.setVisible(true);
            // row 3
            this.three1.setVisible(true);
            this.three2.setVisible(true);
            this.three3.setVisible(true);
            this.three4.setVisible(true);
            this.three4.setVisible(true);
            this.three5.setVisible(true);
            this.three6.setVisible(true);
            // row 4
            this.four1.setVisible(true);
            this.four2.setVisible(true);
            this.four3.setVisible(true);
            this.four4.setVisible(true);
            this.four4.setVisible(true);
            this.four5.setVisible(true);
            this.four6.setVisible(true);
            // row 5
            this.five1.setVisible(true);
            this.five2.setVisible(true);
            this.five3.setVisible(true);
            this.five4.setVisible(true);
            this.five4.setVisible(true);
            this.five5.setVisible(true);
            this.five6.setVisible(true);
            // row 6
            this.six1.setVisible(true);
            this.six2.setVisible(true);
            this.six3.setVisible(true);
            this.six4.setVisible(true);
            this.six4.setVisible(true);
            this.six5.setVisible(true);
            this.six6.setVisible(true);
        } else if(state == false){
            // row 1
            this.one1.setVisible(false);
            this.one2.setVisible(false);
            this.one3.setVisible(false);
            this.one4.setVisible(false);
            this.one4.setVisible(false);
            this.one5.setVisible(false);
            this.one6.setVisible(false);
            // row 2
            this.two1.setVisible(false);
            this.two2.setVisible(false);
            this.two3.setVisible(false);
            this.two4.setVisible(false);
            this.two4.setVisible(false);
            this.two5.setVisible(false);
            this.two6.setVisible(false);
            // row 3
            this.three1.setVisible(false);
            this.three2.setVisible(false);
            this.three3.setVisible(false);
            this.three4.setVisible(false);
            this.three4.setVisible(false);
            this.three5.setVisible(false);
            this.three6.setVisible(false);
            // row 4
            this.four1.setVisible(false);
            this.four2.setVisible(false);
            this.four3.setVisible(false);
            this.four4.setVisible(false);
            this.four4.setVisible(false);
            this.four5.setVisible(false);
            this.four6.setVisible(false);
            // row 5
            this.five1.setVisible(false);
            this.five2.setVisible(false);
            this.five3.setVisible(false);
            this.five4.setVisible(false);
            this.five4.setVisible(false);
            this.five5.setVisible(false);
            this.five6.setVisible(false);
            // row 6
            this.six1.setVisible(false);
            this.six2.setVisible(false);
            this.six3.setVisible(false);
            this.six4.setVisible(false);
            this.six4.setVisible(false);
            this.six5.setVisible(false);
            this.six6.setVisible(false);
        }
    }

    nQueensCheck(){

    }
}