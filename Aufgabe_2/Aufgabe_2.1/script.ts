//Aufgabe 1
function a1(): void {
    let x: string = "Alles";
    debugger;
    console.log(x);
    func();
    console.log("Logo!");
}

a1();

function func(): void {
    console.log("Klar?");
} //a)Konsole gibt "Alles Klar? Logo!" aus. Zuverlässig: let, var, const.
 //b) zuerst wird "Alles" ausgegeben, dann wird die Funktion func1(); aufgerufen. Der Debugger
 //springt in die Codezeile und die Konsole gibt "Klar?" aus. Er springt 
 //zurück in die a1(); Funktion und gibt dann "Logo!"aus.              

 //Aufgabe 2
 //durch hinschauen: wir haben eine Funktion a2(); die eine Zahlenvariable "i"
 //mit dem Wert 9 besitzt. Die Funktion hat eine do-while Schleife sie sagt, solange
 //i größer als 0 ist, soll "i-1"in der Konsole ausgegeben werden. Also müsste die 
 //Ausgabe "8,7,6,5,4,3,2,1" lauten. //in Konsole: Die "9" hat gefehlt :D
 
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();


