import Phaser from 'phaser';
import { IBird, IFatBird } from '../const/IBird';
import { IController, IFatBirdController } from '../const/IController';
import { SCENE_NAME } from '../const/SceneName';
import { Controller, FatBirdController } from '../game-object/Controller';
import Factory from '../game-object/Factory';
import Home from '../game-object/Home';

export default class GameScene extends Phaser.Scene {
  private bird!: IBird
  private fatBird!: IFatBird
  private controller!: IController
  private fatBirdController!: IFatBirdController

  constructor() {
    super(SCENE_NAME.GAME_SCENE);
  }

  create() {
    const factory = new Factory(this)
    //create Objects with factory pattern
    this.bird = factory.makeBird('IBird')
    this.fatBird = <IFatBird>factory.makeBird('IFatBird')
    this.controller = new Controller(this, this.bird)
    this.fatBirdController = new FatBirdController(this, this.fatBird)

    const home1 = new Home(this.bird)
    //liskov princible: subclass fatBird can completely replace bird anywhere
    const home2 = new Home(this.fatBird)
    const otherController = new Controller(this, this.fatBird)


  }
}
