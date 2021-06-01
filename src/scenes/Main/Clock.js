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
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.minutehand.angle -= 1;
        };

        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.minutehand.angle += 1;
        };

    }
}