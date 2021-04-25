

//d)
for (let i: number = 0; i < 10; i++) {
    Math.random();
    console.log(Math.random() * 100 + 1);
}


//e)
function factorial(): void {
    let n: number = 1;
    do {
        
        n = n * (n + 1);
    }while (n < 1);
    console.log(n);
}
factorial();

//f)
function leapyears(): void {
    for (let i: number = 1900; i < 2021; i++) {
        if (i % 4 == 0 && i % 100 != 0 && i % 400 == 0) {
            console.log(i);
        }
    }
    leapyears();
}

//Aufgabe 6
//b)
for (let i: number = 1; i < 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    }
}
//c)
for (let i: number = 1; i < 100; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0 ) {
        console.log("FizzBuzz");
    }
    
}
//a)
for (let hash: string = "#"; hash.length <= 7 ; hash += "#") {
    console.log(hash);
    
    }

//d)

function schachbrett(): void {
let zeichen: string = "#";

for (let i: number = 0; i < 8; i++ ) {

    if (i % 2 == 0) {

    console.log("" + zeichen + "" + zeichen + "" + zeichen + "" + "\n");
    }
    else {

    console.log(zeichen + "" + zeichen + "" + zeichen + "" + zeichen + "\n");
    }
    schachbrett();
}
//e)-> Ich habe hier leider nur einen Ansatz. Bin nicht weitergekommen :(

let zeichen2: string = "#";
let row: string;
let hoehe: number = 10;


function schachbrett2(_row: string, hoehe: number): void {

for (let i: number = 0; i < hoehe; i++) {
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
