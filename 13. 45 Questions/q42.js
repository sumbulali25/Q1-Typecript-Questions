//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Tim", "Robert", "Harry"];
var showMagician = function (magArr) {
    for (var _i = 0, magArr_1 = magArr; _i < magArr_1.length; _i++) {
        var item = magArr_1[_i];
        console.log(item);
    }
};
showMagician(magicians);
// Modifies magicians name to add Great
var makeGreat = function () {
    for (var index = 0; index < magicians.length; index++) {
        magicians[index] = "Great " + magicians[index];
    }
};
makeGreat();
showMagician(magicians);
