//---- GLOBAL VARIABLES ----//
let game: Game;
let entity: Entity;
let font: {
  gameFont: p5.Font;
};
let backgroundImages: p5.Image[];
let entityImages: {
  platformTopImg: p5.Image;
  platformBottomImg: p5.Image;
  obstacleImgBox: p5.Image;
  obstacleImgCactusLow: p5.Image;
  obstacleImgCactusMedium: p5.Image;
  obstacleImgCactusHigh: p5.Image;
  obstacleImgRoot: p5.Image;
};
let music: {
  backgroundLoop: p5.SoundFile;
};
let playerAnimation: {
  playerAnimation: p5.Image[];
};

let progressBar: {
  progressbar: p5.Image;
};
let menuImage: {
  playerPreview: p5.Image;
  buttonImg: p5.Image;
  menuBackground: p5.Image;
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
function preload() {
  font = {
    gameFont: loadFont("/assets/font/Super_Potato.ttf"),
  };
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

  music = {
    backgroundLoop: loadSound("/assets/music/MariachiAltFaster.mp3"),
  };

  entityImages = {
    platformTopImg: loadImage("/assets/images/platform/platform_block1.png"),
    platformBottomImg: loadImage("/assets/images/platform/platform_block2.png"),
    obstacleImgCactusLow: loadImage("/assets/images/obstacle/cactuslow.png"),
    obstacleImgCactusMedium: loadImage(
      "/assets/images/obstacle/cactusmedium.png"
    ),
    obstacleImgCactusHigh: loadImage("/assets/images/obstacle/cactushigh.png"),
    obstacleImgBox: loadImage("/assets/images/obstacle/obstacle_box1.png"),
    obstacleImgRoot: loadImage("/assets/images/obstacle/rootLow.png"),
  };

  sfx = {
    explodeSound: loadSound("/assets/SFX/explosion.wav"),
  };

  backgroundImages = [
    loadImage("assets/images/background/BG0.png"),
    loadImage("assets/images/background/BG1.png"),
    loadImage("assets/images/background/BG2.png"),
  ];

  progressBar = {
    progressbar: loadImage("assets/images/progressBar/progressBar.png"),
  };

  menuImage = {
    playerPreview: loadImage("/assets/images/menuImg/playerImg.png"),
    buttonImg: loadImage("/assets/images/menuImg/button.png"),
    menuBackground: loadImage("/assets/images/menuImg/menuBackground.png"),
  };
  goalImage = {
    goal: loadImage("/assets/images/goal/pinata.png"),
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  sfx.explodeSound.setVolume(0.1);
  music.backgroundLoop.setVolume(0.1);

  game = new Game();
}

function draw() {
  game.update();
  game.draw();
}
/***  Built in windowResize listener function in P5*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
