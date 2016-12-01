
var r,g,b;
var projs = [];
var cv;
var json;
function setup(){
    cv = createCanvas(windowWidth,windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
    background(r,g,b);
    json = {};
}   

function Jitter(x,y){
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50,100);
    
    this.display = function(r,g,b) {
        stroke(.5);
        fill(r,g,b);
        rect(this.x, this.y, this.diameter,this.diameter);
        
    },
    this.clicked = function(){
       var d = dist(mouseX, mouseY, this.x, this.y);
       if (d < 40 ) {
        return true;
       this.color = color(255,0,200);   
     }
        return false;
        
   },
    this.changeColor = function(r,g,b){
        this.display(r,g,b);
        
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
    console.log(data);

});
    
// for (i=0; i < data.length; i++){
//   div = data[i].link + ;
     
 //}
//        var k = data[i].link;
//        console.log("data:" + data[i]);  
//        console.log(k);
 // }  


function senback(data){
    something = data;
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

}




