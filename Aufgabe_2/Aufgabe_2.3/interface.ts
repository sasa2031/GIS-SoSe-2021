namespace Aufgabe_2_3 {
    
    //Aufgabe 2
    export interface Größe {

        durchmesser: number;
        image: string;
        preis: string;

    }
    export interface Toppings {

        toppings: string;
        image: string;
        aufpreis: string;


    }
    export interface Order {

        service: string;
        image: string;
        aufpreis: string;

    }
    export interface Pizza {     //2b) --> wird erst nächste Woche gebraucht
        größe: Größe;
        toppings: Toppings;
        order: Order;
    }
}
