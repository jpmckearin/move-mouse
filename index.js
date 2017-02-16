'use strict';

const robot = require('robotjs');
const twoPI = Math.PI * 2.0;

let screenSize = robot.getScreenSize();
let height = (screenSize.height / 2) - 10;
let width = screenSize.width;
let move = randomMove;

robot.setMouseDelay(1);

move();
setInterval(move, 14 * 60 * 1000);

function randomMove() {
    let randPos = {
        x: randomIntFromInterval(0, width),
        y: randomIntFromInterval(0, height)
    };

    robot.moveMouseSmooth(randPos.x, randPos.y);
}

function sinWave() {
    for (var x = 0; x < width; x++) {
        let y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

