//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let userNames:String[]=["Sumbul","Faizaan","Faisal","Malik","Meher","Fadeel"];


    if (!userNames) {
        console.log("We need to find some users!")
    }

    for (let index = 0; index <=5; index++) {

        userNames.pop();

    }


    if (userNames[0]==undefined) {
        console.log("We need to find some users!")
    }