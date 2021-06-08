class ClosetClock extends Phaser.Scene {
    constructor() {
        super("closetClock");
    }
    preload(){
        this.load.image('minuteCloset', './assets/puzzle3/overlays/minute.png');
        this.load.image('hourCloset', './assets/puzzle3/items/hour.png');
        this.load.image('clockCloset', './assets/puzzle5/closet/closet_clock_closeup.png');
        this.load.audio('doorun', './assets/sfx/doorUnlock.wav');
        this.load.audio('unlockClockDrawer', './assets/sfx/doorUnlock2.wav');
    }
    
    create(){
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // unlock sfx
        this.unlock = this.sound.add('unlockClockDrawer', {volume: 0.75});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
       
        this.clockface = this.add.sprite(640, 360, 'clockCloset');
        this.clockface.setDisplaySize(1280, 720);
        this.clockface.interText = this.add.text(borderUISize + borderPadding * 20 + 600, borderUISize + borderPadding * 2 - 40, 'Press A/D\n to move\n   hand');
        this.clockface.interText.setFontSize(50);

        this.hourhand = this.add.image(640, 360,'hourCloset');
        this.hourhand.setInteractive({
            cursor: handPointer
        });
        this.hourhand.interText = this.add.text(370, 395, 'The drawer unlocked');
        this.hourhand.interText.setFontSize(50);
        this.hourhand.interText.setVisible(false);

        this.minutehand = this.add.image(640, 360, 'minuteCloset');
        this.minutehand.setInteractive({
            cursor: handPointer
        });
        this.minutehand.angle = 0;

        this.exitPuzzle = this.add.sprite(50, 50, 'x');
        this.exitPuzzle.setDisplaySize(50, 50);
        this.exitPuzzle.setInteractive({
            cursor: handPointer
        });
        this.textTimerClockP = 0;
        this.timesbuttonpressed = 0;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'darkRitual');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x261f1f).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x261f1f).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x261f1f).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x261f1f).setOrigin(0, 0);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.minutehand.angle -= 5;
            this.timesbuttonpressed -= 1;
            if(this.timesbuttonpressed == -36){
                this.unlock.play();
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.minutehand.angle += 5;
            this.timesbuttonpressed += 1;
            if(this.timesbuttonpressed == 36){
                this.unlock.play();
            }
        }

        if(this.timesbuttonpressed == 36 || this.timesbuttonpressed == -36){
            this.hourhand.interText.setVisible(true);
            this.clockface.interText.setVisible(false);
            clockUnlock = 1;
            this.input.keyboard.enabled = false;
        }

        this.exitPuzzle.on('pointerdown', () => {
            if(this.textTimerClockP == 0){
                this.textTimerClockP = 1;
                this.scene.switch("ritualCloset");
            }
        });
      
        if(this.textTimerClockP > 0 && this.textTimerClockP < 150) {
            this.textTimerClockP += 1;
        } 
        else if(this.textTimerClockP >= 150){
            this.textTimerClockP = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 0){
            this.dark.setVisible(false);
        } else if(lightState == 1){
            this.dark.setVisible(true);
        }
    }
}