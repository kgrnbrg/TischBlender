//preload pull data and put it in an object
var r,g,b;
var projs = [];
var cv;
var div; 
var globalDat;
var gDatLink;
var h1;

function preload(){  //proxy url
    var itp_proxy = "https://itp.nyu.edu/ranch/proxy/proxy.php?mode=native&url=";
//rss url
    var url = "https://itp.nyu.edu/gorilla/wp-json/wp/v2/posts?per_page=100";
    var call = itp_proxy+url;
    

//ajax getting information
$.get(call, function( data ) {
    sendBack(data);
    //viz(data);
    console.log(data);
}); 
    
}

function sendBack(data){
    globalDat = data;
      for (var i=0; i<globalDat.length; i++) {
        var x = random(width);
        var y = random(height);
        gDatLink=globalDat[i].link;
        projs.push(new Jitter(x,y)); 
        
  }
    //console.log(projs);
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
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    
    this.x = x;
    this.y = y;
    this.diameter = random(50,100);
    this.speed = 5;
    this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
     },
    
    
    this.display = function() {
        stroke(.5);
        fill(this.r,this.g,this.b);
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
    this.r = r;
    this.g = g;
    this.b = b;   
    }
    
}

//function viz(data){
//    for (i=0; i < projs.length; i++){
//        var r = random(255);
//        var g = random(255);
//        var b = random(255);
//     }
//}

function mouseClicked(){
        for(var i in projs){
            if(projs[i].clicked()){
                var r = random(255);
                var g = random(255);
                var b = random(255);
                 //changing div
                projs[i].changeColor(r,g,b);
            
                
                div.html(globalDat[i].title.rendered);
                div.style("font-size", "50px");
                div.style("font-style","Techno");
                div.show();
                
                console.log(globalDat);
            }
            
        }
    
    }

function draw(){
     for (i=0; i < projs.length; i++){
       projs[i].display();
       projs[i].move();
    }
}

                

      
