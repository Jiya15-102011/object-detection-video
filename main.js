x="";
img="";
status1="";
object=[];

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    v=createCapture(VIDEO);
    v.size(380,380)
    v.hide();
}
function s(){
    x=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("y").innerHTML="Status: Detecting object";
}
function modelLoaded(){
    console.log("Model is loaded");
    status1=true;
    
}

function answer(error,result){
if(error){
    console.log(error);
}
console.log(result);
object=result;
}
function draw(){
    image(v,0,0,380,380);

   if(status1 != ""){
    r=random(255);
    g=random(255);
    b=random(255);
    x.detect(v,answer);
    for(var i=0;i<object.length;i++){
    document.getElementById("y").innerHTML="Status: Object detected";
    document.getElementById("a").innerHTML="Number or objecr detected are: "+object.length;
    fill(r,g,b);
    noFill();
    stroke(r,g,b);
    y=floor(object[i].confidence*100);
text(object[i].label+" "+y+"%",object[i].x+15,object[i].y+15);
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}