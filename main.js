status = "";
value_from_input_box = "";
objects = [];
results = [];
synth = "";

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function draw()
{
    image(video,0,0,480,380);

}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    value_from_input_box = document.getElementById("input_box").value;

}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    if(results)
    {
        console.log(results);
        objects = results;  
    }
}