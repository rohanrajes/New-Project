function setup()
{
    canvas = createCanvas(300,270);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,300,270);
}