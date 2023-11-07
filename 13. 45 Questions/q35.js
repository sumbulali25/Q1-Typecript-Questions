//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var favAnimals = ["sheep", "horse", "goat"];
for (var _i = 0, favAnimals_1 = favAnimals; _i < favAnimals_1.length; _i++) {
    var item = favAnimals_1[_i];
    console.log(item);
}
for (var _a = 0, favAnimals_2 = favAnimals; _a < favAnimals_2.length; _a++) {
    var item = favAnimals_2[_a];
    if (item == "sheep") {
        console.log(item + " is a farm Animal.");
    }
    else if (item == "horse") {
        console.log(item + " is use for riding.");
    }
    else if (item == "goat") {
        console.log(item + " leather is used in making shoes.");
    }
}
console.log("All these animals are domestic.");
