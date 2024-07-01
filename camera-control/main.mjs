import {GAME_WIDTH, GAME_HEIGHT} from './config.mjs';

import {Game} from './Game.mjs';

function main() {
  const map = document.getElementById('full_map');

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;

  const game = new Game(map);

  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        game.camera.speedX = -1;
        break;
      case 'ArrowRight':
        game.camera.speedX = 1;
        break;
      case 'ArrowUp':
        game.camera.speedY = -1;
        break;
      case 'ArrowDown':
        game.camera.speedY = 1;
        break;
    }
  });

  window.addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        game.camera.speedX = 0;
        break;
      case 'ArrowRight':
        game.camera.speedX = 0;
        break;
      case 'ArrowUp':
        game.camera.speedY = 0;
        break;
      case 'ArrowDown':
        game.camera.speedY = 0;
        break;
    }
  });

  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);

    game.render(ctx);

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

window.addEventListener('load', main);
