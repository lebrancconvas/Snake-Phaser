import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene
{
	private gameoverText;
	private tryagainText;
	private cursorKeys;

	constructor()
	{
		super('gameover');
	}

	preload()
	{
		
	}

	create()
	{	
		this.gameoverText = this.add.bitmapText(320, 300, "pixelFont", `Game Over`, 50);
		this.tryagainText = this.add.bitmapText(160, 410, "pixelFont", "Press SPACE BAR to try again.", 50);
		this.cursorKeys = this.input.keyboard.createCursorKeys();
	}

	update()
	{
		if(this.cursorKeys.space.isDown)
		{
			this.scene.start('snake');
		}
	}
}