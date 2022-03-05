import Phaser from "phaser";
import {  IBird } from "../const/IBird";

export default class Bird extends Phaser.GameObjects.Image  implements IBird {
    public canFly: boolean

    constructor(scene: Phaser.Scene, x: number, y: number, texture ='bird') {
        super(scene,x,y, texture)
        this.scene.add.existing(this)
        this.canFly = true
    }

    public fly(): void {
        const body = this.body as Phaser.Physics.Arcade.Body
        body.setVelocityY(-500)
    }
}