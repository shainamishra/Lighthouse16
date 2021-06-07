class Win extends Phaser.Scene {
    constructor() {
        super("endWin");
    }

    preload(){
        // images


        // audio
    }

    create() {
        // place tile sprites (TAKEN FROM INTRO U GOTTA CHANGE IT)
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'blkbg').setOrigin(0, 0); 
        this.credits = this.add.sprite(300,360, 'hitbox');
        this.credits.intertext = this.add.text(borderUISize + borderPadding * 20 - 200, borderUISize + borderPadding * 2 -75, '                   Programming\n                      Shiana\n                      Daren\n\n                       Art\n                      Rose\n                     Chantel\n                     Shaina\n\n                      Music\n                      Rosie\n\n                       SFX\n                      Daren\n                      Rosie\n                      Shaina\n\n      Ocean music sfc sourced from Noted451\nhttps://freesound.org/people/Noted451/sounds/531015/');
        this.credits.intertext.setFontSize(30);
        this.credits.intertext.setAlpha(1);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);

        //tween set up




        this.introtexttimer = 0;
    }
    
    update() {
        //yo this is from the intro it only works til the fifth one i think but anyway the frame work for fading text in n out and the timer is here..........
        if(this.introtexttimer == 0 ){
            this.introtexttimer +=1;

        }
       
        else if (this.introtexttimer == 500){
            this.scene.start("instructionScene"); 
        }
        
    

    }
}