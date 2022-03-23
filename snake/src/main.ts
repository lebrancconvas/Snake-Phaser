import Phaser from 'phaser';
class Main extends Phaser.Scene {
  constructor() {
    super('main');
  }

  // Preload 
  preload() {
    this.load.image('square', './assets/sprite/character/square.png');
  }

  // Create 
  create() {
    this.add.image(100, 100, 'square');
  }
  
  // Update 
  update() {

  }
  
}

export default Main;

// Config 
const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ff00ff',
  width: 800,
  height: 600,
  scene: Main
};

const game = new Phaser.Game(config);

