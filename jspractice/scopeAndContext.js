let john = {
    firstname: "John",
    lastName:   "Doe", 
    driveCar() {
        function imAFunctionNotAMethod() {
            console.log(this)
        }
        /*this method has no specified reference*/ 
        imAFunctionNotAMethod() /*refers to global aka window object*/
        console.log(this.firstname + " " + this.lastName + " is Driving a car.")
    }
}

/*refers to john object*/
john.driveCar()

function breathe() {
    console.log(this.firstname + " " + this.lastName + " took a breath.")
}

breathe.call(john)

