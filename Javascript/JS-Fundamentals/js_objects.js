//Challenge 1
//Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

function printStudents() {
    let students = [
        { name: 'Remy', cohort: 'Jan' },
        { name: 'Genevieve', cohort: 'March' },
        { name: 'Chuck', cohort: 'Jan' },
        { name: 'Osmund', cohort: 'June' },
        { name: 'Nikki', cohort: 'June' },
        { name: 'Boris', cohort: 'June' }
    ];

    students.forEach(function (student) {
        console.log("Name: " + student.name + ", Cohort: " + student.cohort);
    })

}
printStudents();

//Challenge 2
//Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

function printNameLength(){
    let users = {
        employees: [
            { 'first_name': 'Miguel', 'last_name': 'Jones' },
            { 'first_name': 'Ernie', 'last_name': 'Bertson' },
            { 'first_name': 'Nora', 'last_name': 'Lu' },
            { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
        ],
        managers: [
            { 'first_name': 'Lillian', 'last_name': 'Chambers' },
            { 'first_name': 'Gordon', 'last_name': 'Poe' }
        ]
    };
    
    console.log("EMPLOYEES")
    for (var i = 0;  i < users['employees'].length; i++) {
        console.log(i+1 + " - " + users['employees'][i]['first_name']  + " " +  users['employees'][i]['last_name'] + " - " +(users['employees'][i]['first_name'].length + users['employees'][i]['last_name'].length));
    }

    console.log("MANAGERS")
    for (var i = 0;  i < users['managers'].length; i++) {
        console.log(i+1 + " - " + users['managers'][i]['first_name']  + " " +  users['managers'][i]['last_name'] + " - " +(users['managers'][i]['first_name'].length + users['managers'][i]['last_name'].length));
    }
}

printNameLength();
