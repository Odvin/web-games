import {GAME_WIDTH, GAME_HEIGHT} from './config.mjs';

import {Camera} from './Camera.mjs';

export class Game {
  constructor(map) {
    this.map = map;
    this.camera = new Camera(this.map);
  }

  update(deltaTime) {
    this.camera.move(deltaTime);
  }

  render(ctx) {
    ctx.drawImage(
      this.map,
      this.camera.x,
      this.camera.y,
      GAME_WIDTH,
      GAME_HEIGHT,
      0,
      0,
      GAME_WIDTH,
      GAME_HEIGHT
    );
  }
}
