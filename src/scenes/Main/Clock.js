class Clock extends Phaser.Scene {
    constructor() {
        super("clockpuzzle");
    }
    preload(){
        this.load.image('minute', './assets/puzzle3/overlays/minute.png');
        this.load.image('hour', './assets/puzzle3/items/hour.png');
        this.load.image('clock', './assets/puzzle3/overlays/clockface.png');
        this.load.audio('doorun', './assets/sfx/doorUnlock.wav');
        
    }
    
    create(){
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
       
        this.clockface = this.add.sprite(640, 360, 'clock');
        this.clockface.setDisplaySize(1280, 720);
        this.clockface.interText = this.add.text(borderUISize + borderPadding * 20 + 595, borderUISize + borderPadding * 2 - 40, 'Press A/D\n to move\n   hand');
        this.clockface.interText.setFontSize(50)

        this.hourhand = this.add.image(640, 360, 'hour');
        this.hourhand.setInteractive({
            cursor: handPointer
        });
        this.hourhand.interText = this.add.text(borderUISize + borderPadding * 20 - 330, borderUISize + borderPadding * 2, 'The hatch\nbehind you\nunlocked');
        this.hourhand.interText.setFontSize(50);
        this.hourhand.interText.setVisible(false);

        this.minutehand = this.add.image(640, 360, 'minute');
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
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x522729).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x522729).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x522729).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x522729).setOrigin(0, 0);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.minutehand.angle -= 5;
            this.timesbuttonpressed -= 1;
            if(this.timesbuttonpressed == -36){
                this.sound.play("doorun");
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.minutehand.angle += 5;
            this.timesbuttonpressed += 1;
            if(this.timesbuttonpressed == 36){
                this.sound.play("doorun");
            }
        }

        if(this.timesbuttonpressed == 36 || this.timesbuttonpressed == -36){
            clockUnlock = 1;
            pcoinGot = 0;
            this.input.keyboard.enabled = false;
            this.hourhand.interText.setVisible(true);
        }

        this.exitPuzzle.on('pointerdown', () => {
            if(this.textTimerClockP == 0){
                this.textTimerClockP = 1;
                this.scene.start("mainNorth");
            }
        });
      
        if(this.textTimerClockP > 0 && this.textTimerClockP < 150) {
            this.textTimerClockP += 1;
        } 
        else if(this.textTimerClockP >= 150){
            this.textTimerClockP = 0;
        }
    }
}