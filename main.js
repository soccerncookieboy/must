mouthx = 0;
mouthy = 0;


function preload(){
    must = loadImage("h.png")
}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("POSENET GOOD!")
}
function draw(){
    image(video, 0, 0, 300, 300)
    image(must, mouthx, mouthy,50,50)
}
function snapshot(){
    save("facialhair.png")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        console.log("mouth x= "+results[0].pose.nose.x)
        console.log("mouth y= "+results[0].pose.nose.y)
        mouthx=results[0].pose.nose.x;
        mouthy=results[0].pose.nose.y+2;
    }
}