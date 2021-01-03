class Tree{
constructor(x,y,width,height){
var options={
    isStatic:true
}
    this.body=Bodies.rectangle(x,y,width,height);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image = loadImage("Plucking_mangoes/tree.png");
    World.add(world,this.body)

}
display(){
    imageMode(CENTER)
    fill("green");  
    image(this.image,this.x,this.y,this.width,this.height);

}

}