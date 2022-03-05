import { IBird } from "../const/IBird";

export default class Home {
    public bird: IBird
    constructor(bird: IBird) {
        this.bird = bird
    }

    log() {
        console.log(typeof this.bird)
    }
}