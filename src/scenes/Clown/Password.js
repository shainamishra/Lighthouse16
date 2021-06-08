class Password extends Phaser.Scene {
    constructor() {
        super("pwScene");
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.bruhhh = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 

        this.closePW = this.add.sprite(50, 50, 'x');
        this.closePW.setDisplaySize(50, 50);
        this.closePW.setInteractive({
            cursor: handPointer
        });
        //text enter box
        this.add.rectangle(330, 300, 600, 100, 0x808080).setOrigin(0,0);

        this.hint = this.add.text(borderUISize + borderPadding * 20 -200, borderUISize + borderPadding * 2 + 100, 'Normally sweet, once we were a deadly treat.');
        this.hint.setFontSize(35);

        //add text: enter password, itll be found at the top of the tower .... something something reference humbug story book
        //enter the clown room? yes -> chantels room if no ->go back to instructions
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);

        this.textTimer = 0;
    }
    
    update() {
        if(this.textTimer == 0){
            this.closePW.on('pointerdown', () => {
                this.scene.stop("pwScene");
                this.scene.start("instructionScene");
            });
            this.textTimer = 1;
        }
    }
}