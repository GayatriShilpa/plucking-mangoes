class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
    
        //sling-constraint name
    
            this.sling = Matter.Constraint.create(options);
             World.add(world,this.sling);
        
     
    }

    display(){
        if(this.sling.bodyA){
            var a=this.sling.bodyA.position;
            var b=this.sling.pointB;
            line(a.x,a.y,b.x,b.y)
        }
    }

fly(){
    this.sling.bodyA=null;
}

attach(bodyA){
this.sling.bodyA=bodyA;
}
   
} 