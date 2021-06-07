noseX=0;
nosey=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/fR7c0HKD/moustache-PNG8.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}
function modelloaded(){
    console.log("Pose is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-14;
        nosey=results[0].pose.nose.y+1;
        console.log("nose x = "+ noseX );
        console.log("nose y = "+ nosey);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,nosey,30,30)
}
function take_snapshot(){
    save('myFilterImage.png');
}