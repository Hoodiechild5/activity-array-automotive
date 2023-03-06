
//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule { 
 constructor (make, model, year, mileage, maximumPassengers, maximumSpeed, fuel, numberOfWheels, scheduleService) {
        super(make, model, year, mileage);
        this.maximumPassengers = 6;
        this.maximumSpeed = 160; 
        this.fuel = 10; 
        this.scheduleService = false; 
        this.numberOfWheels = 4;
    }


 speedCheck() {
    if (this.maximumSpeed > 80) {
    console.log("Your Speeding")
    return this.maximumSpeed = ture 
    } else {
        return this.maximumSpeed = false 
    }
}

 start() {
    if (this.fuel > 0) {            
        console.log(" start enigne.");
        return this.started = true
    } else {
        console.log("Empty");
        return this.started = false;
    
    }
 }

 checkService() {
        if (this.mileage > 50000) {            
        return this.scheduleService = true
        } else {
            retun this.scheduleService = false 

        }
 }

}