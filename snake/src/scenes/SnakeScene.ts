import Phaser from 'phaser'
import { GameSettings } from '../settings/GameSettings';
import { Config } from '../settings/Config';

export default class SnakeScene extends Phaser.Scene
{
    // Variable Init 
    private squareSprite?;
    private foodSprite?;
    private cursorKeys!: Phaser.Types.Input.Keyboard.CursorKeys;
    private score: number = 0;

	constructor()
	{
		super('snake');
	}

    /* Game Logic */

    // Preload 
	preload()
    {

    }

    // Create 
    create()
    {
        this.score = 0;

        // this.add.rectangle(0, 640, 1600, 80, 0xc0c0c0);

        const foodX: number = Phaser.Math.Between(10, 790);
        const foodY: number = Phaser.Math.Between(10, 590);

        this.squareSprite = this.add.rectangle(80, 80, 20, 20, 0x00f0ff);
        this.foodSprite = this.add.rectangle(foodX, foodY, 14, 14, 0x00ff00);

        this.physics.add.existing(this.squareSprite);
        this.physics.add.existing(this.foodSprite);

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.squareSprite, this.foodSprite, this.generateNewFood);
    }

    // Update 
    update()
    {
        this.playerMove(GameSettings.playerSpeed);
    }

    /* Method */

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

    generateNewFood(squareSprite, foodSprite) 
    {
        // RNG 
        const newFoodX: number = Phaser.Math.Between(10, 790);
        const newFoodY: number = Phaser.Math.Between(10, 590);
        
        foodSprite.x = newFoodX;
        foodSprite.y = newFoodY;

        console.log(this.score);
    }
}
