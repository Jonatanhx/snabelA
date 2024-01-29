//---- GLOBAL VARIABLES ----//
// Har kvar davids mystery music för att visa vart vi kan importera ljud//
let game: Game;
let entity: Entity;
let entityImages: {
  platformImg: p5.Image;
  obstacleImg: p5.Image;
};
let music: {
  backgroundL1: p5.SoundFile;
  backgroundL2: p5.SoundFile;
  startMenuMusic: p5.SoundFile;
};
let playerAnimation: {
  playerAnimation: p5.Image[];
};

let backgroundImage: {
  //våra bilder är p5 images
  backgroundDesert: p5.Image;
  backgroundKitchen: p5.Image;
};
let progrees: {
  progressbar: p5.Image;
};
let startImage: {
  playerPreview: p5.Image;
};
let sfx: {
  explodeSound: p5.SoundFile;
};
let goalImage: {
  goal: p5.Image;
};

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
// Har kvar davids mystery music för att visa vart vi kan importera ljud//
function preload() {
  playerAnimation = {
    playerAnimation: [
      loadImage("/assets/images/character/Jalapeno1.svg"),
      loadImage("/assets/images/character/Jalapeno2.svg"),
      loadImage("/assets/images/character/Jalapeno3.svg"),
      loadImage("/assets/images/character/Jalapeno4.svg"),
      loadImage("/assets/images/character/Jalapeno5.svg"),
      loadImage("/assets/images/character/Jalapeno6.svg"),
      loadImage("/assets/images/character/Jalapeno7.svg"),
      loadImage("/assets/images/character/Jalapeno8.svg"),
      loadImage("/assets/images/character/Jalapeno9.svg"),
    ],
  };
  /*  music = {
    backgroundL1: loadSound("/assets/music/Kitchentheme.mp3"), //placeholder
    backgroundL2: loadSound("/assets/music/Deserttheme.mp3"), //placerholder
    startMenuMusic: loadSound("/assets/music/Menutheme.mp3"), //placeholder
  }; */
  entityImages = {
    platformImg: loadImage("/assets/images/block2.png"),
    obstacleImg: loadImage("/assets/images/box.png"),
  };
  sfx = {
    explodeSound: loadSound("/assets/SFX/explosion.wav"),
    // explodeSound: loadSound("/assets/music/mystery.mp3"),
  };

  backgroundImage = {
    backgroundDesert: loadImage("/assets/images/bakgrund1.png"), //variabler som håller våra bilder
    backgroundKitchen: loadImage("/assets/images/kitchenbackground.png"),
  };
  progrees = {
    progressbar: loadImage("assets/images/progressbar.png"),
  };

  startImage = {
    playerPreview: loadImage("/assets/images/startImg.png"),
  };
  goalImage = {
    goal: loadImage("/assets/images/goal.png"),
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  /* music.backgroundL1.setVolume(0.8); */
  sfx.explodeSound.setVolume(0.1);
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
