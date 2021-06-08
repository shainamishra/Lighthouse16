class Instruction extends Phaser.Scene {
    constructor() {
        super("instructionScene");
    }
    
    preload() {
        // images
        this.load.image('instructions', './assets/instructions.png');
        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'instructions').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // change scenes
        this.input.keyboard.on('keydown-SPACE', () => {
            if(level == 0){
                this.sound.play("CrashingWaves");
                this.scene.start("spread1"); 
            }
		});

        this.clownery = this.add.sprite(345, 345, 'hitbox');
        this.clownery.setDisplaySize(50,50);
        this.clownery.setInteractive({
            cursor: handPointer
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // close
        this.closeInven = this.add.sprite(50, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(false);
        this.closeInven.setInteractive({
            cursor: handPointer
        });
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);

        this.textTimer = 0;
    }

    update(){
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // "x" to close inventory
        if(level > 0 && this.textTimer == 0){
            this.closeInven.setVisible(true);
            this.closeInven.on('pointerdown', () => {
                this.textTimer = 1;
                this.scene.stop("instructionScene");
                this.scene.wake(prevScene);
            });
        }

        this.clownery.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                console.log("clown")
                //this.scene.start("pwScene");
            }
        });

        // text on screen
        if(this.textTimer > 0 && this.textTimer < 50) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 50){
            this.textTimer = 0;
        }
    }
}