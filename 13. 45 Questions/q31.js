//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var userNames = ["Sumbul", "Faizaan", "Faisal", "Malik", "Meher", "Fadeel"];
if (!userNames) {
    console.log("We need to find some users!");
}
for (var index = 0; index <= 5; index++) {
    userNames.pop();
}
if (userNames[0] == undefined) {
    console.log("We need to find some users!");
}
