//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich (flavors: string[]) {
    console.log("You ordered Sandwich with:");
    for (let userFlavor of flavors) {
    console.log(`* ${userFlavor}`);
    }
}

makeSandwich(["Cheese", "Pepproni", "Lettuce"]);
makeSandwich(["Onion", "Bacon", "Chicken"]);
makeSandwich(["Chipotle", "Olive", "Mushroom"]);