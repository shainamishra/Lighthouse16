class Win extends Phaser.Scene {
    constructor() {
        super("endWin");
    }

    preload(){
        // images

        // audio
        this.load.audio('end', './assets/sfx/the_16th_card.wav');
    }

    create() {
        //music
        this.endBGM = this.sound.add('end', {volume: 0.2, loop: true});
        this.endBGM.play();

        // place tile sprites (TAKEN FROM INTRO U GOTTA CHANGE IT)
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 
        this.ione = this.add.sprite(300,360, 'hitbox');
        this.ione.intertext = this.add.text(borderUISize + borderPadding * 20 -340, borderUISize + borderPadding * 2 + 200, '        As I approached the island,\nI glanced down at the strange wooden box\n    the old fortune teller had given me. ');
        this.ione.intertext.setFontSize(50);
        this.ione.intertext.setAlpha(1);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);

        //tween set up
        this.prevText = this.ione.intertext;
        this.nextText = this.itwo.intertext;

        this.tweenIn = this.tweens.add({
            targets: this.ione.intertext,
            alpha: {from: 0, to: 1},
            ease: 'Linear',
            duration: 1000,
        });

        this.introtexttimer = 0;
    }
    
    update() {
        //yo this is from the intro it only works til the fifth one i think but anyway the frame work for fading text in n out and the timer is here..........
        if(this.introtexttimer == 0 ){
            this.introtexttimer +=1;
        }
        else if(this.introtexttimer > 0 && this.introtexttimer < 400){
            this.introtexttimer +=1;
        }
        //fade out prev
        else if(this.introtexttimer == 400){
            this.tweenOut = this.tweens.add({
                targets: this.prevText,
                alpha: {from: 1, to: 0},
                ease: 'Linear',
                duration: 1000,
            });
            this.introtexttimer +=1;
        }
        //fade in next
        else if (this.prevText.alpha == 0 && this.introtexttimer == 401){
            this.tweenIn = this.tweens.add({
                targets: this.nextText,
                alpha: {from: 0, to: 1},
                ease: 'Linear',
                duration: 1000,
            });
            this.introtexttimer +=1;
        }
        //add time
        else if (this.introtexttimer > 401 && this.introtexttimer < 802){
            this.introtexttimer +=1;

        }
        //fade out
        else if (this.prevText.alpha == 0 && this.introtexttimer == 802){
            this.prevText = this.itwo.intertext;
            this.tweenOut = this.tweens.add({
                targets: this.prevText,
                alpha: {from: 1, to: 0},
                ease: 'Linear',
                duration: 1000,
            });
            this.introtexttimer +=1;
        }
        //fade in
        else if(this.prevText.alpha == 0 && this.introtexttimer == 803){
            this.nextText = this.ithree.intertext;
            this.tweenIn = this.tweens.add({
                targets: this.nextText,
                alpha: {from: 0, to: 1},
                ease: 'Linear',
                duration: 1000,
            });
            this.nextText = this.ifour.intertext;
            this.introtexttimer +=1;
            
        } 
        //add time
        else if (this.introtexttimer > 803 && this.introtexttimer < 1204){
            this.introtexttimer +=1;

        }
        //fade out
        else if (this.prevText.alpha == 0 && this.introtexttimer == 1204){
            this.prevText = this.ithree.intertext;
            this.tweenOut = this.tweens.add({
                targets: this.prevText,
                alpha: {from: 1, to: 0},
                ease: 'Linear',
                duration: 1000,
            });
            this.introtexttimer +=1;
        }
        //fade in
        else if(this.prevText.alpha == 0 && this.introtexttimer == 1205){
            this.nextText = this.ifour.intertext;
            this.tweenIn = this.tweens.add({
                targets: this.nextText,
                alpha: {from: 0, to: 1},
                ease: 'Linear',
                duration: 1000,
            });
            this.nextText = this.ifive.intertext;
            this.introtexttimer +=1;  
        }
        //add time
        else if (this.introtexttimer > 1206 && this.introtexttimer < 1607){
            this.introtexttimer +=1;

        }
        //fade out
        else if (this.prevText.alpha == 0 && this.introtexttimer == 1607){
            this.prevText = this.ifive.intertext;
            this.tweenOut = this.tweens.add({
                targets: this.prevText,
                alpha: {from: 1, to: 0},
                ease: 'Linear',
                duration: 1000,
            });
            this.introtexttimer +=1;
        }
        //fade in
        else if(this.prevText.alpha == 0 && this.introtexttimer == 1608){
            this.nextText = this.isix.intertext;
            this.tweenIn = this.tweens.add({
                targets: this.nextText,
                alpha: {from: 0, to: 1},
                ease: 'Linear',
                duration: 1000,
            });
            this.nextText = this.iseven.intertext;
            this.introtexttimer +=1;  
        }
        //add time
        else if (this.introtexttimer > 1608 && this.introtexttimer < 2009){
            this.introtexttimer +=1;

        }
        //fade out
        else if (this.prevText.alpha == 0 && this.introtexttimer == 2009){
            this.prevText = this.ithree.intertext;
            this.tweenOut = this.tweens.add({
                targets: this.prevText,
                alpha: {from: 1, to: 0},
                ease: 'Linear',
                duration: 1000,
            });
            this.introtexttimer +=1;
        }
        //fade in
        else if(this.prevText.alpha == 0 && this.introtexttimer == 2010){
            this.nextText = this.ifour.intertext;
            this.tweenIn = this.tweens.add({
                targets: this.nextText,
                alpha: {from: 0, to: 1},
                ease: 'Linear',
                duration: 1000,
            });
            this.nextText = this.ifive.intertext;
            this.introtexttimer +=1;  
        }
        //add time
        else if (this.introtexttimer > 2010 && this.introtexttimer < 2311){
            this.introtexttimer +=1;

        }
        //fade out
        else if (this.prevText.alpha == 0 && this.introtexttimer == 2311){
            this.prevText = this.ithree.intertext;
            this.tweenOut = this.tweens.add({
                targets: this.prevText,
                alpha: {from: 1, to: 0},
                ease: 'Linear',
                duration: 1000,
            });
            this.introtexttimer +=1;
        }
        else if (this.introtexttimer == 2312){
            this.scene.start("instructionScene"); 
        }
        
    

    }
}