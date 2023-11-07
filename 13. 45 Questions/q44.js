//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(flavors) {
    console.log("You ordered Sandwich with:");
    for (var _i = 0, flavors_1 = flavors; _i < flavors_1.length; _i++) {
        var userFlavor = flavors_1[_i];
        console.log("* ".concat(userFlavor));
    }
}
makeSandwich(["Cheese", "Pepproni", "Lettuce"]);
makeSandwich(["Onion", "Bacon", "Chicken"]);
makeSandwich(["Chipotle", "Olive", "Mushroom"]);
