class Scales extends Phaser.Scene {
    constructor() {
        super("lookoutScales");
    }

    preload(){
        // scales images
        this.load.image('scales_hole', './assets/puzzle4/scalesWindow/scalesHole.png');
        this.load.image('even', './assets/puzzle4/scalesWindow/balanced.png');
        this.load.image('uneven', './assets/puzzle4/scalesWindow/rightHeavy.png');
        this.load.image('button', './assets/puzzle4/scalesWindow/weigh_button.png');
        this.load.image('instructScales', './assets/puzzle4/scalesWindow/scales_instructions.png');

        // audio
        this.load.audio('unlock', './assets/sfx/doorUnlock2.wav');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.scalesBG = this.add.tileSprite(0, 0, 1280, 720, 'scales_hole').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.unlock = this.sound.add('unlock', {volume: 0.75});
        this.wrong = this.sound.add('wrong', {volume: 3.0});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // instructions
        this.instruct = this.add.image(715, 390, 'instructScales');
        this.instruct.setDisplaySize(1180, 720);
        this.instruct.setVisible(true);

        // scales even
        this.even = this.add.image(640, 350, 'even');
        this.even.setDisplaySize(1280, 720);
        this.even.setVisible(false);
        // scales uneven
        this.uneven = this.add.image(640, 350, 'uneven');
        this.uneven.setDisplaySize(1280, 720);
        this.uneven.setVisible(true);
        // scales text
        this.uneven.interText = this.add.text(250, 650, 'The scales are balanced');
        this.uneven.interText.setFontSize(50);
        this.uneven.interText.setVisible(false); 

        // weigh button image
        this.weighIm = this.add.image(640, 350, 'button');
        this.weighIm.setDisplaySize(1280, 720);
        this.weighIm.setVisible(true);
        // weigh button hitbox
        this.weigh = this.add.image(605, 575, 'hitbox');
        this.weigh.setDisplaySize(75, 75);
        this.weigh.setInteractive({
            cursor: handPointer
        });
        this.weigh.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // rocks
        // red
        this.red = this.add.image(200, 665, 'redRock');
        this.red.setDisplaySize(75, 75);
        this.red.setInteractive({
            cursor: handPointer
        });
        this.red.setVisible(false);
        // orange
        this.orange = this.add.sprite(335, 665, 'orangeRock');
        this.orange.setDisplaySize(75, 75);
        this.orange.setInteractive({
            cursor: handPointer
        });
        this.orange.setVisible(false);
        // yellow
        this.yellow = this.add.sprite(465, 665, 'yellowRock');
        this.yellow.setDisplaySize(85, 85);
        this.yellow.setInteractive({
            cursor: handPointer
        });
        this.yellow.setVisible(false);
        // green
        this.green = this.add.sprite(595, 665, 'greenRock');
        this.green.setDisplaySize(75, 75);
        this.green.setInteractive({
            cursor: handPointer
        });
        this.green.setVisible(false);
        // cyan
        this.cyan = this.add.sprite(725, 665, 'cyanRock');
        this.cyan.setDisplaySize(75, 75);
        this.cyan.setInteractive({
            cursor: handPointer
        });
        this.cyan.setVisible(false);
        // blue
        this.blue = this.add.sprite(860, 665, 'blueRock');
        this.blue.setDisplaySize(75, 75);
        this.blue.setInteractive({
            cursor: handPointer
        });
        this.blue.setVisible(false);
        // purple
        this.purple = this.add.sprite(1000, 665, 'purpleRock');
        this.purple.setDisplaySize(75, 75);
        this.purple.setInteractive({
            cursor: handPointer
        });
        this.purple.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // close
        this.closeLook = this.add.sprite(50, 50, 'x');
        this.closeLook.setDisplaySize(50, 50);
        this.closeLook.setVisible(true);
        this.closeLook.setInteractive({
            cursor: handPointer
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;
        this.rocks = [this.red, this.yellow, this.orange, this.green, this.cyan, this.blue, this.purple];
        this.weight = [1, 1, 1, 4, 1, 5, 1];
        this.weightStatus = false;
        this.status = [];

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // go back to lookOut
        this.closeLook.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.scene.stop("lookoutScales");
                this.scene.wake("lookoutWest");
            }
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 150){
            // hide text
            this.textTimer = 0;
            this.uneven.interText.setVisible(false); 
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dragging
        this.input.setDraggable(this.red);
        this.input.setDraggable(this.orange);
        this.input.setDraggable(this.yellow);
        this.input.setDraggable(this.green);
        this.input.setDraggable(this.cyan);
        this.input.setDraggable(this.blue);
        this.input.setDraggable(this.purple);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // weigh button
        this.weigh.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.status = [];

                // check position
                for (var i = 0; i < 7; i++) {
                    this.status.push(this.checkPosition(this.rocks[i]));
                }
                
                this.weightStatus = this.checkWeight(this.status);

                if(this.weightStatus == true){
                    balanced = 1;
                    this.unlock.play();
                    this.uneven.interText.setVisible(true); 
                } else {
                    this.wrong.play();
                    this.rockReset();
                }
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if (weights == 1 && citrine == 1) {
            this.weigh.setVisible(true);
            this.red.setVisible(true);
            this.orange.setVisible(true);
            this.yellow.setVisible(true);
            this.green.setVisible(true);
            this.cyan.setVisible(true);
            this.blue.setVisible(true);
            this.purple.setVisible(true);
        }

        if(balanced == 1){
            this.even.setVisible(true);
            this.uneven.setVisible(false);
            this.weighIm.setVisible(false);
            this.weigh.setVisible(false);

            this.red.setVisible(false);
            this.orange.setVisible(false);
            this.yellow.setVisible(false);
            this.green.setVisible(false);
            this.cyan.setVisible(false);
            this.blue.setVisible(false);
            this.purple.setVisible(false);
        }
    }

    rockReset(){
        // red
        this.red.setPosition(200, 665);
        // orange
        this.orange.setPosition(335, 665);
        // yellow
        this.yellow.setPosition(465, 665);
        // green
        this.green.setPosition(595, 665);
        // cyan
        this.cyan.setPosition(725, 665);
        // blue
        this.blue.setPosition(860, 665);
        // purple
        this.purple.setPosition(1000, 665);
    }

    checkPosition(rock){
        this.posY = rock.y;
        this.posX = rock.x;

        if (this.posY < 500){
            if (this.posX < 560){
                return "left";
            }
            if (this.posX > 650){
                return "right";
            }
        }
        return "inactive";
    }

    checkWeight(arr1){
        this.left = 0;
        this.right = 0;
        
        for (var i = 0; i < 7; i++) {
            if(this.status[i] == "left"){
                this.left += this.weight[i];
            }else if(this.status[i] == "right"){
                this.right += this.weight[i];
            }
        }
        
        if((this.left == 4 && this.right == 10)){
            return true;
        }
        if((this.left == 10 && this.right == 4)){
            return true;
        }
        return false;
    }
}