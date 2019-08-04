// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// 1. Prediction: undefined Output: undefined
// Given: 
console.log(hello);                                   
var hello = 'world';  

//After Hoisting
// var hello;
// console.log(hello);
// hello = 'world';

// 2. Prediction: magnet Output: magnet
// Given:
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// After Hoisting:
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }



//3. Prediction: only okay, super cool Output: super cool
// Given: 
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//4. Prediction: chicken, half-chicken
// Given:
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// // After Hoisting: 
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     var food;
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// 5. Prediction: chicken, fish Output: error
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// // After Hoisting
// mean();
// console.log(food);
// var mean = function() {
//     var food;
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// 6. Prediction: undefined, rock, r&b, disco Output: undefined, rock, r&b, disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// // After Hoisting:
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     var genre;
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

//7. Prediction: san jose, seattle, burbank, san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// // After Hoisting:
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     var dojo;
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

