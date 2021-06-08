class Password extends Phaser.Scene {
    constructor() {
        super("pwScene");
    }

    preload() {
        //load plugin
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true); 
        this.div = this.add.dom(0, 0).createElement('div');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //game.config.dom.createContainer = false;
        console.log(game);
        console.log(this.div);
        //background, X button, hint
        this.pwbg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 

        this.closePW = this.add.sprite(50, 50, 'x');
        this.closePW.setDisplaySize(50, 50);
        this.closePW.setInteractive({
            cursor: handPointer
        });
        
        this.hint = this.add.text(borderUISize + borderPadding * 20 -200, borderUISize + borderPadding * 2 + 100, 'Normally sweet, once we were a deadly treat.'); //should we also include a hint that says "the answer lies at the top of the tower"?
        this.hint.setFontSize(35);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //text entry box
        this.entryBox = this.add.rectangle(330, 300, 600, 100, 0x808080).setOrigin(0,0);

        //enter text (x, y, width, height, config)
        this.inputText = this.add.rexInputText(350, 330, 620, 100, {
            type: 'textarea',
            text: '',
            maxLength: '28',
            fontSize: '35px',
        })
        this.inputText.resize(550, 100);
        this.inputText.setOrigin(0, 0);
        
        this.add.existing(this.inputText);

        //correct answer text
        this.solved = this.add.text(borderUISize + borderPadding * 20 - 240, borderUISize + borderPadding * 2 + 150, '         You unlocked the clown room!\n It is recommended that you only enter AFTER\n         beating the game at least once.\n\n            To proceed, press space.');
        this.solved.setFontSize(35);
        this.solved.setAlpha(0);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define key and var
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
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

        if(this.inputText.text == 'humbugs' && Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.time.delayedCall(200, () => {
                //play correct sfx
                this.hint.setAlpha(0);
                this.inputText.setVisible(false);
                this.entryBox.setAlpha(0);
                this.solved.setAlpha(1);
            });
        } else if(this.inputText.text.length == 28 || this.inputText.text != 'humbugs' && Phaser.Input.Keyboard.JustDown(keyENTER)){
            //play wrong sfx
            this.inputText.text = '';
        }

        if(this.solved.alpha == 1 && Phaser.Input.Keyboard.JustDown(keySPACE)){
            //stop whatever music is playing
            this.scene.stop("pwScene");
            this.scene.start("clownNorth");
        }
    }
}