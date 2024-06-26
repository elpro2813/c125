var noseX=0
var noseY=0
var bigote
function preload() {
  bigote=loadImage("bigote.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console. log('PoseNet está inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
  console.log(results);
  console.log("nose x = " + results[0].pose.nose.x);
  console.log("nose y = " + results[0].pose.nose.y);
  noseX = results[0].pose.nose.x-20
  noseY = results[0].pose.nose.y
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(bigote, noseX, noseY, 50, 50)
}

function take_snapshot(){    
 save('myFilterImage.png');
}
