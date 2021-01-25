const loadGame = (function(){ 'use strict';
    const canvas = document.getElementById('snake');
    const context = canvas.getContext('2d');

    document.addEventListener('keydown', keyPush);

    const interval = setInterval(game, 1000/15);

    let xv = 0;
    let yv = 0;

    let px = 12;
    let py = 12;

    let gridSize = 20;
    let tileCount = 25;

    let ax = Math.floor(Math.random() * tileCount);
    let ay = Math.floor(Math.random() * tileCount);

    let trail = [];
    let tail = 3;

    function game() {
        px += xv;
        py += yv;

        if (px < 0) {
            px = tileCount - 1;
        }

        if (px > tileCount - 1) {
            px = 0;
        }

        if (py < 0) {
            py = tileCount - 1;
        }

        if (py > tileCount - 1) {
            py = 0;
        }

        context.fillStyle = '#1B1F40';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#1497f9';
        for (let i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);

            if (trail[i].x === px && trail[i].y === py && tail >= 4) {
                tail = 3;
                px = 12;
                py = 12;
                trail = [];
                document.dispatchEvent(new Event('gameOver'));
                setTimeout(() => {
                    const gameOverText = 'Game Over';
                    context.fillStyle = 'white';
                    context.font = "3rem Arial";
                    context.textAlign = 'center';
                    context.textBaseline = 'middle';
                    context.fillText(gameOverText, canvas.width / 2, 100);
                    clearInterval(interval);

                }, 1000/15)
            }
        }

        trail.push({
           x: px,
           y: py
        });

        while(trail.length > tail) {
            trail.shift();
        }

        if (ax === px && ay === py) {
            tail++;
            document.dispatchEvent(new Event('increaseScore'));
            ax = Math.floor(Math.random() * tileCount);
            ay = Math.floor(Math.random() * tileCount);
        }

        context.fillStyle = '#F7931A';
        context.fillRect(ax * gridSize, ay * gridSize, gridSize - 2, gridSize - 2);

    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37:
                if (xv !== 1) {
                    xv = -1;
                }
                yv = 0;
                break;
            case 38:
                xv = 0;
                if (yv !== 1) {
                    yv = -1;
                }
                break;
            case 39:
                if (xv !== -1) {
                    xv = 1;
                }
                yv = 0;
                break;
            case 40:
                xv = 0;
                if (yv !== -1) {
                    yv = 1;
                }
                break;
        }
    }
});

module.exports = { loadGame };
