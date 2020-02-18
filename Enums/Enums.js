// Number enums
var enumsNumber;
(function (enumsNumber) {
    enumsNumber[enumsNumber["N1"] = 0] = "N1";
    enumsNumber[enumsNumber["N2"] = 1] = "N2";
    enumsNumber[enumsNumber["N3"] = 2] = "N3";
})(enumsNumber || (enumsNumber = {}));

function foo(value) {
    if (value === 'hello' || value === ' xinchao') {
        return enumsNumber.N1;
    }
}
// first value enums
var enumsNumber1;
(function (enumsNumber1) {
    enumsNumber1[enumsNumber1["N1"] = 1] = "N1";
    enumsNumber1[enumsNumber1["N2"] = 2] = "N2";
    enumsNumber1[enumsNumber1["N3"] = 3] = "N3";
})(enumsNumber1 || (enumsNumber1 = {}));
var enumsNumber2;
(function (enumsNumber2) {
    enumsNumber2[enumsNumber2["N1"] = 1] = "N1";
    enumsNumber2[enumsNumber2["N2"] = 4] = "N2";
    enumsNumber2[enumsNumber2["N3"] = 6] = "N3";
})(enumsNumber2 || (enumsNumber2 = {}));
// Computed Number
var enumsNumber3;
(function (enumsNumber3) {
    enumsNumber3[enumsNumber3["N2"] = 0] = "N2";
    enumsNumber3[enumsNumber3["N4"] = 1] = "N4";
    enumsNumber3[enumsNumber3["N1"] = returnNum(5)] = "N1";
    enumsNumber3[enumsNumber3["N3"] = returnNum(5)] = "N3";
    enumsNumber3[enumsNumber3["N5"] = enumsNumber3.N3 * 5] = "N5";
})(enumsNumber3 || (enumsNumber3 = {}));
function returnNum(value) {
    return 5 * value;
}
function foo2(value) {
    if (value === 'easy') {
        return enumsNumber3.N5;
    }
    return enumsNumber3.N3;
}
console.log(foo2('easy'));
// String enums
var enumsString;
(function (enumsString) {
    enumsString["S1"] = "HELLO";
    enumsString["S2"] = "WORD";
    enumsString["S3"] = "HAPPY";
})(enumsString || (enumsString = {}));
//Heterogeneous Enum
var ennumsHeterogeneous;
(function (ennumsHeterogeneous) {
    ennumsHeterogeneous[ennumsHeterogeneous["H1"] = 0] = "H1";
    ennumsHeterogeneous["H2"] = "HELLO";
    ennumsHeterogeneous[ennumsHeterogeneous["H3"] = 3] = "H3";
})(ennumsHeterogeneous || (ennumsHeterogeneous = {}));

// Reverse mapping
var reverseEnum;
(function (reverseEnum) {
    reverseEnum["R1"] = "HELLO";
    reverseEnum["R2"] = "COME";
    reverseEnum[reverseEnum["R3"] = 0] = "R3";
    reverseEnum[reverseEnum["R4"] = 1] = "R4";
    reverseEnum[reverseEnum["R5"] = 2] = "R5";
})(reverseEnum || (reverseEnum = {}));
console.log(reverseEnum);
console.log(reverseEnum['0']);
console.log(reverseEnum['COME']);
console.log(reverseEnum.R1);
console.log(reverseEnum['R2']);
console.log(reverseEnum['HELLO']);
console.log(reverseEnum[3]);
// console.log(reverseEnum[1]);
