import Phaser from 'phaser'

import SnakeScene from './scenes/SnakeScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: window.innerWidth - 20,
	height: window.innerHeight - 20,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [SnakeScene]
}

export default new Phaser.Game(config)
