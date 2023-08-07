import menuScene from './scripts/scenes/Menu.js'
import gameScene1 from './scripts/scenes/Game1.js'
import gameScene2 from './scripts/scenes/Game2.js'
import gameScene3 from './scripts/scenes/Game3.js'
import endScene1 from './scripts/scenes/End1.js'
import endScene2 from './scripts/scenes/End2.js'
import endScene3 from './scripts/scenes/End3.js'
import deathScene from './scripts/scenes/Death.js'


let mScene = new menuScene();
let gScene1 = new gameScene1();
let gScene2 = new gameScene2();
let gScene3 = new gameScene3();
let eScene1 = new endScene1();
let eScene2 = new endScene2();
let eScene3 = new endScene3();
let dScene = new deathScene();


var gameConfig = {
        type: Phaser.AUTO,
        backgroundColor: 0x000000,
        parent: "game-parent",
        width: 1200,
        height: 900,
        scale: {
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        physics: {
            default: "arcade",
            arcade: {
                gravity: {
                    y: 0
                }
            }
        }
    }

let game = new Phaser.Game(gameConfig);

game.scene.add('menuScene', mScene);
game.scene.add('gameScene1', gScene1);
game.scene.add('gameScene2', gScene2);
game.scene.add('gameScene3', gScene3);
game.scene.add('endScene1', eScene1);
game.scene.add('endScene2', eScene2);
game.scene.add('endScene3', eScene3);
game.scene.add('deathScene', dScene);


game.scene.start('menuScene');