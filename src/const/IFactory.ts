import { BirdType, IBird, IFatBird } from "./IBird";

export interface IFactory {
    makeBird(birdType: BirdType): IBird
}