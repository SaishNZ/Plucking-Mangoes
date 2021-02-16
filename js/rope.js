class Rope{
    constructor(body1, point2) {
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.01
        }
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
        this.p = point2;
    }

    display() {
       
        if(this.body.bodyA) {

            push()
            strokeWeight(4);
            stroke("#301608");
            line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.p.x, this.p.y); 
            pop();
        } 
    }

    fly() {
       this.body.bodyA = null;  
    }
}