users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

// function userLanguages(user) {
//     for (var i = 0; i < users.length; i++) {
//         // console.log(users[i]['fname'] + " " + users[i]['lname'] + " knows " + users[i]["languages"]);
//         return (users[i]['fname'] + " " + users[i]['lname'] + " knows " + users[i]["languages"]);
//     }
// }

// console.log(userLanguages(users))

function interests(user) {
    for (var i = 0; i < users.length; i++) {
        var result = (users[i]['fname'] + " " + users[i]['lname'] + " is also interested in ")
        for (var key in users[i]["interests"]) {
            console.log(result + users[i]["interests"][key]);
        }
    }
}

interests(users)