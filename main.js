song = "";
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is intialized");
}
function gotPoses(results){
    if(results.length > 0){
      console.log(results);
    }
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song = loadSound("music.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}