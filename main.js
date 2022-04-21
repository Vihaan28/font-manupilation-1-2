function setup(){
    canvas = createCanvas( 700 , 500);
    canvas.position(800 , 150);

    video = createCapture(VIDEO);
    video.size(700 , 500);

    poseNet=ml5.poseNet(video , Modalloaded);
    poseNet.on('pose' , gotposes);

}

function draw(){

    background("lightcyan");
    }

    function Modalloaded(){
        console.log( " Modal PoseNet Loaded");
    }

function gotposes(results){

    if(results.length > 0 ){
        console.log(results);
    }
}