class ClownEast extends Phaser.Scene {
    constructor() {
        super("clownEast");
    }

    preload(){
        this.load.image('rosie', './assets/clown/rosie.png');
        this.load.image('rosiePop', './assets/clown/rosietalk.png');
    }

    create() { 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'rosie').setOrigin(0, 0);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // popup
        this.popup = this.add.sprite(640, 360, 'rosiePop');
        this.popup.setDisplaySize(1280, 720);
        this.popup.setVisible(false);

        // clown
        this.clown = this.add.sprite(910, 370, 'hitbox');
        this.clown.setDisplaySize(400, 600);
        this.clown.setVisible(true);
        this.clown.setInteractive({
            cursor: handPointer
        });

        // jeff
        this.jeff = this.add.sprite(705, 340, 'hitbox');
        this.jeff.setDisplaySize(250, 200);
        this.jeff.setVisible(true);
        this.jeff.setInteractive({
            cursor: handPointer
        });
        this.jeff.interText = this.add.text(312, 520, 'ur jeff the\nkilling me');
        this.jeff.interText.setFontSize(40);
        this.jeff.interText.setVisible(false);

        // banner
        this.banner = this.add.sprite(350, 150, 'hitbox');
        this.banner.setDisplaySize(600, 200);
        this.banner.setVisible(true);
        this.banner.setInteractive({
            cursor: handPointer
        });
        this.banner.interText = this.add.text(280, 520, 'annarasumanara');
        this.banner.interText.setFontSize(40);
        this.banner.interText.setVisible(false);

        // tent
        this.tent = this.add.sprite(610, 535, 'hitbox');
        this.tent.setDisplaySize(275, 100);
        this.tent.setVisible(true);
        this.tent.setInteractive({
            cursor: handPointer
        });
        this.tent.interText = this.add.text(335, 520, 's̵͛̃ṫ̶̽ä̷̓ȳ̵̛ ̶̮͊a̴̾͑w̷̛͒ä̶́̈́y̴̓͒');
        this.tent.interText.setFontSize(40);
        this.tent.interText.setVisible(false);

        // humbug
        this.humbug = this.add.sprite(1195, 410, 'hitbox');
        this.humbug.setDisplaySize(130, 70);
        this.humbug.setVisible(true);
        this.humbug.setInteractive({
            cursor: handPointer
        });
        this.humbug.interText1 = this.add.text(300, 520, 'you took a humbug');
        this.humbug.interText1.setFontSize(40);
        this.humbug.interText1.setVisible(false);
        this.humbug.interText1.setStroke('#000000', 6);
        this.humbug.interText2 = this.add.text(312, 520, 'your stomach\n  hurts');
        this.humbug.interText2.setFontSize(40);
        this.humbug.interText2.setVisible(false);
        this.humbug.interText2.setStroke('#000000', 6);
        this.humbug.interText3 = this.add.text(312, 520, 'you feel\n dizzy');
        this.humbug.interText3.setFontSize(40);
        this.humbug.interText3.setVisible(false);
        this.humbug.interText3.setStroke('#000000', 6);
        this.humbug.interText4 = this.add.text(262, 500, '    you get\narsenic poisoning');
        this.humbug.interText4.setFontSize(40);
        this.humbug.interText4.setVisible(false);
        this.humbug.interText4.setStroke('#000000', 6);

        // instructions to return to title
        this.welcome = this.add.text(borderUISize + borderPadding * 20 -270, borderUISize + borderPadding * 2 - 50, "Press SPACE at any time to return to the title screen"); 
        this.welcome.setFontSize(35);
        this.welcome.setFill('#f29999');
        this.welcome.setStroke('#000000', 6);
        
        // popup
        this.popup = this.add.sprite(640, 360, 'rosiePop');
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
        this.add.rectangle(0, 0, 10, 720, 0xb01d1b).setOrigin(0, 0);
        this.add.rectangle(0, 710, 1280, 10, 0xb01d1b).setOrigin(0, 0);
        this.add.rectangle(0, 0, 1280, 10, 0xb01d1b).setOrigin(0, 0);
        this.add.rectangle(1270, 0, 10, 720, 0xb01d1b).setOrigin(0, 0);

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

        // click jeff
        this.jeff.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.jeff.interText.setVisible(true);
                this.textTimer = 1;
            }
        });

        // click banner
        this.banner.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.banner.interText.setVisible(true);
                this.textTimer = 1;
            }
        });

        // click tent
        this.tent.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.tent.interText.setVisible(true);
                this.textTimer = 1;
            }
        });
        
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

        if(this.close == true){
            this.ex.setVisible(false);
        }

        // text on screen
        if(this.textTimer > 0 && this.textTimer < 150) {
            this.textTimer += 1;
        } 
        else{
            this.textTimer = 0;
            this.jeff.interText.setVisible(false);
            this.tent.interText.setVisible(false);
            this.banner.interText.setVisible(false);
            this.humbug.interText1.setVisible(false);
            this.humbug.interText2.setVisible(false);
            this.humbug.interText3.setVisible(false);
            this.humbug.interText4.setVisible(false);
        }

        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("clownNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("clownSouth");
        };
    }
}