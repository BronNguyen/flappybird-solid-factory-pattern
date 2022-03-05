import Phaser from "phaser";
import { IBird, IFatBird } from "../const/IBird";
import { IController, IFatBirdController } from "../const/IController";


//seregration principle: devide controller to pieces
//because backward and forward maybe not being use for a normal IBird

//dependency inversion: class Controller only accept IBird kind interfaces,
//and use its methods

export class Controller implements IController {
    public bird: IBird
    public scene: Phaser.Scene
    public flyKey: Phaser.Input.Keyboard.Key


    constructor(scene: Phaser.Scene, bird: IBird) {
        this.scene = scene
        this.bird = bird
        this.flyKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }

    public fly(): void {
        this.bird.fly()
    }
}

export class FatBirdController extends Controller implements IFatBirdController {
    public backwarkKey: Phaser.Input.Keyboard.Key;
    public forwardKey: Phaser.Input.Keyboard.Key;

    constructor(scene: Phaser.Scene, bird: IFatBird) {
        super(scene, bird)
        this.forwardKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.backwarkKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    }

    public forward(): void {
        (<IFatBird>this.bird).moveForth()
    }

    public backwark(): void {
        (<IFatBird>this.bird).moveBack()
    }
}