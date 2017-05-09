class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
  }

  greet() {
  	return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

console.log("check value: ", greeter.greeting);
console.log("check method: ", greeter.greet());

//Class Types
interface Drivable{  
    start() : void;
    drive(speed: number): void;
    getPosition(distance : number) : void;
}

class Car implements Drivable {  
    //overriding start method of drivable 
    start() : void {
        console.log('Car is getting started')
    }

    constructor() {
        console.log('inside the vehicle constructor');
    }
//overriding drive method of drivable 
    drive(speed: number): void {
        console.log('driving ' + speed + ' miles per hour');
    }
    
    //overriding getPosition method of drivable 
    
    getPosition(distance : number): void{
        console.log('My position is ' + distance +  'miles from the start');
    }
}



let swiftdzire = new Car();  
 
swiftdzire.start();
swiftdzire.drive(80);
swiftdzire.getPosition(300);


interface Flyable{

fly(distanceFromGround : number) : void;
}
class Helicopter implements Flyable{


//overriding fly method
fly(distanceFromGround : number) : void{
console.log("helicopter is flying"+  distanceFromGround + "miles from the ground");
}
}

let helicopter = new Helicopter();
helicopter.fly(100);
