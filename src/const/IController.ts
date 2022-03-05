import { IBird, IFatBird } from "./IBird"

export interface IController {
    bird: IBird
    flyKey: Phaser.Input.Keyboard.Key
}

export interface IFatBirdController extends IController {
    forwardKey: Phaser.Input.Keyboard.Key
    backwarkKey: Phaser.Input.Keyboard.Key
}