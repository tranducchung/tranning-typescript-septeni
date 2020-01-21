//Name Function
function foo1(x: string, y: string): number {
    return 4
}

console.log(foo1("hello", "word"));

//Anonymous function
const varFun:  (x: number, y: number) => number = (x,y) => {
    return x + y;
};
console.log(varFun(2, 3));

//Par type any
function foo2(x: any, y: any): number {
    return x + y;
}
console.log(foo2(3,4 ));

//Inferring the types
let foo3: (a: number, b: number) => number =
    (x, y) => { return x + y; };

console.log(foo3(5, 3));

//Optional and Default Parameters

function namePerson1(firstName: string, lastName =  "hello") {
    return firstName + " " + lastName;
}
let name1 = namePerson1("Tran");

console.log(name1);

//when do not fill full par (Option par)
function namePerson2(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}
let name2 = namePerson2("Tran");

console.log(name2);

//Rest Parameters
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");

}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
