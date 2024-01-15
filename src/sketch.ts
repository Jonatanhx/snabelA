//---- GLOBAL VARIABLES ----//
// Har kvar davids mystery music för att visa vart vi kan importera ljud//
let game: Game;
let music: {
  backgroundL1: p5.SoundFile;
  backgroundL2: p5.SoundFile;
  startMenuMusic: p5.SoundFile;
};
let sfx: {
  gameOver: p5.SoundFile;
};

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
// Har kvar davids mystery music för att visa vart vi kan importera ljud//
function preload() {
  /*   music = {
    backgroundL1: loadSound("/assets/music/Kitchentheme.mp3"), //placeholder
    backgroundL2: loadSound("/assets/music/Deserttheme.mp3"), //placerholder
    startMenuMusic: loadSound("/assets/music/Menutheme.mp3"), //placeholder
  }; */
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
// Har kvar davids mystery music för att visa vart vi kan importera ljud//
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  /*   music.backgroundL1.setVolume(0.8); */

  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
