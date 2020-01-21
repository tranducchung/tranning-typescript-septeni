// Number enums
enum enumsNumber {
    N1,
    N2,
    N3
}

function foo(value: string): enumsNumber {
    if (value === 'hello' || value === ' xinchao') {
        return enumsNumber.N1
    }
}

// first value enums
enum enumsNumber1 {
    N1 = 1,
    N2,
    N3,
}

enum enumsNumber2 {
    N1 = 1,
    N2 = 4,
    N3 = 6
}


// Computed Number

enum enumsNumber3 {
    N2,
    N4,
    N1 = returnNum(5),
    N3 = returnNum(5),
    N5 = N3 * 5,
}

function returnNum(value: number): number {
    return 5 * value
}

function foo2(value: string): enumsNumber3 {
    if (value === 'easy') {
        return enumsNumber3.N5
    }
    return enumsNumber3.N3
}

console.log(foo2('easy'));

// String enums

enum enumsString {
    S1 = 'HELLO',
    S2 = 'WORD',
    S3 = 'HAPPY'
}

//Heterogeneous Enum
enum ennumsHeterogeneous {
    H1,
    H2 = "HELLO",
    H3 = 3,
}

// Reverse mapping
enum reverseEnum {
    R1 = "HELLO",
    R2 = "COME",
    R3 = 0,
    R4 = 1,
    R5
}

console.log(reverseEnum);


console.log(reverseEnum['3']);
console.log(reverseEnum['COME']);
console.log(reverseEnum.R1);
console.log(reverseEnum['R2']);
console.log(reverseEnum['HELLO']);
console.log(reverseEnum[3]);
// console.log(reverseEnum[1]);
