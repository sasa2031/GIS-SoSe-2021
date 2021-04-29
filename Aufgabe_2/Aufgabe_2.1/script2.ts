//Aufgabe 4
//a) durch hinschauen: wir haben einen string mit dem Wert "Hallo". Das wird als
//erstes bei console.log(x) ausgegeben. Dann in der nächsten Zeile func1(x)
//springt man in die Funktion und überschreibt das "x" mit "y" ind dem string=Bla.
//Dann springt man erneut hoch, geht in die func2() und es wird "Blubb" ausgegeben.
//Dann springt in die Zeile func3() und in die dritte Funktion. Hier wird dann "Test"
//ausgegeben.

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}
//In der Konsole wird "Hallo  Bla  Hallo  Blubb  Test"ausgegeben. Ich hatte das 
//console.log(x)nach func1(x) nicht gesehen.
//b) Globale Variablen sind Variablen, auf die von jeder Stelle im Code zugegriffen
//werden kann. Lokale Variablen existieren nur innerhalb einer Funktion/Methode.
//Übergabeparameter sind Parameter, die in einer Funktion deklariert werden und dann
//übergeben werden.
//"Normale" Variablen kann man deklarieren und einem Wert zuweisen. Funktionen sind 
//komplexer und führen etwas aus z.B. in Form einer while-Schleife.

//Aufgabe 5
//a) 
function multiply(): void {
    let x: number = 5;
    let y: number = 2;

    console.log(x * y);
}
multiply();

//b)
function max(): void {
    let i: number = 8;
    let h: number = 11;

    if (i > h)
    console.log(i);

    else if (i < h)
    console.log(h);
}
max();

//c)
function count(): void {
    let z: number = 1;
    let result: number = 0;
    while (z <= 100); {
        result += z;
        ++z;
       
        console.log(result);
    }
   
}
count();
 