var interator = [1, "string", false];
for (var _i = 0, interator_1 = interator; _i < interator_1.length; _i++) {
    var a = interator_1[_i];
    console.log(a);
}
// Example two
var interatorTwo = ["0", "1", "2"];
for (var _a = 0, interatorTwo_1 = interatorTwo; _a < interatorTwo_1.length; _a++) {
    var j = interatorTwo_1[_a];
    console.log(j);
}
for (var i in interatorTwo) {
    console.log(i);
}
// Example three
// @ts-ignore
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var a in pets) {
    console.log(a); // "species"
}
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet = pets_1[_b];
    console.log(pet); // "Cat", "Dog", "Hamster"
}
