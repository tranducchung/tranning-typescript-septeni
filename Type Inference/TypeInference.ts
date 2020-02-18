let a = 3;
console.log(typeof a); // number

let arr = [1,2,null];
console.log(typeof arr); // Object


// Best common type
class Animal {
    
}

class Rhino {
    
}

class Elephant {

}

class Snake {

}
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
let zoo2 = [new Rhino(), new Elephant(), new Snake()];
console.log(typeof zoo);

//Contextual Typing
let array = ['hello',1,2,"hihi","hahaha","easy game"];
let array2 = ['hello',"hihi","hahaha","easy game"];
let array3 = [1,2,3,4,5];
console.log(typeof array);

array3.forEach(function (item)  {
    console.log(typeof item)
});

