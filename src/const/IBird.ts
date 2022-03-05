export interface IBird {
    canFly: boolean
    fly(): void
}

export interface IFatBird extends IBird{
    canMoveBackForth: boolean
    moveBack(): void
    moveForth(): void
}

export type BirdType = 'IBird' | 'IFatBird'