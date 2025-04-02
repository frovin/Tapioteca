export class Game extends Phaser.Game{
    constructor (width, height){
        let config = {
            type: Phaser.AUTO,
            width: width,
            height: height,
        }

        super(config);
    }
}