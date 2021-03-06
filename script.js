
var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];
//------------------- Print users.age when given user.name as an argument --------
function printAgeFromName(usersName) {
    var usersInfo = users;
    for(var user in usersInfo){
        if (usersInfo[user[0]].name == usersName) {
            return usersInfo[user[0]].age;
        }
    }
}
//---Test Cases
console.log(printAgeFromName("John"));
// console.log(printAgeFromName("Michael"));
// console.log(printAgeFromName("David"));


//------- Print the name of the first user ------------------------
console.log(users[0].name);

//------- Print users.name and users.age for all users ------------------------

function nameAndAge(obj) {
    var newUserInfo = obj;
    for(var user in newUserInfo){
        newUserInfo[user[0]].name;
        newUserInfo[user[0]].age;
    }
    return newUserInfo;
}

var newUserObj = nameAndAge(users);
console.log(newUserObj);


