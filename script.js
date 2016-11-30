var r=random(0,255);
var g=random(0,255);
var b=random(0,255);

var socket;

function setup() { 
  createCanvas(800, 800);
    socket = io.connect('http://localhost:3000');
//   / socket.on(something something);
} 

function draw() { 
  background("#ecf0ff");
	tisch();
	
	bubble();
}

function tisch(){
	fill("#d3d3d3");
	noStroke();
	//floors
	rect(300,730,200,20)
	rect(300,700,200,20);
	rect(300,670,200,20);
	rect(300,640,200,20);
	rect(300,610,200,20);
	//bottom floor
	rect(300,750,60,20);
	rect(440,750,60,20);
	fill("purple");
	//entrance
	rect(360,750,40,20);
	fill("yellow");
	rect(400,750,40,20);
	

}

function bubble(){
	
	for (var i = 0; i<15; i++){
	fill(random(255), random(255), random(255));
    ellipse(i*65,40,60,60);	
    noStroke();
	noLoop();
	}


}
//
//function prepareFrame() {
//        var ifrm = document.createElement("iframe");
//        ifrm.setAttribute("src", k);
//        ifrm.style.width = "640px";
//        ifrm.style.height = "480px";
//        document.body.appendChild(ifrm);
//    }
//        
//        prepareFrame(); 
 
//function strip(html)
//{
//   var tmp = document.createElement("DIV");
//   tmp.innerHTML = html;
//   return tmp.textContent || tmp.innerText || "";
//} 
