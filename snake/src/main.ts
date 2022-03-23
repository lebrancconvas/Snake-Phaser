import Phaser from 'phaser';

import SnakeScene from './scenes/SnakeScene';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [SnakeScene]
};

export default new Phaser.Game(config);
