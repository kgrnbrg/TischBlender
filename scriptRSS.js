
var r,g,b;
var projs = [];
var cv;

function setup(){
    cv = createCanvas(windowWidth,windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
    background(r,g,b);
}   

function Jitter(x,y){
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50,100);
//    this.speed = 5;
    
//    this.move = function(){
//       this.x += random(-this.speed, this.speed);
//        this.y += random(-this.speed, this.speed);
//        
//       
//  },
    this.display = function(r,g,b) {
        stroke(.5);
        fill(r,g,b);
        ellipse(this.x, this.y, this.diameter,this.diameter);
        
    },
    this.clicked = function(){
       var d = dist(mouseX, mouseY, this.x, this.y);
       if (d < 25 ) {
        return true;
       this.color = color(255,0,200);   
     }
        return false;
        
   },
    this.changeColor = function(r,g,b){
        this.display(r,g,b);
        console.log("one circle")
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
    senback(data);
    vizViz(data);
    //mousePressed(data);
     
for (i=0; i < data.length; i++){
        var k = data[i].link;
        console.log("data:" + data[i]);  
        console.log(k);
    }  
});

function senback(data){
    something = data;
    console.log(data);
      for (var i=0; i<something.length; i++) {
        projs.push(new Jitter()); 
          
  }
    
}

function vizViz(data){
    for (i=0; i < data.length; i++){
        var r = random(255);
        var g = random(255);
        var b = random(255);
        projs[i].display(r,g,b);
   
         }
       }

function mousePressed(){
    console.log(projs.length)
        for(var i in projs){
            console.log(projs[i].clicked())
            if(projs[i].clicked()){
                var r = random(255);
                var g = random(255);
                var b = random(255);
                projs[i].changeColor(r,g,b);
            }
        }
    }
function draw(){
//    for(var i in projs){
//     projs[i].move();
     //projs[i].display();
    //}
}




