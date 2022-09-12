leftWristX = 0;
rightWristX = 0
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(560, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
       // console.log("Left wrist = "+ leftWristX +"Right Wrist = "+ rightWristX +"difference = "+ difference);
    }
}

function draw() {
    background('#89CFF0');
    textSize(difference);
    fill('#e6cc00');
    text('Yaj', 40, 300);
}

