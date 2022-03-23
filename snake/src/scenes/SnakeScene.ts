import Phaser from 'phaser'

export default class SnakeScene extends Phaser.Scene
{
	constructor()
	{
		super('snake');
	}

    // Preload 
	preload()
    {
        // Phaser's Assets -> https://labs.phaser.io/assets/ 
        // this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('background', './assets/image/background/Balloon_Sky.jpeg');
        this.load.image('square', './assets/sprite/character/square.png');
        
    }

    // Create 
    create()
    {
        this.add.image(200, 200, 'background');

        const squareSprite = this.add.sprite(100, 100, 'square');
    }

    // Update 
    update()
    {

    }
}
