//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var greetingList = ["Ali", "Haris", "Rafay", "Hassan"];
function greeting(greetingList) {
    console.log("Dear ".concat(greetingList, ", you're invited for the dinner tonight"));
}
greetingList.push("Daniyal", "Rahim", "Sultan");
// greeting(greetingList[0]);
// greeting(greetingList[1]);
// greeting(greetingList[2]);
// greeting(greetingList[3]);
// greeting(greetingList[4]);
// greeting(greetingList[5]);
// greeting(greetingList[6]);
console.log("Hey everyone, I am inviting ".concat(greetingList.length, " people for dinner tonight"));
