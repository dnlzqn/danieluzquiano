function setup(){
   let cnv = createCanvas(windowWidth, windowHeight+200);
   cnv.class('mycanvasclass');
   cnv.id('mycanvasid');
 background(0);
 // var perlin_a = 0;
 // var perlin_b = noise(perlin_a);
 // var perlin_x = map(perlin_b,0,1,0,width);
 // var perlin_y = map(perlin_b,0,1,0,width);
 w = new randomWalker(0,200);
}

function draw() {
   var perlin_a = 0;
 var perlin_b = noise(perlin_a);
 var perlin_x = map(perlin_b,0,1,0,width);
 var perlin_y = map(perlin_b,0,1,0,width);
 w.display();
 w.step();
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

function randomWalker (temptx, tempty) {
 this.x;
 this.y;

 this.tx = temptx;
 this.ty = tempty;
 this.col = 200000000;

 this.step = function() {
   this.x = map(noise(this.tx),0,1,50,width);
   this.y = map(noise(this.ty),0,1,50,height);

   this.tx += 0.0081;
   this.ty += 0.0081;

 }

 this.display = function() {
   this.col += 0.021;
   this.col_perlin = map(noise(this.col),0,1,0,255);
   noStroke();
   this.colornoise = map(noise(0),0,1,0,255);
   fill(this.col_perlin+(mouseX/20),this.colornoise+(mouseY/20),this.x-this.col_perlin-(mouseX/40));
   ellipse(this.x,this.y,map(noise(this.col),0,1,80,(mouseX/3)+(mouseY/3)*1.002));

 }

}