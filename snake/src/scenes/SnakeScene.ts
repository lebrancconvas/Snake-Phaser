import Phaser from 'phaser'
import { GameSettings } from '../settings/GameSettings';
import { Config } from '../settings/Config';

export default class SnakeScene extends Phaser.Scene
{
    // Variable Init 
    squareSprite;
    foodSprite;
    cursorKeys!: Phaser.Types.Input.Keyboard.CursorKeys;
    score!: number;
    scoreLabel!: Phaser.GameObjects.BitmapText;
    eatingSound!: Phaser.Sound.BaseSound;
    audioConfig;

	constructor()
	{
		super('snake');
	}

    /* Game Logic */

    // Preload 
	preload()
    {
        this.load.bitmapFont("pixelFont", "./assets/font/Zuno/font.png", "./assets/font/Zuno/font.xml");
        this.load.audio("eating", "./assets/audio/sfx/Collect_02.mp3");
    }

    // Create 
    create()
    {
        this.score = 0;

        this.audioConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }

        this.eatingSound = this.sound.add('eating');

        this.add.rectangle(0, 640, 1600, 80, 0xc0a0c0);

        const foodX: number = Phaser.Math.Between(10, 790);
        const foodY: number = Phaser.Math.Between(10, 590);

        this.squareSprite = this.add.rectangle(80, 80, 20, 20, 0x00f0ff);
        this.foodSprite = this.add.rectangle(foodX, foodY, 14, 14, 0x00ff00);

        this.physics.add.existing(this.squareSprite);
        this.physics.add.existing(this.foodSprite);

        this.scoreLabel = this.add.bitmapText(30, 610, "pixelFont", `Score: ${this.score}`, 30);

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.squareSprite, this.foodSprite, (squareSprite, foodSprite) => {
            this.squareSprite = squareSprite;
            this.foodSprite = foodSprite;

            const newFoodX: number = Phaser.Math.Between(10, 790);
            const newFoodY: number = Phaser.Math.Between(10, 590);
        
            this.foodSprite.x = newFoodX;
            this.foodSprite.y = newFoodY;

            this.eatingSound.play(this.audioConfig);

            this.score++;

            this.scoreLabel.text = `Score: ${this.score}`;
        });
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
        this.squareSprite = squareSprite;
        this.foodSprite = foodSprite;

        const newFoodX: number = Phaser.Math.Between(10, 790);
        const newFoodY: number = Phaser.Math.Between(10, 590);
    
        this.foodSprite.x = newFoodX;
        this.foodSprite.y = newFoodY;

        this.score++;

        // console.log(this.score);
    }
}
