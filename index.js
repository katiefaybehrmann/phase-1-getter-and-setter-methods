// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2;
    }

    get circumference(){
        return Math.PI * (this.radius * 2)
    }

    set circumference(newCircumference){
        let diameter = newCircumference/Math.PI
        this.radius = diameter/2
    }

    get area(){
       return Math.PI * Math.pow(this.radius, 2)
    }

    set area(newArea){
        let sqRadius = newArea/Math.PI
        this.radius = Math.sqrt(sqRadius)
    }
}