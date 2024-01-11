noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/1t50St9w/m-scara-con-la-cara-de-una-rana-o-sapo-52d7c6c528c5a-thumb.png');
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
  console.log('PoseNet está inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-68;
    noseY = results[0].pose.nose.y-64;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 150,150);
}

function take_snapshot(){    
  save('myFilterImage.png');
}