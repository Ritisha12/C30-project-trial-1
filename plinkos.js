class Plinkos{
    constructor(x,y,radius){
        var options={ 
        restitution:1, 
        friction:0,
        density:0.8,
        isStatic:true
         }
    
    this.body=Bodies.circle(x,y,this.radius,options) 
    this.radius=10
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    ellipseMode(CENTER);
    fill("white")
    translate(pos.x,pos.y)
    rotate(angle)
    ellipse(0,0,this.radius,this.radius)
    pop()
    for(var j=40;j<=width;j=j+50){
        plinkos.push(new Plinkos(j,75))
    }
    for(var j=15;j<=width-10;j=j+50){
        plinkos.push(new Plinkos(j,175))
    }
    if(framecount%90===0){
        particles.push(new Particles(random(width/2-10,width,2+10),10,10))
    }
    }
    
    }
   