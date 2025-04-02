import { Game } from "./game.js";

export class GameManager {
    constructor(){
        this.width = window.outerWidth;
        this.height = window.outerHeight;
        this.game = new Game(this.width, this.height)
    }
}