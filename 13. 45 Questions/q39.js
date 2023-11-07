//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city01, country01) {
    return ("".concat(city01, ", ").concat(country01));
}
var pair01 = city_country("Karachi", "Pakistan");
var pair02 = city_country("Paris", "France");
var pair03 = city_country("San Francisco", "USA");
console.log("".concat(pair01, "\n").concat(pair02, "\n").concat(pair03));
