//---- GLOBAL VARIABLES ----//
// Har kvar davids mystery music för att visa vart vi kan importera ljud//
let game: Game;
let entity: Entity;
let entityImages: {
  platformImg: p5.Image;
  obstacleImg: p5.Image;
  //pJumpImg: p5.Image;
};
let music: {
  backgroundL1: p5.SoundFile;
  backgroundL2: p5.SoundFile;
  startMenuMusic: p5.SoundFile;
};
let playerAnimation: {
  playerAnimation: p5.Image[];
};
// let backgroundImage: {
//   //våra bilder är p5 images
//   backgroundDesert: p5.Image;
//   backgroundKitchen: p5.Image;
// };

// Declare backgroundImages array
let backgroundImages: p5.Image[];
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
      loadImage("/assets/images/character/jalapeno_2.svg"), //removed the first image here because of a "jump" in design, i will leave it in folder in case
      loadImage("/assets/images/character/jalapeno_2.svg"),
      loadImage("/assets/images/character/jalapeno_3.svg"),
      loadImage("/assets/images/character/jalapeno_3.svg"),
      loadImage("/assets/images/character/jalapeno_4.svg"),
      loadImage("/assets/images/character/jalapeno_5.svg"),
      loadImage("/assets/images/character/jalapeno_5.svg"),
      loadImage("/assets/images/character/jalapeno_6.svg"),
      loadImage("/assets/images/character/jalapeno_6.svg"),
      loadImage("/assets/images/character/jalapeno_7.svg"),
      loadImage("/assets/images/character/jalapeno_8.svg"),
      loadImage("/assets/images/character/jalapeno_9.svg"),
      loadImage("/assets/images/character/jalapeno_10.svg"),
      loadImage("/assets/images/character/jalapeno_11.svg"),
      loadImage("/assets/images/character/jalapeno_12.svg"),
      loadImage("/assets/images/character/jalapeno_13.svg"),
      loadImage("/assets/images/character/jalapeno_13.svg"),
      loadImage("/assets/images/character/jalapeno_14.svg"),
      loadImage("/assets/images/character/jalapeno_15.svg"),
      loadImage("/assets/images/character/jalapeno_16.svg"),
    ],
  };
  /*  music = {
    backgroundL1: loadSound("/assets/music/Kitchentheme.mp3"), //placeholder
    backgroundL2: loadSound("/assets/music/Deserttheme.mp3"), //placerholder
    startMenuMusic: loadSound("/assets/music/Menutheme.mp3"), //placeholder
  }; */
  entityImages = {
    platformImg: loadImage("/assets/images/platform/plattformbrun.png"),
    obstacleImg: loadImage("/assets/images/box.png"),
    // pJumpImg: loadImage("/assets/images/platform/platformjump.png"),
  };
  sfx = {
    explodeSound: loadSound("/assets/SFX/explosion.wav"),
    // explodeSound: loadSound("/assets/music/mystery.mp3"),
  };

  backgroundImages = [
    //{
    // backgroundDesert: loadImage("/assets/images/bakgrund1.png"), //variabler som håller våra bilder
    // backgroundKitchen: loadImage("/assets/images/kitchenbackground.png"),
    loadImage("assets/images/BG/mainback.png"),
    loadImage("assets/images/BG/secondbg.png"),
    loadImage("assets/images/BG/firstbg.png"),

    //
  ];
  progrees = {
    progressbar: loadImage("assets/images/progressbar.svg"),
  };

  startImage = {
    playerPreview: loadImage("/assets/images/character/jalapenodemo.png"),
  };
  goalImage = {
    goal: loadImage("/assets/images/pinata.png"),
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
  // Set up the parallax background
}

function draw() {
  // Clear the background
  background(255);

  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
