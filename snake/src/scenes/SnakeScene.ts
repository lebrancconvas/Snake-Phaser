import Phaser from 'phaser'
import { GameSettings } from '../settings/GameSettings';

export default class SnakeScene extends Phaser.Scene
{
    // Variable Init 
    private squareSprite?;
    private foodSprite?;
    private cursorKeys!: Phaser.Types.Input.Keyboard.CursorKeys;

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

        // this.physics.add.collider(this.squareSprite, this.foodSprite, function(squareSprite, foodSprite) {
        //     foodSprite.destroy();
        //     // foodSprite = this.add.rectangle(foodX, foodY, 20, 20, 0x00ff00);
        // })   
    }

    // Update 
    update()
    {
        this.playerMove(GameSettings.playerSpeed);  
         
    }

    playerMove(speed: number) 
    {
        if(this.cursorKeys.right.isDown) 
        {
            if(this.squareSprite.x <= GameSettings.boundaryRight)
                this.squareSprite.x += speed;
        }
        else if(this.cursorKeys.left.isDown)
        {
            if(this.squareSprite.x >= GameSettings.boundaryLeft)
                this.squareSprite.x -= speed;
        }
        else if(this.cursorKeys.up.isDown)
        {
            if(this.squareSprite.y >= GameSettings.boundaryUp)
                this.squareSprite.y -= speed;
        }
        else if(this.cursorKeys.down.isDown)
        {
            if(this.squareSprite.y <= GameSettings.boundaryDown)
                this.squareSprite.y += speed;
        }
    }

    generateNewFood() 
    {
        const foodX = Phaser.Math.Between(10, 790);
        const foodY = Phaser.Math.Between(10, 590);

        if(this.isFoodEaten()) 
        {
            this.foodSprite.destroy();
            this.foodSprite = this.add.rectangle(foodX, foodY, 20, 20, 0x00ff00);
        }
    }

    isFoodEaten(): boolean 
    {
        if(this.squareSprite.y === this.foodSprite.x && this.squareSprite.y === this.foodSprite.y) 
        {
            return true;
        }
        return false;
    }
}
