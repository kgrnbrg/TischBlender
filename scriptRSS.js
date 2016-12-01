//preload pull data and put it in an object
var r,g,b;
var projs = [];
var cv;
var div; 
var globalDat;
var h1;
function preload(){  //proxy url
    var itp_proxy = "https://itp.nyu.edu/ranch/proxy/proxy.php?mode=native&url=";
//rss url
    var url = "https://itp.nyu.edu/gorilla/wp-json/wp/v2/posts";
    var call = itp_proxy+url;
    

//ajax getting information
$.get(call, function( data ) {
    sendBack(data);
    viz(data);
    console.log(data);
}); 
    
}

function sendBack(data){
    globalDat = data;
      for (var i=0; i<globalDat.length; i++) {
        var x = random(width);
        var y = random(height);
        projs.push(new Jitter(x,y)); 
        
  }
    console.log(projs);
}

function setup(){
    cv = createCanvas(windowWidth,windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
    background(r,g,b);
    h1= createDiv("Tisch Blender");
    h1.style("color", "#ff0000");
    h1.position(30,30);
    h1.style("font-size", "50px");
    h1.style("font-style","Techno");
    div = createDiv("hey");
    div.hide();
    div.position(30,90);
    
}   

function Jitter(x,y){
    
    this.x = x;
    this.y = y;
    this.diameter = random(50,100);
    
    this.display = function(r,g,b) {
        stroke(.5);
        fill(r,g,b);
        ellipse(this.x, this.y, this.diameter,this.diameter);
        
    },
    this.clicked = function(){
        
       var d = dist(mouseX, mouseY, this.x, this.y);
        
       if (d < this.diameter/2 || d < this.diameter/2) {
          
        return true;   
     }
        return false;
        
   },
    this.changeColor = function(r,g,b){
        this.display(r,g,b);
        
    }
}

function viz(data){
    for (i=0; i < projs.length; i++){
        var r = random(255);
        var g = random(255);
        var b = random(255);
        projs[i].display(r,g,b);
     }
}

function mouseClicked(){
        for(var i in projs){
            if(projs[i].clicked()){
                var r = random(255);
                var g = random(255);
                var b = random(255);
                projs[i].changeColor(r,g,b);
                //changing div
                
                div.html(globalDat[i].link);
                div.show();
                console.log(globalDat);
            }
            
        }
    
    }
function draw(){

}




