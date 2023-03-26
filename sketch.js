var res = 1920;
var sizer = 40;
var shader = 35;
var longTile_ = 0.2;
var bigTile_ = 0.25;
var butt;

function setup(){
	// put setup code here
	createCanvas(res,res*9/16);
	background(0);
	noLoop();
	
	butt = createButton('save');
	butt.mousePressed(saver);
	
	stroke(shader-3);
	for( var i = 0; i * sizer < width; i++ ){
		for( var j = 0; j * sizer < height; j++ ){
		
			randomCube(i*sizer, j*sizer);
		
		}
	}
	
}

function saver(){
	
	saveCanvas("randomCubeBG",'jpg')
	
}

function randomCube( x, y ){
	if( random(1) < bigTile_ ){ //cały
		
		fill(random(10)+shader);
		rect(x,y,sizer,sizer);
		
	}else{
		
		if( random(1) < longTile_ ){ //podłużny góra
		
			fill(random(10)+shader);
			rect(x,y,sizer,sizer/2);
		
		}else{
			
			if( random(1) < 0.5 ){ //cały mały góra lewo
				
				fill(random(10)+shader);
				rect(x,y,sizer/2,sizer/2);
				
			}else{
				
				fill(random(10)+shader);
				rect(x,y,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/4,y,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x,y+sizer/4,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/4,y+sizer/4,sizer/4,sizer/4);
				
			}
			
			if( random(1) < 0.5 ){ //cały mały góra prawo
				
				fill(random(10)+shader);
				rect(x+sizer/2,y,sizer/2,sizer/2);
			
			}else{
				
				fill(random(10)+shader);
				rect(x+sizer/2,y,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/2+sizer/4,y,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/2,y+sizer/4,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/2+sizer/4,y+sizer/4,sizer/4,sizer/4);
				
			}
			
		}
		
		if( random(1) < longTile_ ){ //podłużny dół
			
			fill(random(10)+shader);
			rect(x,y+sizer/2,sizer,sizer/2);
			
		}else{
			
			if( random(1) < 0.5 ){ //cały mały dół lewo
			
				fill(random(10)+shader);
				rect(x,y+sizer/2,sizer/2,sizer/2);
			
			}else{
				
				fill(random(10)+shader);
				rect(x,y+sizer/2,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/4,y+sizer/2,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x,y+sizer/2+sizer/4,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/4,y+sizer/2+sizer/4,sizer/4,sizer/4);
				
			}
			
			if( random(1) < 0.5 ){ //cały mały dół prawo
			
				fill(random(10)+shader);
				rect(x+sizer/2,y+sizer/2,sizer/2,sizer/2);
				
			}else{
				
				fill(random(10)+shader);
				rect(x+sizer/2,y+sizer/2,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/2+sizer/4,y+sizer/2,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/2,y+sizer/2+sizer/4,sizer/4,sizer/4);
				fill(random(10)+shader);
				rect(x+sizer/2+sizer/4,y+sizer/2+sizer/4,sizer/4,sizer/4);
				
			}
			
		}
	}
}