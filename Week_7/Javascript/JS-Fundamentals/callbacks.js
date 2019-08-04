// var ninja = 'Libby';
// setTimeout(function () { console.log(ninja); }, 2000); // run the function defined after 2000 milliseconds
// console.log(ninja);

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout(function myCallbackFunction() {
//     console.log("LATER: ")
//     console.log(ninja, "LATER");
// }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");

// var a = 2;
// var b = function () { console.log("something"); };
// function doSomething(x) {
//     console.log(typeof (x));
// }
// doSomething(a);
// doSomething(b);

// function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     console.log("Pasta is done!");
//     return pasta + " Pasta! Voila!";
// }
// makePasta("Penne");
// makePasta("Farfalle");

function makePasta(pasta, makeSauce) {
    console.log("Boiling water");
    console.log("Putting " + pasta + " pasta in the water");
    // create a variable for sauce!
    var sauce = makeSauce();          // invoke makeSauce, our callback
    console.log("Mixing sauce");
    console.log("Pasta is done!");
    return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
    console.log("Making Pesto");
    return "pesto";
}
function makeAlfredo() {
    console.log("Making Alfredo");
    return "alfredo";
}
// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));
// notice lack of parentheses after makePesto.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));