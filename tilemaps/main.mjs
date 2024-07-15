const GAME_WIDTH = 160;
const GAME_HEIGHT = 160;
const GAME_TILE = 32;
const ROWS = GAME_HEIGHT / GAME_TILE;
const COLUMNS = GAME_WIDTH / GAME_TILE;

const LEVEL01 = [
  9, 9, 9, 9, 9, 1, 2, 2, 2, 3, 6, 7, 7, 7, 8, 6, 7, 7, 7, 8, 11, 12, 12, 12,
  13,
];

const LEVEL02 = [
  24, 24, 25, 24, 25, 16, 12, 12, 12, 17, 8, 14, 14, 14, 6, 21, 2, 2, 2, 22, 19,
  20, 19, 19, 19,
];

const LEVEL03 = [
  14, 6, 25, 25, 20, 14, 11, 17, 23, 25, 2, 3, 11, 12, 12, 19, 21, 2, 3, 14, 24,
  19, 19, 8, 14,
];

function getTileCode(map, col, row) {
  return map[row * COLUMNS + col];
}

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  ctx.imageSmoothingEnabled = false;

  const tileMap = document.getElementById('tilemap');

  const IMAGE_TILE = 32;
  const IMAGE_COLS = tileMap.width / IMAGE_TILE;

  let debug = false;
  let level = LEVEL01;

  function drawLevel(level) {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        const tileCode = getTileCode(level, col, row);
        ctx.drawImage(
          tileMap,
          ((tileCode - 1) * IMAGE_TILE) % tileMap.width,
          Math.floor((tileCode - 1) / IMAGE_COLS) * IMAGE_TILE,
          IMAGE_TILE,
          IMAGE_TILE,
          col * GAME_TILE,
          row * GAME_TILE,
          GAME_TILE,
          GAME_TILE
        );
        if (debug) {
          ctx.strokeRect(
            col * GAME_TILE,
            row * GAME_TILE,
            GAME_TILE,
            GAME_TILE
          );
        }
      }
    }
  }

  drawLevel(level);

  const debugButton = document.getElementById('debug');
  const level01Button = document.getElementById('level01');
  const level02Button = document.getElementById('level02');
  const level03Button = document.getElementById('level03');

  debugButton.addEventListener('click', function () {
    debug = !debug;
    drawLevel(level);
  });

  level01Button.addEventListener('click', function () {
    level = LEVEL01;
    drawLevel(level);
  });

  level02Button.addEventListener('click', function () {
    level = LEVEL02;
    drawLevel(level);
  });

  level03Button.addEventListener('click', function () {
    level = LEVEL03;
    drawLevel(level);
  });
});
