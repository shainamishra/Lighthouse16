class Win extends Phaser.Scene {
    constructor() {
        super("endWin");
    }

    preload(){
        // images
        this.load.image('blkbg', './assets/goodend.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        // audio
    }

    create() {
        // place tile sprites (TAKEN FROM INTRO U GOTTA CHANGE IT)
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 
        this.credits = this.add.sprite(300,360, 'hitbox');
        this.credits.intertext = this.add.text(borderUISize + borderPadding * 20 + 200, borderUISize + borderPadding * 2 -60, '                   Programming\n                      Shiana\n                      Daren\n\n                       Art\n                      Rose\n                     Chantel\n                     Shaina\n\n                      Music\n                      Rosie\n\n                       SFX\n                      Daren\n                      Rosie\n                      Shaina');
        this.credits.intertext.setFontSize(30);
        this.credits.intertext.setVisible(true);
        
        this.sourcethanks = this.add.sprite(300,360, 'hitbox');
        this.sourcethanks.intertext = this.add.text(borderUISize + borderPadding * 20 + 200, borderUISize + borderPadding * 2 + 30, 'Ocean sfx for island music\nsourced from freesound by Noted451\nhttps://freesound.org/people/Noted451/\nsounds/531015/\n\nRainbow fire info\nhttps://sciencenotes.org/how-to-make-\ncolored-fire/\n\nFishing advice :)\nhttps://freshwaterfishingadvice.com\n/salt-bait-fishing/');
        this.sourcethanks.intertext.setFontSize(30);
        this.sourcethanks.intertext.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);

        //tween set up




        this.wintexttimer = 0;
    }
    
    update() {
        //yo this is from the intro it only works til the fifth one i think but anyway the frame work for fading text in n out and the timer is here..........
        if(this.wintexttimer >= 0 && this.wintexttimer <500){
            this.wintexttimer +=1;

        }

        else if (this.wintexttimer == 500){
            this.wintexttimer +=1;
            this.credits.intertext.setVisible(false);
            this.sourcethanks.intertext.setVisible(true);
        }
        else if(this.wintexttimer > 500 && this.wintexttimer < 999){
            this.wintexttimer +=1;
 
        }
        else if(this.wintexttimer == 1000){
            this.scene.start("instructionScene");
        }

    }
}