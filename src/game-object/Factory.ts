import { BirdType, IBird } from "../const/IBird";
import { IFactory } from "../const/IFactory";
import Bird from "./BIrd";
import FatBird from "./FatBird";

//single responsibility: factory only spawn gameobject

export default class Factory implements IFactory{
    public scene: Phaser.Scene

    constructor(scene: Phaser.Scene) {
        this.scene = scene
    }

    public makeBird(birdType: BirdType): IBird {
        let bird

        if( birdType === 'IBird') bird = new Bird(this.scene,100,100)
        else bird = new FatBird(this.scene,100,100)

        return bird
    }
}