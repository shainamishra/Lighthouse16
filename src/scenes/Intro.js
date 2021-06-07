class Intro extends Phaser.Scene {
    constructor() {
        super("Intro");
    }
    
    preload() {
        // images
        this.load.image('blkbg', './assets/blkbg.png');
        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        // place tile sprites
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 
        this.ione = this.add.sprite(300,360, 'hitbox');
        this.ione.intertext = this.add.text(borderUISize + borderPadding * 20 -340, borderUISize + borderPadding * 2 + 200, '        As I approached the island,\nI glanced down at the strange wooden box\n    the old fortune teller had given me. ');
        this.ione.intertext.setFontSize(50);
        this.ione.intertext.setAlpha(1);
       
        this.itwo = this.add.sprite(300,360, 'hitbox');
        this.itwo.intertext = this.add.text(borderUISize + borderPadding * 20 -320, borderUISize + borderPadding * 2 + 200, '   Inside are layers of wooden boards\n   wrapped in velvet that are designed\n            to hold tarot cards.');
        this.itwo.intertext.setFontSize(50);
        this.itwo.intertext.setAlpha(0);

        this.ithree = this.add.sprite(300,360, 'hitbox');
        this.ithree.intertext = this.add.text(borderUISize + borderPadding * 20 -320, borderUISize + borderPadding * 2 + 200, '      The fortune teller gave me\n  a spread of five during our session.\n      It sits at the topmost layer.');
        this.ithree.intertext.setFontSize(50);
        this.ithree.intertext.setAlpha(0);

        this.ifour = this.add.sprite(300,360, 'hitbox');
        this.ifour.intertext = this.add.text(borderUISize + borderPadding * 20 -300, borderUISize + borderPadding * 2 + 200, '        She told me it would be\n filled if I ascended the lighthouse.\nWhy I was meant to fill it or how I am\n  supposed to do it, I do not know.');
        this.ifour.intertext.setFontSize(50);
        this.ifour.intertext.setAlpha(0);

        this.ifive = this.add.sprite(300,360, 'hitbox');
        this.ifive.intertext = this.add.text(borderUISize + borderPadding * 20 -350, borderUISize + borderPadding * 2 + 200, '         She simply assured me that\nthe cards would manifest themselves to me.');
        this.ifive.intertext.setFontSize(50);
        this.ifive.intertext.setAlpha(0);

        this.isix = this.add.sprite(300,360, 'hitbox');
        this.isix.intertext = this.add.text(borderUISize + borderPadding * 20 -350, borderUISize + borderPadding * 2 + 200, '   At first I was put off by the request\nto approach this abandoned post, but ever\n since our meeting I’ve been drawn to it.');
        this.isix.intertext.setFontSize(50);
        this.isix.intertext.setAlpha(0);
        
        this.iseven = this.add.sprite(300,360, 'hitbox');
        this.iseven.intertext = this.add.text(borderUISize + borderPadding * 20 -350, borderUISize + borderPadding * 2 + 200, '      I can’t get it out of my head.');
        this.iseven.intertext.setFontSize(50);
        this.iseven.intertext.setAlpha(0);

        this.ieight = this.add.sprite(300,360, 'hitbox');
        this.ieight.intertext = this.add.text(borderUISize + borderPadding * 20 -350, borderUISize + borderPadding * 2 + 200, '      And so to settle this, I arrive.');
        this.ieight.intertext.setFontSize(50);
        this.ieight.intertext.setAlpha(0);
        
        this.spaceText = this.add.text(borderUISize + borderPadding * 30, borderUISize + borderPadding * 2 + 600, 'Press space to continue');
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////

        //tween set up 
        this.textList = [this.ione.intertext, this.itwo.intertext, this.ithree.intertext, this.ifour.intertext, this.ifive.intertext, this.isix.intertext, this.iseven.intertext, this.ieight.intertext];

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        prevText = this.textList[0];
        nextText = this.textList[1];

        this.tweenIn = this.tweens.add({
            targets: prevText,
            alpha: {from: 0, to: 1},
            ease: 'Linear',
            duration: 1000,
        }); 
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            if (!this.tweenIn.isPlaying()){               
            this.tweenOut = this.tweens.add({
                targets: prevText,
                alpha: {from: 1, to: 0},
                ease: 'Linear',
                duration: 1000,
            });
            this.tweenIn = this.tweens.add({
                targets: nextText,
                alpha: {from: 0, to: 1},
                ease: 'Linear',
                duration: 1000,
                delay: 1200,
            });
            this.tweenIn.on('complete', () => {
                this.textList.shift();
                prevText = this.textList[0];
                nextText = this.textList[1];
            });
            }
            else if(this.textList.length == 1){
                this.sound.play("CrashingWaves");
                this.scene.start("instructionScene"); 
            }
        }
    }
}