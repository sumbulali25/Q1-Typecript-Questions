//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let greetingList= ["Hareem", "Zaneera", "Daniya", "Riffat"];

function greeting(greetingList:string) {
    console.log(`Dear ${greetingList}, you're invited for the dinner tonight`);
}
greetingList.push("Salma", "Hoor", "Saleem");

// greeting(greetingList[0]);
// greeting(greetingList[1]);
// greeting(greetingList[2]);
// greeting(greetingList[3]);
// greeting(greetingList[4]);
// greeting(greetingList[5]);
// greeting(greetingList[6]);

console.log(`Hey everyone, I am inviting ${greetingList.length} people for dinner tonight`);