var greetingList1 = ["Ali", "Haris", "Rafay", "Hassan"];
function greeting(greetingList1) {
    console.log("Dear ".concat(greetingList1, ", you're invited for the dinner tonight"));
}
greetingList1.push("Daniyal", "Rahim", "Sultan");
greeting(greetingList1[0]);
greeting(greetingList1[1]);
greeting(greetingList1[2]);
greeting(greetingList1[3]);
greeting(greetingList1[4]);
greeting(greetingList1[5]);
greeting(greetingList1[6]);
console.log("Sadly, the bigger table is not available on time, only two people i can invite for the dinner tonight");
greetingList1.shift();
greetingList1.shift();
greetingList1.shift();
greetingList1.pop();
greetingList1.pop();
