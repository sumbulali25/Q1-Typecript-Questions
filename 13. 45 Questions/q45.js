//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var carInfo = function (manf, model) {
    var moreInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        moreInfo[_i - 2] = arguments[_i];
    }
    car: {
        return {
            manufecturer: manf,
            model: model,
            moreInfo: moreInfo
        };
    }
};
var carObj = carInfo("Suzuki", "Coure", "White", "1000 CC");
console.log(carObj);
