
var r,g,b;
var projs = [];
function setup(){
    createCanvas(windowWidth,windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
    background(r,g,b);
    
    for (var i=0; i<50; i++) {
        projs.push(new Jitter());   
  }
}   

function Jitter(x,y){
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50,100);
    this.speed = 5;
    this.move = function(){
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
  };
    this.display = function() {
        stroke(.5);
        fill(r*2,g*2,b*2);
        ellipse(this.x, this.y, this.diameter,   this.diameter);
    };
    this.clicked = function(){
       var d = dist(mouseX, mouseY, this.x, this.y);
       if (d < 24) {
       this.color = color(255,0,200);
     }
   }
}

//proxy url
var itp_proxy = "https://itp.nyu.edu/ranch/proxy/proxy.php?mode=native&url=";
//rss url
var url = "https://itp.nyu.edu/gorilla/wp-json/wp/v2/posts";
var call = itp_proxy+url;
var something;

//ajax getting information
$.get(call, function( data ) {
      console.log(typeof(data));
    senback(data);
    vizViz(data);
    mousePressed(data);
     
for (i=0; i < data.length; i++){
        var k = data[i].link;
        console.log("data:" + data[i]);  
        console.log(k);
    }  
});

function senback(data){
    something = data;
    console.log(data);
    
}

function vizViz(data){
    for (i=0; i < data.length; i++){
        projs[i].move();
        projs[i].display();
        
         }
       }
function mousePressed(data) {
  for (var i = 0; i < something.length; i++) {
    projs[i].clicked();
    console.log("clicked");
  }
}



