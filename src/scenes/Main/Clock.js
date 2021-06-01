class Clock extends Phaser.Scene {
    constructor() {
        super("clockpuzzle");
    }
    preload(){
        this.load.image('minute', './assets/puzzle3/overlays/minute.png');
        this.load.image('hour', './assets/puzzle3/items/hour.png');
        this.load.image('clock', './assets/puzzle3/overlays/clockface.png');
    }
    
    create(){
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
       
        this.clockface = this.add.sprite(650, 350, 'clock');
        this.clockface.setDisplaySize(1280, 720);

        this.hourhand = this.add.image(650, 350,'hour');
        this.hourhand.setInteractive({
            useHandCursor: true
        });

        this.minutehand = this.add.image(650, 350, 'minute');
        this.minutehand.setInteractive({
            useHandCursor: true
        });

        this.exitPuzzle = this.add.sprite(50, 50, 'x');
        this.exitPuzzle.setDisplaySize(50, 50);
        this.exitPuzzle.setInteractive({
            useHandCursor: true
        });
        this.textTimerClockP = 0;
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.minutehand.angle -= 1;
        };

        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.minutehand.angle += 1;
        };

        this.exitPuzzle.on('pointerdown', () => {
            if(this.textTimerClockP == 0){
                this.textTimerClockP = 1;
                this.scene.stop("clockpuzzle");
                this.scene.wake("mainNorth");
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