//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function city_country (city01:string, country01:string) {
    return (`${city01}, ${country01}`)
}

let pair01 = city_country("Karachi", "Pakistan");
let pair02 = city_country("Paris", "France");
let pair03 = city_country("San Francisco", "USA")

console.log(`${pair01}\n${pair02}\n${pair03}`);