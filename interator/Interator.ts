const interator: any[] = [1,"string",false];

for(let a of interator) {
    console.log(a)
}

// Example two

const interatorTwo: string[] = ["0","1","2"];

for (let j of interatorTwo) {
    console.log(j)
}

for(let i in interatorTwo) {
    console.log(i)
}

// Example three

// @ts-ignore
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let a in pets) {
    console.log(a); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}



