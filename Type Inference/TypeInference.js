var a = 3;
console.log(typeof a); // number
var arr = [1, 2, null];
console.log(typeof arr); // Object
// Best common type
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Rhino = /** @class */ (function () {
    function Rhino() {
    }
    return Rhino;
}());
var Elephant = /** @class */ (function () {
    function Elephant() {
    }
    return Elephant;
}());
var Snake = /** @class */ (function () {
    function Snake() {
    }
    return Snake;
}());
var zoo = [new Rhino(), new Elephant(), new Snake()];
console.log(typeof zoo);
//Contextual Typing
var array = ['hello', 1, 2, "hihi", "hahaha", "easy game"];
console.log(typeof array);
array.forEach(function (item) {
    console.log(typeof item);
});
