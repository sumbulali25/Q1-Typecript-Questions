var currentUsers = ["Muhammad", "Shoaib", "Asif", "Ahmed", "Saqlain"];
var newUsers = ["Danish", "Tabish", "Mohib", "Ali", "Hammad",];
for (var index = 0; index < newUsers.length; index++) {
    if (newUsers[index].toUpperCase() === currentUsers[index].toUpperCase()) {
        console.log("Dear, ".concat(newUsers[index], " User Name Not available, You have to enter new User Name."));
    }
    else {
        console.log("Dear, ".concat(newUsers[index], " User Name is available."));
    }
}
