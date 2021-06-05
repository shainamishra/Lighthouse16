class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        // load assets
        this.load.image('start', './assets/start.png');
        this.load.image('inventory', './assets/Inventory.png');
        this.load.image('help', './assets/help.png');
        this.load.audio('CrashingWaves', './assets/sfx/CrashingWave2.wav');
        this.load.audio('menu_music', './assets/sfx/theLighthouse.wav');

        // card collection box assets -- loading them here makes the inventory load almost seamlessly
        this.load.image('x', './assets/x.png');
        this.load.image('velvetbg', './assets/transitions/velvetbg.png');

        // sets are placeholders
        this.load.image('set1', './assets/transitions/spread1.png');
        this.load.image('set2', './assets/transitions/spread2.png');
        this.load.image('set3', './assets/transitions/spread3.png');
        this.load.image('set4', './assets/transitions/spread4.png');
        this.load.image('set5', './assets/transitions/spread5.png');
        this.load.image('set6', './assets/transitions/spread6.png');

        // table of contents in card box
        this.load.image('content1', './assets/toc/1.png');
        this.load.image('content2', './assets/toc/2.png');
        this.load.image('content3', './assets/toc/3.png');
        this.load.image('content4', './assets/toc/4.png');
        this.load.image('content5', './assets/toc/5.png');
        this.load.image('content6', './assets/toc/6.png');
        this.load.image('content7', './assets/toc/7.png');

        // velvet bgs
        this.load.image('velvet1', './assets/cards/velvet1.png');
        this.load.image('velvet4', './assets/cards/velvet4.png');
        this.load.image('velvet5', './assets/cards/velvet5.png');
        
        // toc 
        this.load.image('6overlay', './assets/transitions/6TOC.png');
        this.load.image('7overlay', './assets/transitions/7TOC.png');

        // info sheets
        this.load.image('info1', './assets/info/highPriestess.png');
        this.load.image('info2', './assets/info/death.png');
        this.load.image('info3', './assets/info/Fool.png');
        this.load.image('info4', './assets/info/moon.png');
        this.load.image('info5', './assets/info/hermit.png');

        this.load.image('info1-2', './assets/info/hangedMan.png');
        this.load.image('info2-2', './assets/info/chariot.png');
        this.load.image('info3-2', './assets/info/strength.png');
        this.load.image('info4-2', './assets/info/devil.png');

        this.load.image('info1-3', './assets/info/justice.png');
        this.load.image('info2-3', './assets/info/emperor.png');
        this.load.image('info3-3', './assets/info/lovers.png');
        this.load.image('info4-3', './assets/info/wheelOfFortune.png');
        
        this.load.image('info1-4', './assets/info/temperance.png');
        this.load.image('info2-4', './assets/info/magician.png');
        this.load.image('info3-4', './assets/info/empress.png');
        this.load.image('info4-4', './assets/info/sun.png');

        this.load.image('info1-5', './assets/info/judgement.png');
        this.load.image('info2-5', './assets/info/world.png');
        this.load.image('info3-5', './assets/info/star.png');
        this.load.image('info4-5', './assets/info/hierophant.png');
    }

    create() {
        // title
        this.title = this.add.tileSprite(0, 10, 1280, 720, 'start').setOrigin(0, 0);

        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
        
        // music
        this.menuBGM = this.sound.add('menu_music', {volume: 0.2, loop: true});
        this.menuBGM.play();
        
        // change scenes
        this.input.keyboard.on('keydown-SPACE', () => {
			this.sound.play("CrashingWaves");
            this.scene.start("instructionScene"); 
		});
    }
}