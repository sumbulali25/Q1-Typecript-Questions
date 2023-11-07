//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let favourPizza = ["Chicken Tikka", "Supremo Chicken", "Malai Tikka"];
console.log(favourPizza);

for (let i = 0; i < favourPizza.length; i++) {
    console.log(`I like ${favourPizza[i]} pizza`);
}

console.log(`\nHow much do you like Pizza?`);

let rateOutput = ["Scrumpticious", "Delicious", "Good"];
for (let i = 0; i < rateOutput.length; i++) {
    console.log(`The pizza was ${rateOutput[i]}`)
}