import Phaser from 'phaser'

export default class SnakeScene extends Phaser.Scene
{
    // private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys = this.input.keyboard.createCursorKeys();
    private squareSprite;
    private foodSprite;
    private cursorKeys!: Phaser.Types.Input.Keyboard.CursorKeys;
    private WindowSettings = {
        boundaryLeft: 10,
        boundaryRight: 790,
        boundaryUp: 10,
        boundaryDown: 590
    };

	constructor()
	{
		super('snake');
	}

    // Preload 
	preload()
    {
        // Phaser's Assets -> https://labs.phaser.io/assets/ 
        // this.load.setBaseURL('http://labs.phaser.io');
        // this.load.image('background', './assets/image/background/Balloon_Sky.jpeg');
        // this.load.image('square', './assets/sprite/character/square.png');
        
    }

    // Create 
    create()
    {
        // this.add.image(200, 200, 'background');
        const foodX = Math.floor(Math.random() * 790) + 10;
        const foodY = Math.floor(Math.random() * 590) + 10;
        this.squareSprite = this.add.rectangle(80, 80, 20, 20, 0x00f0ff);
        // x: [10, 790] / y: [10, 590]
        this.foodSprite = this.add.rectangle(foodX, foodY, 20, 20, 0x00ff00);

        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    // Update 
    update()
    {
        this.playerMove(8);        
    }

    playerMove(speed: number) 
    {
        if(this.cursorKeys.right.isDown) 
        {
            if(this.squareSprite.x <= this.WindowSettings.boundaryRight)
                this.squareSprite.x += speed;
        }
        else if(this.cursorKeys.left.isDown)
        {
            if(this.squareSprite.x >= this.WindowSettings.boundaryLeft)
                this.squareSprite.x -= speed;
        }
        else if(this.cursorKeys.up.isDown)
        {
            if(this.squareSprite.y >= this.WindowSettings.boundaryUp)
                this.squareSprite.y -= speed;
        }
        else if(this.cursorKeys.down.isDown)
        {
            if(this.squareSprite.y <= this.WindowSettings.boundaryDown)
                this.squareSprite.y += speed;
        }
    }
}
