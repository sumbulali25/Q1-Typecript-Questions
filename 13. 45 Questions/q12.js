//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Sana", "Maria", "Mobeen", "Rehmat", "Saima"];
var greetingMessage = "Hi, ";
for (var i = 0; i < names.length; i++) {
    var personalizedMessage = "".concat(greetingMessage).concat(names[i], "!");
    console.log(personalizedMessage);
}
