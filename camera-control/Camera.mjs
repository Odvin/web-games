import {GAME_WIDTH, GAME_HEIGHT} from './config.mjs';

export class Camera {
  constructor(map) {
    this.speedX = 0;
    this.speedY = 0;

    this.x = 64;
    this.y = 64;

    this.maxX = map.width - GAME_WIDTH;
    this.maxY = map.height - GAME_HEIGHT;

    this.speed = 0.2;
  }

  move(deltaTime) {
    if (this.speedX || this.speedY) {
      this.x += this.speedX * this.speed * deltaTime;
      this.y += this.speedY * this.speed * deltaTime;

      this.x = Math.max(0, Math.min(this.x, this.maxX));
      this.y = Math.max(0, Math.min(this.y, this.maxY));
    }
  }
}
