import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene 
{
	constructor()
	{
		super('booting');
	}

	preload()
	{
		this.load.bitmapFont("pixelFont", "./assets/font/Zuno/font.png", "./assets/font/Zuno/font.xml");
    this.load.audio("eating", "./assets/audio/sfx/Collect_02.mp3");
	}

	create()
	{
		this.add.text(350, 300, "Loading Game.");
		this.scene.start('snake');
	}

	update()
	{

	}
}