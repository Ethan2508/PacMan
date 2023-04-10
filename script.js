const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");

const blockSize = 20;

const walls = [
  // Murs horizontaux supérieurs
  [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0],

  // Murs horizontaux inférieurs
  [0, 14], [1, 14], [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14], [13, 14], [14, 14],

  // Murs verticaux gauche
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [0, 11], [0, 12], [0, 13],

  // Murs verticaux droite
  [14, 1], [14, 2], [14, 3], [14, 4], [14, 5], [14, 6], [14, 7], [14, 8], [14, 9], [14, 10], [14, 11], [14, 12], [14, 13],

  // Murs intérieurs
  [4, 1], 
  [10, 2], [2, 2],  [6, 2],  [7, 2], [8, 2],[12, 2],
  [4, 3], [10, 3],
  [1, 4], [3, 4], [4, 4], [6, 4], [8, 4], [10, 4],[11, 4], [12, 4],
  [10, 5], [4, 5],[6, 5], [8, 5],
  [6, 6],[8, 6],[7, 6],[1, 6],[2, 6],
  [4, 7], [10, 7],[12, 7],
  [4, 8], [6, 8],[7, 8],[8, 8],[2, 8],[12, 8],
  [12, 9],
  [1, 10], [2, 10], [5, 10],[11, 10], [12, 10], [13, 10], [4, 10],
  [4, 11],[10, 11],[7, 11],[2, 11],
  [10, 12],[7, 12],[2, 12],[6, 12],[12, 12],
  [7, 13],[4, 13],[5, 13],[6, 13],

];

const point = [
  [5, 5],
  [10, 5],
  [5, 10],
  [10, 10],
  [1, 1], [2, 1], [3, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [11, 1], [12, 1], [13, 1],
[1, 2], [3, 2], [4, 2], [5, 2], [9, 2], [11, 2], [13, 2],
[1, 3], [2, 3], [3, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [11, 3], [13, 3],
[2, 4], [5, 4], [7, 4], [9, 4], [13, 4],
[1, 5], [2, 5], [3, 5], [5, 5], [7, 5], [9, 5], [11, 5], [13, 5],
[1, 6], [3, 6], [4, 6], [5, 6], [8, 6], [9, 6], [10, 6], [11, 6], [13, 6],
[2, 7], [3, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [11, 7], [13, 7],
[1, 8], [3, 8], [4, 8], [5, 8], [9, 8], [10, 8], [11, 8], [13, 8],
[1, 9], [2, 9], [3, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [11, 9],
[2, 10], [3, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10],
[1, 11], [2, 11], [3, 11], [5, 11], [6, 11], [8, 11], [9, 11], [11, 11], [12, 11], [13, 11],
[1, 12], [3, 12], [4, 12], [5, 12], [8, 12], [9, 12], [10, 12], [11, 12], [13, 12],
[1, 13], [2, 13], [3, 13], [8, 13], [9, 13], [10, 13], [11, 13], [12, 13], [13, 13],
];



const pacMan = {
  x: 1,
  y: 1,
  direction: "right",
};

const ghosts = [
  { x: 7, y: 7, color: 'red', name: 'Blinky' },
  { x: 8, y: 7, color: 'pink', name: 'Pinky' },
  { x: 7, y: 8, color: 'cyan', name: 'Inky' },
  { x: 8, y: 8, color: 'orange', name: 'Clyde' },
];



function drawWalls() {
  ctx.fillStyle = "#0000ff";
  walls.forEach(([x, y]) => {
    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  });
}

function drawPacMan() {
  ctx.fillStyle = "#ffff00";
  ctx.beginPath();
  ctx.arc(
    (pacMan.x + 0.5) * blockSize,
    (pacMan.y + 0.5) * blockSize,
    blockSize / 2,
    0.2 * Math.PI,
    1.8 * Math.PI
  );
  ctx.lineTo((pacMan.x + 0.5) * blockSize, (pacMan.y + 0.5) * blockSize);
  ctx.closePath();
  ctx.fill();
}

function drawGhosts() {
  ghosts.forEach((ghost) => {
    ctx.fillStyle = ghost.color;
    ctx.fillRect(ghost.x * blockSize, ghost.y * blockSize, blockSize, blockSize);
  });
}

function drawPoints() {
  ctx.fillStyle = "#ffffff";
  points.forEach(([x, y]) => {
    ctx.fillRect((x + 0.5) * blockSize - 2, (y + 0.5) * blockSize - 2, 4, 4);
  });
}



function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawWalls();
  drawPacMan();
  drawGhosts();
  drawPoints();
}

function ghostCollidesWithPacMan(ghost) {
  return ghost.x === pacMan.x && ghost.y === pacMan.y;
}

function checkGhostCollision() {
  for (const ghost of ghosts) {
    if (ghostCollidesWithPacMan(ghost)) {
      gameOver();
      break;
    }
  }
}

function gameOver() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '24px Arial';
  ctx.fillStyle = 'red';
  ctx.fillText('Vous avez perdu', canvas.width / 2 - 70, canvas.height / 2);
  document.removeEventListener('keydown', handleKeyPress);
}

let gameIsOver = false;

function moveGhosts() {
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  for (const ghost of ghosts) {
    const possibleDirections = directions.filter(([dx, dy]) => {
      const newX = ghost.x + dx;
      const newY = ghost.y + dy;
      return !isWall(newX, newY);
    });

    if (possibleDirections.length > 0) {
      const randomIndex = Math.floor(Math.random() * possibleDirections.length);
      const [dx, dy] = possibleDirections[randomIndex];
      ghost.x += dx;
      ghost.y += dy;
    }
  }
}

function isWall(x, y) {
  return walls.some(([wallX, wallY]) => wallX === x && wallY === y);
}
let points = [];

function initPoints() {
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      const isWallPresent = walls.some(wall => wall[0] === x && wall[1] === y);
      if (!isWallPresent) {
        points.push([x, y]);
      }
    }
  }
}

