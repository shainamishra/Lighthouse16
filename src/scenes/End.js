class End extends Phaser.Scene {
  constructor() {
    super("endScene");
  }

  preload(){
    // load assets
  }

  create(data) {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*
    this.playBGM = this.sound.add('bgm', {volume: 0.4, loop: true});
    this.playBGM.play();
    */
    // place tile sprite
    //this.lab = this.add.tileSprite(0, 0, 3840, 480, 'lab').setOrigin(0, 0); 
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // define keys
    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // borders
    this.add.rectangle(0, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
    this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x042630).setOrigin(0, 0);
    this.add.rectangle(0, 0, game.config.width, 10, 0x042630).setOrigin(0, 0);
    this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x042630).setOrigin(0, 0);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
      this.scene.start("menuScene");  
    }
  }
}