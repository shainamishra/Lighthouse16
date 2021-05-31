class Scales extends Phaser.Scene {
    constructor() {
        super("lookoutScales");
    }

    preload(){
        // scales images
        this.load.image('scales_hole', './assets/puzzle4/scalesWindow/scalesHole.png');
        this.load.image('even', './assets/puzzle4/scalesWindow/scales_even.png');
        this.load.image('uneven', './assets/puzzle4/scalesWindow/scales_uneven.png');
        this.load.image('button', './assets/puzzle4/scalesWindow/weigh_button.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.scalesBG = this.add.tileSprite(0, 0, 1280, 720, 'scales_hole').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.itemTake = this.sound.add('itemtake', {volume: 0.5});

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // scales even
        this.even = this.add.image(640, 350, 'even');
        this.even.setDisplaySize(1280, 720);
        this.even.setVisible(true);
        // scales uneven
        this.uneven = this.add.image(640, 350, 'uneven');
        this.uneven.setDisplaySize(1280, 720);
        this.uneven.setVisible(false);
        // scales text
        this.uneven.interText = this.add.text(250, 650, 'The scales are unbalanced');
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
            useHandCursor: true
        });
        this.weigh.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // rocks
        // red
        this.red = this.add.image(200, 665, 'red');
        this.red.setDisplaySize(75, 75);
        this.red.setInteractive({
            useHandCursor: true
        });
        this.red.setVisible(false);
        // orange
        this.orange = this.add.sprite(335, 665, 'orange');
        this.orange.setDisplaySize(75, 75);
        this.orange.setInteractive({
            useHandCursor: true
        });
        this.orange.setVisible(false);
        // yellow
        this.yellow = this.add.sprite(465, 665, 'yellow');
        this.yellow.setDisplaySize(85, 85);
        this.yellow.setInteractive({
            useHandCursor: true
        });
        this.yellow.setVisible(false);
        // green
        this.green = this.add.sprite(595, 665, 'green');
        this.green.setDisplaySize(75, 75);
        this.green.setInteractive({
            useHandCursor: true
        });
        this.green.setVisible(false);
        // cyan
        this.cyan = this.add.sprite(725, 665, 'cyan');
        this.cyan.setDisplaySize(75, 75);
        this.cyan.setInteractive({
            useHandCursor: true
        });
        this.cyan.setVisible(false);
        // blue
        this.blue = this.add.sprite(860, 665, 'blue');
        this.blue.setDisplaySize(75, 75);
        this.blue.setInteractive({
            useHandCursor: true
        });
        this.blue.setVisible(false);
        // purple
        this.purple = this.add.sprite(1000, 665, 'purple');
        this.purple.setDisplaySize(75, 75);
        this.purple.setInteractive({
            useHandCursor: true
        });
        this.purple.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // close
        this.closeLook = this.add.sprite(50, 50, 'x');
        this.closeLook.setDisplaySize(50, 50);
        this.closeLook.setVisible(true);
        this.closeLook.setInteractive({
            useHandCursor: true
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;
        this.rocks = [this.red, this.yellow, this.orange, this.green, this.cyan, this.blue, this.purple]
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
                console.log(this.status)
                balanced = 1;
                this.uneven.interText.setVisible(true); 
                
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
            this.even.setVisible(false);
            this.uneven.setVisible(true);
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.stop("lookoutScales");
            this.scene.wake("lookoutWest");
        };
    }

    checkPosition(rock){
        this.posY = rock.y;
        this.posX = rock.x;

        if (this.posY < 500){
            console.log("active")
            if (this.posX < 560){
                console.log("left")
                return "left";
            }
            if (this.posX > 650){
                console.log("right")
                return "right";
            }
        }
        return "inactive";
    }
}