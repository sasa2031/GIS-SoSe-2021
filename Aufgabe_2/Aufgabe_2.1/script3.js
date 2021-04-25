"use strict";
//d)
for (let i = 0; i < 10; i++) {
    Math.random();
    console.log(Math.random() * 100 + 1);
}
//e)
function factorial() {
    let n = 1;
    do {
        n = n * (n + 1);
    } while (n < 1);
    console.log(n);
}
factorial();
//f)
function leapyears() {
    for (let i = 1900; i < 2021; i++) {
        if (i % 4 == 0 && i % 100 != 0 && i % 400 == 0) {
            console.log(i);
        }
    }
    leapyears();
}
//Aufgabe 6
//b)
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    }
}
//c)
for (let i = 1; i < 100; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
}
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
        schachbrett();
    }
    //e)-> Ich habe hier leider nur einen Ansatz. Bin nicht weitergekommen :(
    let zeichen2 = "#";
    let row;
    let hoehe = 10;
    function schachbrett2(_row, hoehe) {
        for (let i = 0; i < hoehe; i++) {
            if (i % 2 == 0) {
                console.log(" " + zeichen2 + " " + zeichen2 + " " + zeichen2 + " " + zeichen2 + "\n");
            }
            else {
                console.log(zeichen2 + " " + zeichen2 + " " + zeichen2 + " " + zeichen2 + "\n");
            }
        }
    }
    schachbrett2(row, hoehe);
}
//# sourceMappingURL=script3.js.map