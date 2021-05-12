class End extends Phaser.Scene {
  constructor() {
    super("endScene");
  }

  preload(){
    // load assets
  }

  create(data) {
    //
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
      this.scene.start("menuScene");  
    }
  }
}