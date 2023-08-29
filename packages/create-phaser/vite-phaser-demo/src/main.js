import './style.css'

import { Game, AUTO } from 'phaser'
import Demo from './scene/Demo'

const config = {
  type: AUTO,
  parent: 'app',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [Demo]
}

export default new Game(config)
