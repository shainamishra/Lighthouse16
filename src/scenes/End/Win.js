class Win extends Phaser.Scene {
    constructor() {
        super("endWin");
    }

    preload(){
        this.load.image('winbg', './assets/end/goodend.png');
        this.load.image('hitbox', './assets/HitBox2.png');
        this.load.audio('winBGM', './assets/sfx/the_16th_card.m4a');
    }

    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        // music
        this.winBGM = this.sound.add('winBGM', {volume: 0.2, loop: true});
        this.winBGM.play();

        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'winbg').setOrigin(0, 0); 
        this.credits = this.add.sprite(300,360, 'hitbox');
        this.credits.intertext = this.add.text(borderUISize + borderPadding * 20 + 200, borderUISize + borderPadding * 2 -60, '                   Programming\n                      Shiana\n                      Daren\n\n                       Art\n                      Rosie\n                      Chantel\n                     *Shaina');
        this.credits.intertext.setFontSize(30);
        this.credits.intertext.setVisible(true);

        this.credits2 = this.add.sprite(300,360, 'hitbox');
        this.credits2.intertext = this.add.text(borderUISize + borderPadding * 20 + 200, borderUISize + borderPadding * 2 -60, '                      Music\n                      Rosie\n\n                       SFX\n                      Daren\n                      Rosie\n                      Shaina');
        this.credits2.intertext.setFontSize(30);
        this.credits2.intertext.setVisible(false);
        
        this.sourcethanks = this.add.sprite(300,360, 'hitbox');
        this.sourcethanks.intertext = this.add.text(borderUISize + borderPadding * 20 + 200, borderUISize + borderPadding * 2 + 30, 'Ocean sfx for island music\nsourced from freesound by Noted451\nhttps://freesound.org/people/Noted451/\nsounds/531015/\n\nRainbow fire info\nhttps://sciencenotes.org/how-to-make-\ncolored-fire/\n\nFishing advice :)\nhttps://freshwaterfishingadvice.com\n/salt-bait-fishing/');
        this.sourcethanks.intertext.setFontSize(30);
        this.sourcethanks.intertext.setVisible(false);

        this.thanks = this.add.sprite(300,360, 'hitbox');
        this.thanks.intertext = this.add.text(borderUISize + borderPadding * 20 + 200, borderUISize + borderPadding * 2 + 30, '         Thanks for Playing!\n   Press space to return to the menu');
        this.thanks.intertext.setFontSize(30);
        this.thanks.intertext.setVisible(false);
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);

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
            this.credits2.intertext.setVisible(true);
        }
        else if (this.wintexttimer > 800 && this.wintexttimer < 1400){
            this.wintexttimer +=1;
        }
        else if (this.wintexttimer == 1400){
            this.wintexttimer +=1;
            this.credits2.intertext.setVisible(false);
            this.sourcethanks.intertext.setVisible(true);
        }
        else if(this.wintexttimer > 1400 && this.wintexttimer < 2100){
            this.wintexttimer +=1;
        }
        else if(this.wintexttimer == 2100){
            this.sourcethanks.intertext.setVisible(false);
            this.thanks.intertext.setVisible(true);
        }

        if (Phaser.Input.Keyboard.JustDown(keySPACE) && this.wintexttimer == 2100){
            this.winBGM.stop();
            this.scene.start('menuScene');
        }
    }
}