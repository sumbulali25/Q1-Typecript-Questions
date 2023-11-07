//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let currentUsers:String[]=["Muhammad","Shoaib","Asif","Ahmed","Saqlain"];
let newUsers:String[]=["Danish","Tabish","Mohib","Ali","Hammad",];

for (let index = 0; index < newUsers.length; index++) {

    if (newUsers[index].toUpperCase()===currentUsers[index].toUpperCase()) {
        console.log(`Dear, ${newUsers[index]} User Name Not available, You have to enter new User Name.`);
    }
    else{
        console.log(`Dear, ${newUsers[index]} User Name is available.`);
    }

}