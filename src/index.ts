import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/GameScene';
import LoadScene from './scenes/LoadScene';

new Phaser.Game(
  Object.assign(config, {
    scene: [LoadScene, GameScene]
  })
);
