

//d)
for (let i: number = 0; i < 10; i++) {
    Math.random();
    console.log(Math.random() * 100 + 1);
}


//e) 
namespace Aufgabe {
    function factorial(n: number): number {
        let result: number = 1;
        while (n > 1);
        result *= n;
        n -= 1;

        return result;
    }
    factorial(1);
}
    

    


// //f)
function leapyears(): void {
    for (let i: number = 1900; i < 2021; i++) {
        if (i % 100 != 0 && i % 4 == 0 || i % 400 == 0) {
            console.log(i);
        }
    }
}
leapyears();

//Aufgabe 6
//b)
function returnNumbers(): void {
    for (let i: number = 1; i < 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            console.log("Buzz");
        }
        else {
            for (let i: number = 1; i < 100; i++) {
                console.log(i);
                if (i % 3 == 0 && i % 5 == 0 ) {
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
}
}
schachbrett();
//e)


let hashtag: string = "#";
let empty: string = "";
let schachbrett1: string = "";




function schachbrett2(seitenlaenge: number): void {
    for (let i: number = 0; i < seitenlaenge; i++) {
        if (i % 2 == 0) {
            for (let i: number = 0; i < seitenlaenge / 2; i++) {
                schachbrett1 = schachbrett1 + empty;
                schachbrett1 += hashtag;
            }
        }
        else {
            for (let i: number = 0; i < seitenlaenge / 2; i++) {
                schachbrett1 += hashtag;
                schachbrett1 = schachbrett1 + empty;
            }
        }
        schachbrett1 = schachbrett1 + "\n";
    }
    console.log(schachbrett1);
}
schachbrett2(5);

