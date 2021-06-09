class ClownEast extends Phaser.Scene {
    constructor() {
        super("clownEast");
    }

    preload(){
        this.load.image('rosie', './assets/clown/rosie.png');
        this.load.image('rosiePop', './assets/clown/canvas.png');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'rosie').setOrigin(0, 0);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // popup
        this.popup = this.add.sprite(640, 360, 'rosiePop');
        this.popup.setDisplaySize(1280, 720);
        this.popup.setVisible(false);

        // hitbox
        this.clown = this.add.sprite(910, 370, 'hitbox');
        this.clown.setDisplaySize(400, 600);
        this.clown.setVisible(true);
        this.clown.setInteractive({
            cursor: handPointer
        });

        // help
        this.help = this.add.sprite(1223, 60, 'hitbox2');
        this.help.setDisplaySize(85, 85);
        this.help.setInteractive({
            cursor: handPointer
        });
        
        // popup
        this.popup = this.add.sprite(640, 360, 'chantelPop');
        this.popup.setDisplaySize(1280, 720);
        this.popup.setVisible(false);

        // ex
        this.ex = this.add.sprite(50, 50, 'x');
        this.ex.setDisplaySize(50, 50);
        this.ex.setInteractive({
            cursor: handPointer
        });
        this.ex.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, 720, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 710, 1280, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, 1280, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(1270, 0, 10, 720, 0x2c2b45).setOrigin(0, 0);

        //define keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // variables
        this.textTimer = 0;
        this.close = false;
    }
    
    update() {
        // instructions
        // how to return to main menu from the clown room? leave instructions on how to leave as well :)
        this.help.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.help.setVisible(true);
                this.ex.setVisible(true);
                this.textTimer = 1;
            }
        });

        // x
        this.ex.on('pointerdown', () => {
            this.help.setVisible(false);
            this.popup.setVisible(false);
            this.help.setVisible(true);
            this.textTimer = 1;
            this.close = true;
        });

        // click clown
        this.clown.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.ex.setVisible(true);
                this.popup.setVisible(true);
                this.help.setVisible(false);
                this.close = false;
                this.textTimer = 1;
            }
        });

        if(this.close == true){
            this.ex.setVisible(false);
        }

        // text on screen
        if(this.textTimer > 0 && this.textTimer < 50) {
            this.textTimer += 1;
        } 
        else{
            this.textTimer = 0;
        }

        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("clownNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("clownSouth");
        };
    }
}