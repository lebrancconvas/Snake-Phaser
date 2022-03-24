import SnakeScene from '../scenes/SnakeScene';

export const Config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade'
	},
	scene: [SnakeScene]
};