class CellarEast extends Phaser.Scene {
    constructor() {
        super("cellarEast");
    }

    preload() {
        // images
        this.load.image('cellartemp', './assets/puzzle2/eastTemp.png');
        this.load.image('hitbox', './assets/HitBox2.png');
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.cellarnorth = this.add.tileSprite(0, 0, 1280, 720, 'cellartemp').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cursor
        this.input.on('gameobjectdown', (pointer, gameObject, event) => { 
            //console.log(pointer);
            //console.log(gameObject);
            //console.log(event);
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // red
        this.red = this.add.sprite(250, 215, 'hitbox');
        this.red.setDisplaySize(50, 50);
        this.red.setInteractive({
            useHandCursor: true
        });
        //this.red.interText = this.add.text(80, 40, 'Nothing else to note');
        //this.red.interText.setFontSize(50);
        this.red.setVisible(true); 

        // orange
        this.orange = this.add.sprite(365, 215, 'hitbox');
        this.orange.setDisplaySize(50, 50);
        this.orange.setInteractive({
            useHandCursor: true
        });
        this.orange.setVisible(true); 

        // yellow
        this.yellow = this.add.sprite(475, 215, 'hitbox');
        this.yellow.setDisplaySize(50, 50);
        this.yellow.setInteractive({
            useHandCursor: true
        });
        this.yellow.setVisible(true); 

        // green
        this.green = this.add.sprite(582, 215, 'hitbox');
        this.green.setDisplaySize(50, 50);
        this.green.setInteractive({
            useHandCursor: true
        });
        this.green.setVisible(true); 

        // lime
        this.lime = this.add.sprite(697, 215, 'hitbox');
        this.lime.setDisplaySize(50, 50);
        this.lime.setInteractive({
            useHandCursor: true
        });
        this.lime.setVisible(true); 

        // cyan
        this.cyan = this.add.sprite(806, 215, 'hitbox');
        this.cyan.setDisplaySize(50, 50);
        this.cyan.setInteractive({
            useHandCursor: true
        });
        this.cyan.setVisible(true); 

        // blue
        this.blue = this.add.sprite(915, 215, 'hitbox');
        this.blue.setDisplaySize(50, 50);
        this.blue.setInteractive({
            useHandCursor: true
        });
        this.blue.setVisible(true); 

        // purple
        this.purple = this.add.sprite(1030, 215, 'hitbox');
        this.purple.setDisplaySize(50, 50);
        this.purple.setInteractive({
            useHandCursor: true
        });
        this.purple.setVisible(true); 

        // pink
        this.pink = this.add.sprite(250, 215, 'hitbox');
        this.pink.setDisplaySize(50, 50);
        this.pink.setInteractive({
            useHandCursor: true
        });
        this.pink.setVisible(true); 

        // pannel image
        //this.pannel = this.add.image(640, 360, 'shelves');
        //this.pannel.setDisplaySize(1280, 720);
        //this.pannel.setVisible(true);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x0c141c).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x0c141c).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // scene change on keypress
        if(Phaser.Input.Keyboard.JustDown(keyA)){
            this.scene.start("cellarNorth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            this.scene.start("cellarSouth");
        };
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            this.scene.start("cellarWest");
        };
    }
}    