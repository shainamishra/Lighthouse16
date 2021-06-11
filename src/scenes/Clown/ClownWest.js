class ClownWest extends Phaser.Scene {
    constructor() {
        super("clownWest");
    }

    preload(){
        this.load.image('daren', './assets/clown/daren.png');
        this.load.image('darenPop', './assets/clown/darentalk.png');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'daren').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // popup
        this.popup = this.add.sprite(640, 360, 'darenPop');
        this.popup.setDisplaySize(1280, 720);
        this.popup.setVisible(false);

        /// hitbox
        this.clown = this.add.sprite(910, 370, 'hitbox');
        this.clown.setDisplaySize(400, 600);
        this.clown.setVisible(true);
        this.clown.setInteractive({
            cursor: handPointer
        });

        // humbug
        this.humbug = this.add.sprite(430, 230, 'hitbox');
        this.humbug.setDisplaySize(700, 100);
        this.humbug.setVisible(true);
        this.humbug.setInteractive({
            cursor: handPointer
        });
        this.humbug.interText1 = this.add.text(150, 660, 'you took a humbug');
        this.humbug.interText1.setFontSize(40);
        this.humbug.interText1.setVisible(false);
        this.humbug.interText1.setStroke('#000000', 6);
        this.humbug.interText2 = this.add.text(212, 610, 'your stomach\n  hurts');
        this.humbug.interText2.setFontSize(40);
        this.humbug.interText2.setVisible(false);
        this.humbug.interText2.setStroke('#000000', 6);
        this.humbug.interText3 = this.add.text(212, 615, 'you feel\n dizzy');
        this.humbug.interText3.setFontSize(40);
        this.humbug.interText3.setVisible(false);
        this.humbug.interText3.setStroke('#000000', 6);
        this.humbug.interText4 = this.add.text(152, 615, '    you get\narsenic poisoning');
        this.humbug.interText4.setFontSize(40);
        this.humbug.interText4.setVisible(false);
        this.humbug.interText4.setStroke('#000000', 6);

        //instructions to return to title
        this.welcome = this.add.text(borderUISize + borderPadding * 20 -270, borderUISize + borderPadding * 2 - 50, "Press SPACE at any time to return to the title screen"); 
        this.welcome.setFontSize(35);
        this.welcome.setFill('#f29999');
        this.welcome.setStroke('#000000', 6);
        
        // popup
        this.popup = this.add.sprite(640, 360, 'darenPop');
        this.popup.setDisplaySize(1280, 720);
        this.popup.setVisible(false);

        // ex
        this.ex = this.add.sprite(50, 50, 'x');
        this.ex.setDisplaySize(50, 50);
        this.ex.setInteractive({
            cursor: handPointer
        });
        this.ex.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x4c7d92).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x4c7d92).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x4c7d92).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x4c7d92).setOrigin(0, 0);

        /////////////////////////////////////////////////////////////////////////////////////
        //define keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // variables
        this.textTimer = 0;
        this.close = false;

        //return to title
        this.input.keyboard.on('keydown-SPACE', () => {
            this.sound.get('circus').destroy();
            this.scene.start("menuScene"); 
		});
    }
    
    update() {
        // x
        this.ex.on('pointerdown', () => {
            this.popup.setVisible(false);
            this.textTimer = 1;
            this.close = true;
        });

        // click clown
        this.clown.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.ex.setVisible(true);
                this.popup.setVisible(true);
                this.close = false;
                this.textTimer = 1;
            }
        });

        if(this.close == true){
            this.ex.setVisible(false);
        }
        
        // click humbug
        this.humbug.on('pointerdown', () => {
            if(this.textTimer == 0){
                if(humbug == 0 && this.textTimer == 0){
                    this.humbug.interText1.setVisible(true);
                    humbug = 1;
                } else if(humbug == 1 && this.textTimer == 0){
                    this.humbug.interText2.setVisible(true);
                    humbug = 2;
                }  else if(humbug == 2 && this.textTimer == 0){
                    this.humbug.interText3.setVisible(true);
                    humbug = 3;
                }  else if(humbug == 3 && this.textTimer == 0){
                    this.humbug.interText4.setVisible(true);
                    humbug = 0;
                } 
                this.textTimer = 1;
            }
        });

        // text on screen
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else{
            this.textTimer = 0;
            this.humbug.interText1.setVisible(false);
            this.humbug.interText2.setVisible(false);
            this.humbug.interText3.setVisible(false);
            this.humbug.interText4.setVisible(false);
        }

        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("clownSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("clownNorth");
        };
    }
}