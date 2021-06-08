class Password extends Phaser.Scene {
    constructor() {
        super("pwScene");
    }

    preload() {
        //load plugin
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true); 
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //background, X button, hint
        this.pwbg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 

        this.closePW = this.add.sprite(50, 50, 'x');
        this.closePW.setDisplaySize(50, 50);
        this.closePW.setInteractive({
            cursor: handPointer
        });

        this.hint = this.add.text(borderUISize + borderPadding * 20 -200, borderUISize + borderPadding * 2 + 100, 'Normally sweet, once we were a deadly treat.');
        this.hint.setFontSize(35);

        //text enter box
        //this.add.rectangle(330, 300, 600, 100, 0x808080).setOrigin(0,0);
        this.printText = this.add.text(400, 200, '', {
            fontSize: '25px',
        }).setOrigin(0.5).setFixedSize(100, 100);
        //enter text
        this.textInput = this.add.rexInputText(330, 300, 600, 100, {
            type: 'textarea',
            text: 'HEy',
            fontSize: '35px',
        })
        //     .setOrigin(0.5)
        //     .on('click', function (textInput) {
        //     console.log('On click');
        // })

        //this.printText.text = inputText.text;
        //enter the clown room? yes -> chantels room if no ->go back to instructions
        this.solved = this.add.text(borderUISize + borderPadding * 20 - 240, borderUISize + borderPadding * 2 + 150, '         You unlocked the clown room!\n It is recommended that you only proceed after\n         beating the game at least once.\n                   Proceed?');
        this.solved.setFontSize(35);
        this.solved.setAlpha(0);
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