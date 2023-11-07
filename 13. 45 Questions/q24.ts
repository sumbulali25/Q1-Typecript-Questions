//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var day:string="Sunday";
console.log(day=='Sunday');
console.log(day!=='Sunday');
console.log("\n______________\n")


// Lowercase Test
var month:string="July";
console.log(month.toLowerCase()=="July");
console.log("\n______________\n")

// Numerical Tests
var num1:number=5;
console.log(num1==4);
console.log(num1!==4);
console.log(num1<4);
console.log(num1>4);
console.log(num1<=4);
console.log(num1>=4);
console.log("\n______________\n")

// AND and OR Operator Tests
var val:number=5;
console.log(num>4 && num<10);
console.log(num>4 || num==5);
console.log("\n______________\n")


// Test item is or not in array
var items:string[]=["Karachi","Lahore","Multan","Peshawar"];
console.log(items.indexOf("Lahore")!==-1);
console.log(items.indexOf("Sindh")!==-1);
console.log("\n______________\n")