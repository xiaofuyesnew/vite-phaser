import './style.css'

import { Game, AUTO } from 'phaser'
import Counter from './scene/Counter'

const config = {
  type: AUTO,
  parent: 'app',
  width: 800,
  height: 600,
  scene: [Counter]
}

export default new Game(config)
