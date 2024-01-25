//---- GLOBAL VARIABLES ----//
// Har kvar davids mystery music för att visa vart vi kan importera ljud//
let game: Game;
let entity: Entity;
let music: {
  backgroundL1: p5.SoundFile;
  backgroundL2: p5.SoundFile;
  startMenuMusic: p5.SoundFile;
};
let backgroundImage: {
  //våra bilder är p5 images
  backgroundDesert: p5.Image;
  backgroundKitchen: p5.Image;
};
let startImage: {
  playerPreview: p5.Image;
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
  /*  music = {
    backgroundL1: loadSound("/assets/music/Kitchentheme.mp3"), //placeholder
    backgroundL2: loadSound("/assets/music/Deserttheme.mp3"), //placerholder
    startMenuMusic: loadSound("/assets/music/Menutheme.mp3"), //placeholder
  }; */
  backgroundImage = {
    backgroundDesert: loadImage("/assets/images/bakgrund1.png"), //variabler som håller våra bilder
    backgroundKitchen: loadImage("/assets/images/kitchenbackground.png"),
  };
  startImage ={
     playerPreview: loadImage("/assets/images/startImg.png")
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  /* music.backgroundL1.setVolume(0.8); */
  game = new Game();
  /* image(backgroundImage.backgroundKitchen, 0, 0, width, height); */

  /*   image(backgroundImage, 0, 0, 0, 0);
   */
}

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
