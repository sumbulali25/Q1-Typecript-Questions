//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians:string[]=["Tim","Robert","Harry"];
const showMagician=(magArr:string[])=>{

    for (const item of magArr) {
        console.log(item);
    }
}

showMagician(magicians);


// Modifies magicians name to add Great
const makeGreat=()=>{

    for (let index = 0; index < magicians.length; index++) {

        magicians[index]="Great "+magicians[index];
    }
}

makeGreat();
showMagician(magicians);