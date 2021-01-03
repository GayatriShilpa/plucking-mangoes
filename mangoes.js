class Mangoes{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        
       this.body=Bodies.circle(x,y,radius,options);
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.image=loadImage("Plucking_mangoes/mango.png")
      

       World.add(world,this.body);
       }   
   
   
   display(){
      
       push ();
       translate(this.body.position.x,this.body.position.y);
       imageMode(CENTER);
       image(this.image,0,0,50,50);
       pop ();
   }
   }