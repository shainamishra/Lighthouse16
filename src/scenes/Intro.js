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
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 
        this.ione = this.add.sprite(300,200, 'hitbox');
        this.ione.intertext = this.add.text(borderUISize + borderPadding * 20 -340, borderUISize + borderPadding * 2 + 100, '        As I approached the island\nI glanced down at the strange wooden box\n    the old fortune teller had given me. ');
        this.ione.intertext.setFontSize(50);
        this.ione.intertext.setVisible(true);
       
        this.itwo = this.add.sprite(300,200, 'hitbox');
        this.itwo.intertext = this.add.text(borderUISize + borderPadding * 20 -320, borderUISize + borderPadding * 2 + 100, '   Inside are layers of wooden boards\n   wrapped in velvet that are designed\n            to hold tarot cards.');
        this.itwo.intertext.setFontSize(50);
        this.itwo.intertext.setVisible(false);

        this.ithree = this.add.sprite(300,200, 'hitbox');
        this.ithree.intertext = this.add.text(borderUISize + borderPadding * 20 -320, borderUISize + borderPadding * 2 + 100, '      The fortune teller gave me\n  a spread of five during our session.\n      It sits at the topmost layer.');
        this.ithree.intertext.setFontSize(50);
        this.ithree.intertext.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text fades in n out and when it gets to the end go to island north
        //text in the corner: press space to skip faster?

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // change scene
        this.input.keyboard.on('keydown-SPACE', () => {
			this.sound.play("CrashingWaves"); 
            this.scene.start("instructionScene"); 
		});
        this.introttexttimer = 0;
    }

    update(){
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //i guess if the player smashes the spacebar add time to the timer so it goes by faster?
        if(this.introttexttimer == 0 ){

            this.introttexttimer +=1;
        }
        else if(this.introttexttimer > 0 && this.introttexttimer < 150){
            this.introttexttimer +=1;
        }
        else if(this.introttexttimer == 150){
            this.ione.intertext.setVisible(false);
            this.itwo.intertext.setVisible(true);
            this.introttexttimer +=1;
        }
        else if (this.introttexttimer > 150 && this.introttexttimer < 300){
            this.introttexttimer +=1;
        }
        else if(this.introttexttimer == 300){
            this.itwo.intertext.setVisible(false);
            this.ithree.intertext.setVisible(true);
            this.introttexttimer +=1;
        } 
        else if (this.introttexttimer > 300 && this.introttexttimer< 450){
            this.introttexttimer +=1;
        }
        else if(this.introttexttimer == 450){
            this.ithree.intertext.setVisible(false);
            this.introttexttimer +=1;
        } 

       

    }
}