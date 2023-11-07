//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_Album(artist, album) {
    var make_Album1 = {
        artist: artist,
        album: album
    };
    return make_Album1;
}
var dict01 = make_Album("Atif Aslam", "Jal");
var dict02 = make_Album("Salim-Suleman", "Bhoomi 2023");
var dict03 = make_Album("A.R Rehman", "Tu He Re");
// console.log(`${dict01}\n${dict02}\n${dict03}`);
console.log(dict01);
console.log(dict02);
console.log(dict03);
