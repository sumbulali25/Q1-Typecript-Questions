//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var favourPizza = ["Chicken Tikka", "Supremo Chicken", "Malai Tikka"];
console.log(favourPizza);
for (var i = 0; i < favourPizza.length; i++) {
    console.log("I like ".concat(favourPizza[i], " pizza"));
}
console.log("\nHow much do you like Pizza?");
var rateOutput = ["Scrumpticious", "Delicious", "Good"];
for (var i = 0; i < rateOutput.length; i++) {
    console.log("The pizza was ".concat(rateOutput[i]));
}
