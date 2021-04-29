"use strict";
//d)
for (let i = 0; i < 10; i++) {
    Math.random();
    console.log(Math.random() * 100 + 1);
}
//e) 
var Aufgabe;
(function (Aufgabe) {
    function factorial(n) {
        let result = 1;
        while (n > 1)
            ;
        result *= n;
        n -= 1;
        return result;
    }
    factorial(1);
})(Aufgabe || (Aufgabe = {}));
// //f)
function leapyears() {
    for (let i = 1900; i < 2021; i++) {
        if (i % 100 != 0 && i % 4 == 0 || i % 400 == 0) {
            console.log(i);
        }
    }
}
leapyears();
//Aufgabe 6
//b)
function returnNumbers() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            console.log("Buzz");
        }
        else {
            for (let i = 1; i < 100; i++) {
                console.log(i);
                if (i % 3 == 0 && i % 5 == 0) {
                    console.log("FizzBuzz");
                }
            }
        }
    }
}
//c)
// for (let i: number = 1; i < 100; i++) {
//     console.log(i);
//     if (i % 3 == 0 && i % 5 == 0 ) {
//         console.log("FizzBuzz");
//     }
// }
//a)
for (let hash = "#"; hash.length <= 7; hash += "#") {
    console.log(hash);
}
//d)
function schachbrett() {
    let zeichen = "#";
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            console.log("" + zeichen + "" + zeichen + "" + zeichen + "" + "\n");
        }
        else {
            console.log(zeichen + "" + zeichen + "" + zeichen + "" + zeichen + "\n");
        }
    }
}
schachbrett();
//e)
let hashtag = "#";
let empty = "";
let schachbrett1 = "";
function schachbrett2(seitenlaenge) {
    for (let i = 0; i < seitenlaenge; i++) {
        if (i % 2 == 0) {
            for (let i = 0; i < seitenlaenge / 2; i++) {
                schachbrett1 = schachbrett1 + empty;
                schachbrett1 += hashtag;
            }
        }
        else {
            for (let i = 0; i < seitenlaenge / 2; i++) {
                schachbrett1 += hashtag;
                schachbrett1 = schachbrett1 + empty;
            }
        }
        schachbrett1 = schachbrett1 + "\n";
    }
    console.log(schachbrett1);
}
schachbrett2(5);
//# sourceMappingURL=script3.js.map