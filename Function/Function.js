//Name Function
function foo1(x, y) {
    return 4;
}
console.log(foo1("hello", "word"));
//Anonymous function
var varFun = function (x, y) {
    return x + y;
};
console.log(varFun(2, 3));
//Par type any
function foo2(x, y) {
    return x + y;
}
console.log(foo2(3, 4));
//Inferring the types
var foo3 = function (x, y) { return x + y; };
console.log(foo3(5, 3));
//Optional and Default Parameters
function namePerson1(firstName, lastName) {
    if (lastName === void 0) { lastName = "hello"; }
    return firstName + " " + lastName;
}
var name1 = namePerson1("Tran");
console.log(name1);
//when do not fill full par (Option par)
function namePerson2(firstName, lastName) {
    return firstName + " " + lastName;
}
var name2 = namePerson2("Tran");
console.log(name2);
//Rest Parameters
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