initPoints();


function updatePacManPosition() {
  let newX = pacMan.x;
  let newY = pacMan.y;

  if (pacMan.direction === "right") newX++;
  else if (pacMan.direction === "left") newX--;
  else if (pacMan.direction === "up") newY--;
  else if (pacMan.direction === "down") newY++;

  if (!isWall(newX, newY)) {
    pacMan.x = newX;
    pacMan.y = newY;
  }
}

function drawPoints() {
  ctx.fillStyle = 'white';

  for (let i = 0; i < points.length; i++) {
    const pointX = points[i][0] * blockSize + blockSize / 2;
    const pointY = points[i][1] * blockSize + blockSize / 2;
    ctx.beginPath();
    ctx.arc(pointX, pointY, blockSize / 4, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function handleKeyPress(event) {
  const prevX = pacMan.x;
  const prevY = pacMan.y;

  if (event.key === 'ArrowUp') {
    pacMan.dy = -1;
  } else if (event.key === 'ArrowDown') {
    pacMan.dy = 1;
  } else if (event.key === 'ArrowLeft') {
    pacMan.dx = -1;
  } else if (event.key === 'ArrowRight') {
    pacMan.dx = 1;
  }

  pacMan.x += pacMan.dx;
  pacMan.y += pacMan.dy;

  if (isWall(pacMan.x, pacMan.y)) {
    pacMan.x = prevX;
    pacMan.y = prevY;
  } else {
    collectPoint();
    checkWin();
  }
}

document.addEventListener("keydown", handleKeyPress);

let ghostMoveInterval;

function startGame() {
  initPoints();
  gameLoop();
  ghostMoveInterval = setInterval(moveGhosts, 1000);
}

let score = 0;

function collectPoint() {
  for (let i = 0; i < points.length; i++) {
    const [pointX, pointY] = points[i];
    if (pacMan.x === pointX && pacMan.y === pointY) {
      score++;
      points.splice(i, 1);
      break;
    }
  }
}

function checkWin() {
  if (points.length === 0) {
    gameIsOver = true;
    gameWon();
  }
}

function restartGame() {
  gameIsOver = false;
  score = 0;
  pacMan = { x: 1, y: 1, dx: 0, dy: 0 };
  ghosts = [{ x: 5, y: 5 }, { x: 7, y: 5 }];
  initPoints();
  startGame();
}



function gameOver() {
  gameIsOver = true;
  clearInterval(ghostMoveInterval);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '24px Arial';
  ctx.fillStyle = 'red';
  ctx.fillText('Vous avez perdu', canvas.width / 2 - 70, canvas.height / 2);
  document.removeEventListener('keydown', handleKeyPress);
  document.getElementById('restartButton').style.display = 'block';
}

function gameWon() {
  gameIsOver = true;
  clearInterval(ghostMoveInterval);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '24px Arial';
  ctx.fillStyle = 'green';
  ctx.fillText('Vous avez gagné', canvas.width / 2 - 70, canvas.height / 2);
  document.removeEventListener('keydown', handleKeyPress);
  document.getElementById('restartButton').style.display = 'block';
}



function handleKeyPress(event) {
  let newDx = 0;
  let newDy = 0;

  if (event.key === 'ArrowUp') {
    newDy = -1;
  } else if (event.key === 'ArrowDown') {
    newDy = 1;
  } else if (event.key === 'ArrowLeft') {
    newDx = -1;
  } else if (event.key === 'ArrowRight') {
    newDx = 1;
  }

  const newX = pacMan.x + newDx;
  const newY = pacMan.y + newDy;

  if (!isWall(newX, newY)) {
    pacMan.x = newX;
    pacMan.y = newY;
    collectPoint();
    checkWin();
  }
}

document.getElementById('refreshButton').addEventListener('click', () => {
  location.reload();
});


function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawWalls();
  drawPoints();
  drawPacMan();
  drawGhosts();

  checkGhostCollision();

  if (!gameIsOver) {
    requestAnimationFrame(gameLoop);
  }
}


startGame();