//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians:string[]=["John","Ravi","David"];
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