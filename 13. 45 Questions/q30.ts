//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let userNames:String[]=["Sumbul","Faizaan","Faisal","Malik","Meher","Fadeel"];
let greetingMSg:String="Welcome to DashBoard!";

for (let index = 0; index < userNames.length; index++) {

    if(userNames[index]=="Admin"){
        console.log("Hello Admin, would you like to se status report?");
    }

    else{
    console.log("Hello "+userNames[index]+", "+greetingMSg);
    }
}