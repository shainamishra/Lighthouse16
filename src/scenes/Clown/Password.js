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
        
        this.hint = this.add.text(borderUISize + borderPadding * 20 -200, borderUISize + borderPadding * 2 + 100, 'Normally sweet, once we were a deadly treat.'); //should we also include a hint that says "the answer lies at the top of the tower"?
        this.hint.setFontSize(35);

        //text entry box
        this.add.rectangle(330, 300, 600, 100, 0x808080).setOrigin(0,0);

        //enter text (x, y, width, height, config)
        this.inputText = this.add.rexInputText(350, 330, 600, 100, {
            type: 'textarea',
            text: 'here',
            fontSize: '35px',
        })
        this.inputText.resize(550, 100);
        this.inputText.setOrigin(0, 0);
        this.inputText.on('click', () => {
                console.log('On click');
            });
        
        this.add.existing(this.inputText);

        //enter the clown room? yes -> chantels room if no -> go back to instructions
        this.solved = this.add.text(borderUISize + borderPadding * 20 - 240, borderUISize + borderPadding * 2 + 150, '         You unlocked the clown room!\n It is recommended that you only enter after\n         beating the game at least once.\n\n            To proceed, press space.');
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