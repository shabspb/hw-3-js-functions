// 1) Write a function `splitAndMerge`

function splitAndMerge(str, sp) {
    return str.split(' ').join('').split('').join(sp);
}

console.log(splitAndMerge("My name is John", " ")); // should return "M y n a m e i s J o h n"  
console.log(splitAndMerge("Hello World!", ",")); // should return "H,e,l,l,o W,o,r,l,d,!"

// 2) Write a function `convert`

function convert(hash) {
    var array = [];

    for (var i in hash) {
        array.push([i, hash[i]]);
    }
    return array;
}

console.log(convert({
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
})); // should be converted into [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing

function toCamelCase(str) {
    var splitArr = str.split('');

    for (var i = 0; i < splitArr.length; i++) {
        if (splitArr[i] === '-' || splitArr[i] === '_') {
            splitArr.splice(i, 2, splitArr[i + 1].toUpperCase());
        }
    }
    return splitArr.join('');
}

console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"

// 4) Write a function that takes a sentence (string) and reverses each word in the sentence

function reverseEachWord(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log(reverseEachWord(" A fun little challenge! ")); // => " A nuf elttil !egnellahc "

// 5) Write a function `stringExpansion`

function stringExpansion(str) {
    var strExp = '';
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            for (var j = 1; j < str[i]; j++) {
                if (isNaN(str[i + 1])) strExp += str[i + 1];
            }
        } else {
            strExp += str[i];
        }
    }
    return strExp;
}

console.log(stringExpansion('3D2a5d2f')); // === 'DDDaadddddff'
console.log(stringExpansion('3d332f2a')); // === 'dddffaa'
console.log(stringExpansion('abcde')); // === 'abcde'

// 6) Write `largest` and `smallest` functions

function largest() {
    return Math.max.apply(null, arguments);
}

function smallest() {
    return Math.min.apply(null, arguments);
}

console.log(largest(2, 0.1, -5, 100, 3)); // 100 
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

// 7) Write function `transform`

function transform(array) {
    return array.map(function (elem) {
        return function () {
            return elem;
        };
    });
}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40 
console.log(newArray[4]()); // should return 50

// 8) Write function sum

function sum() {
    if (arguments.length === 0) return 0;
    var args = Array.prototype.slice.call(arguments);
    return args[0] + sum.apply(null, args.slice(1));
}
console.log(sum(1, 3, 5, 7)); //should return 16

// 9) Write function `countDown`

function countDown(num) {
    return setInterval(function () {
        if (num < 0) clearInterval();
        else {
            console.log(num);
            num--;
        }
    }, 1000);
}

console.log(countDown(3)); // 3, 2, 1, 0

// 10) Write a polyfill for a .bind() function and save it in `Function.prototype.myBind()`

Function.prototype.myBind = function (context) {
    var fn = this;
    var bindArgs = Array.prototype.slice.call(arguments, 1);
    return function () {
        var fnArgs = Array.prototype.slice.call(arguments);
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};

function addPropToNumber(number) {
    return this.prop + number;
}
var bound = addPropToNumber.myBind({
    prop: 9
});
console.log(bound(1)); // 10