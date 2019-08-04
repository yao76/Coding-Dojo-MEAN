// Traveling// Objectives:
// Start building a simple game that can be played in the browser's console.
// Create a player object that points to a location on the map.
// Have the player move by changing the player's pointer depending on user input.


var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"}; 
var bees = { character: "Bees"}; 
var owl = { character: "Owl"}; 
var christopher = { character: "Christopher Robin"}; 
var rabbit = { character: "Rabbit"}; 
var gopher = { character: "Gopher"}; 
var kanga = { character: "Kanga"}; 
var eeyore = { character: "Eeyore"}; 
var heffalumps = { character: "Heffalumps"}; 

tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object

pooh.north = christopher;
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;

piglet.north = owl;
piglet.east = pooh;

bees.north = rabbit;
bees.west = pooh;

owl.south = piglet;
owl.east = christopher;

christopher.north = kanga;
christopher.south = pooh;
christopher.west = owl;
christopher.east = rabbit;

rabbit.south = bees;
rabbit.west = christopher;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.north = eeyore;
kanga.south = christopher;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;

var player = {
    location: tigger
}

// function move(dir) {
//     if (dir == "north") {
//         if (player.location.north == null) {
//             console.log("Cannot move north");
//         }

//         else {
//             player.location = player.location.north;
//             console.log("You are now at " + player.location.character + "'s house")
//         }
//     }
// }

// move("north");