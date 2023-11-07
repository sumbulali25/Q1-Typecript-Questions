//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var makeShirt = function (size, msg) {
    if (size === void 0) { size = "large"; }
    console.log("Size of Shirt is \"".concat(size, "\" with Message Printed on shirt as \"").concat(msg, "\""));
};
// Calling Shirt Functions
makeShirt("Large", "I Love TypeScript");
makeShirt("Medium", "I Love TypeScript");
makeShirt("XL", "TypeScript is Superset of JavaScript");
