import Phaser from "phaser";
import { SCENE_NAME } from "../const/Scene";

export default class LoadScene extends Phaser.Scene {

    constructor() {
        super(SCENE_NAME.LOAD_SCENE)
    }

    preload() {
        this.load.image('bird', 'assets/bird.png');
    }

    create() {
        this.scene.start(SCENE_NAME.GAME_SCENE)
    }
}