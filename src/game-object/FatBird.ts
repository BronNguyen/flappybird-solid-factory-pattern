import Phaser from "phaser";
import { IFatBird } from "../const/IBird";
import Bird from "./BIrd";

export default class FatBird extends Bird  implements IFatBird {
    public canMoveBackForth: boolean

    constructor(scene: Phaser.Scene, x: number, y: number, texture ='bird') {
        super(scene,x,y, texture)
        this.canMoveBackForth = true
    }

    moveBack(): void {
        const body = this.body as Phaser.Physics.Arcade.Body
        body.setVelocityX(-200)
    }

    moveForth(): void {
        const body = this.body as Phaser.Physics.Arcade.Body
        body.setVelocityX(200)
    }
}