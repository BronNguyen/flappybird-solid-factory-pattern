import Phaser from 'phaser';
import { SCENE_NAME } from './const/Scene';

export default {
  type: Phaser.AUTO,
  parent: SCENE_NAME.LOAD_SCENE,
  backgroundColor: '#33A5E7',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200}
    }
  },
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};
