var myString: any; // changed the type of myString to any
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;



function sayHello(name: any) { //changed the type of name to any
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(9));

function fullName(firstName: string, lastName: string, middleName?: string) { // changed middle name to optional parameter
    if (middleName) { //if middle name was provided, pass it to full name
        let fullName = `${firstName} ${middleName} ${lastName}`;
        return fullName;
    } else { // if middle name was not provided, don't pass it to full name
        let fullName = `${firstName} ${lastName}`;
        return fullName;
    }

}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //fixed type, belt -> belts
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Eric", "Fang"); //Ninja takes 2 parameters

// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja("Alan", "Turing"); // changed turing to an instance of the Ninja class

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) { //changed it from programmer.fullName to first name and last name
    return `Ready to whiteboard an algorithm, ${programmer.firstName} ${programmer.lastName}?`
}
// Now this has problems:
console.log(study(turing));

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => { return x * x }; //added return
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => x * y; //added ()
console.log(multiply(4, 5));
// Nor is this working:
var math = (x, y) => { // added {}
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

console.log(math(2, 3));


class Elephant {
    constructor(public age: number) { }
    birthday = () => { //added arrow function
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.