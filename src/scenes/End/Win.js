class Win extends Phaser.Scene {
    constructor() {
        super("endWin");
    }

    preload(){
        this.load.image('winbg', './assets/end/goodend.png');
        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0)

        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'winbg').setOrigin(0, 0); 
        this.credits = this.add.sprite(300, 360, 'hitbox');
        //this.credits.intertext = this.add.text(borderUISize + borderPadding * 20 + 200, borderUISize + borderPadding * 2 -40, '                   Programming\n                  Shaina Mishra\n                 Daren Bartolucci\n\n                       Art\n                   Rosie Longo\n                   Chantel Gee\n                  Shaina Mishra\n\n                      Music\n                   Rosie Longo\n\n                       SFX\n                 Daren Bartolucci\n                   Rosie Longo\n                  Shaina Mishra');
        this.credits.intertext = this.add.text(450, 120, '                   Programming\n                  Shaina Mishra\n                 Daren Bartolucci\n                   Rosie Longo\n\n                       Art\n                   Chantel Gee\n                   Rosie Longo\n                  Shaina Mishra\n\n');
        this.credits.intertext.setFontSize(30);
        this.credits.intertext.setVisible(true);
        this.credits.intertext2 = this.add.text(450, 120, '                      Music\n                   Rosie Longo\n\n\n\n                       SFX\n                 Daren Bartolucci\n                   Rosie Longo\n                  Shaina Mishra');
        this.credits.intertext2.setFontSize(30);
        this.credits.intertext2.setVisible(false);
        
        this.sourcethanks = this.add.sprite(300, 360, 'hitbox');
        this.sourcethanks.intertext = this.add.text(borderUISize + borderPadding * 20 + 250, borderUISize + borderPadding * 2 + 48, 'Ocean sfx for island music\nsourced from freesound by Noted451\nhttps://freesound.org/people/Noted451/\nsounds/531015/\n\nRainbow fire info\nhttps://sciencenotes.org/how-to-make-\ncolored-fire/\n\nFishing advice :)\nhttps://freshwaterfishingadvice.com\n/salt-bait-fishing/');
        this.sourcethanks.intertext.setFontSize(25);
        this.sourcethanks.intertext.setVisible(false);

        this.thanks = this.add.sprite(300,360, 'hitbox');
        this.thanks.intertext = this.add.text (borderUISize + borderPadding * 20 + 100, borderUISize + borderPadding * 2 + 48, '         Thanks for Playing!');
        this.thanks.intertext.setFontSize(40);
        this.thanks.intertext.setVisible(false);

        this.return = this.add.sprite(300,360, 'hitbox');
        this.return.intertext = this.add.text (borderUISize + borderPadding * 20 + 100, borderUISize + borderPadding * 2 + 150, '         Press space to return to the title screen');
        this.return.intertext.setFontSize(25);
        this.return.intertext.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x1a1110).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x1a1110).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x1a1110).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x1a1110).setOrigin(0, 0);

        this.wintexttimer = 0;
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    
    update() {
        if(this.wintexttimer >= 0 && this.wintexttimer < 800){
            this.wintexttimer +=1;
        }
        else if (this.wintexttimer == 800){
            this.wintexttimer +=1;
            this.credits.intertext.setVisible(false);
            this.credits.intertext2.setVisible(true);
        }
        else if (this.wintexttimer > 800 && this.wintexttimer < 1400){
            this.wintexttimer +=1;
        }
        else if (this.wintexttimer == 1400){
            this.wintexttimer +=1;
            this.credits.intertext2.setVisible(false);
            this.sourcethanks.intertext.setVisible(true);
        }
        else if(this.wintexttimer > 1400 && this.wintexttimer < 2300){
            this.wintexttimer +=1;
        }
        else if(this.wintexttimer == 2100){
            this.sourcethanks.intertext.setVisible(false);
            this.thanks.intertext.setVisible(true);
            this.return.intertext.setVisible(true);
        }

        if (Phaser.Input.Keyboard.JustDown(keySPACE) && this.wintexttimer == 2300){
            this.winBGM.stop();
            this.scene.start('menuScene');
        }
    }
}