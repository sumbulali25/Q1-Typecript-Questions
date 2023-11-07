//Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["France", "Italy", "Turkey", "London", "Canada"];
console.log(places);
var sortPlaces = __spreadArray([], places, true).sort();
console.log(sortPlaces);
console.log(places);
var revPlaces = __spreadArray([], sortPlaces, true).reverse();
console.log(revPlaces);
console.log(places);
var revMainPlaces = __spreadArray([], places, true).reverse();
console.log(revMainPlaces);
console.log(places);
